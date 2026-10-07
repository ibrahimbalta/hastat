import React, { useState, useRef, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, ChevronDown, Sparkles, MapPin, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useSiteData } from '../../context/SiteDataContext';
import { CategoryType } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    totalItems, 
    setIsCartOpen, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery 
  } = useCart();

  const { data } = useSiteData();
  const { storeInfo } = data;
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProductDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const productCategories: { key: CategoryType; label: string; icon: string; desc: string }[] = [
    { key: 'kuruyemis', label: 'Taze Kuruyemiş', icon: '🌰', desc: 'Günlük sıcak fırın kavrum çıtır çerezler' },
    { key: 'bitkicay', label: 'Şifalı Çay & Bitkiler', icon: '🌿', desc: 'Ihlamur, adaçayı ve kış kürleri' },
    { key: 'baharat', label: 'Organik Baharatlar', icon: '🌶️', desc: 'Taş değirmen, katkısız saf aromalar' },
    { key: 'yag', label: 'Soğuk Sıkım Yağlar', icon: '🫒', desc: 'Çörek otu, sarı kantaron ve saf yağlar' },
    { key: 'balmacun', label: 'Doğal Bal & Macun', icon: '🍯', desc: 'Karakovan petek balı ve andız pekmezi' },
  ];

  const handleCategorySelect = (catKey: CategoryType) => {
    setSelectedCategory(catKey);
    setIsProductDropdownOpen(false);
    setIsMobileMenuOpen(false);
    
    // Smooth scroll to catalog
    const el = document.getElementById('urunler');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#e8e2d5] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-3 sm:gap-6">
          
          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#1B382B] hover:bg-[#1B382B]/10 transition-colors"
              aria-label="Menüyü Aç"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Luxury Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 shrink-0 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1B382B] flex items-center justify-center text-[#D49B44] shadow-md group-hover:bg-[#142a20] transition-colors shrink-0">
              <span className="font-serif text-2xl font-bold italic">
                {storeInfo.name.charAt(0) || 'H'}
              </span>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-serif text-2xl sm:text-3xl font-extrabold tracking-wide text-[#1B382B] leading-none">
                {storeInfo.name}
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#D49B44] uppercase mt-0.5">
                Aktar & Kuruyemiş
              </span>
            </div>
          </a>

          {/* Modern Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            
            <a
              href="#"
              className="px-3.5 py-2 text-sm font-semibold text-[#1A1615]/80 hover:text-[#1B382B] hover:bg-[#1B382B]/5 rounded-full transition-colors"
            >
              Ana Sayfa
            </a>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-full transition-colors ${
                  isProductDropdownOpen
                    ? 'bg-[#1B382B] text-[#D49B44]'
                    : 'text-[#1A1615]/80 hover:text-[#1B382B] hover:bg-[#1B382B]/5'
                }`}
              >
                <span>Ürünlerimiz</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isProductDropdownOpen ? 'rotate-180 text-[#D49B44]' : 'text-gray-400'}`} />
              </button>

              {/* Dropdown Menu */}
              {isProductDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-[#e8e2d5] p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="p-2 border-b border-[#eee7d9] mb-1">
                    <button
                      onClick={() => handleCategorySelect('all')}
                      className="w-full text-left px-3 py-2 rounded-xl text-xs font-bold text-[#1B382B] hover:bg-[#F7F4EC] flex items-center justify-between"
                    >
                      <span>✨ Tüm Ürünleri İncele ({data.products.length})</span>
                      <span className="text-[10px] text-[#D49B44] font-semibold">Tüm Liste →</span>
                    </button>
                  </div>

                  <div className="space-y-0.5">
                    {productCategories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => handleCategorySelect(cat.key)}
                        className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-[#F7F4EC] transition-colors flex items-start gap-2.5 group"
                      >
                        <span className="text-lg shrink-0 mt-0.5">{cat.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-[#1B382B] group-hover:text-[#D49B44] transition-colors">
                            {cat.label}
                          </div>
                          <div className="text-[11px] text-gray-500 leading-tight">
                            {cat.desc}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Şifa Rehberi Link */}
            <a
              href="#sifa-rehberi"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-[#1B382B] hover:bg-[#1B382B]/8 rounded-full transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
              <span>Şifa Rehberi</span>
            </a>

            {/* Bartın Mağazamız Link */}
            <a
              href="#magaza"
              className="flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-[#1A1615]/80 hover:text-[#1B382B] hover:bg-[#1B382B]/5 rounded-full transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#D49B44]" />
              <span>{storeInfo.city} Mağazamız</span>
            </a>

            {/* Subtle Admin Link */}
            <a
              href="#admin"
              className="flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-[#1B382B] hover:bg-gray-100 rounded-full transition-colors"
              title="Yönetici Paneli"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#D49B44]" />
              <span>Yönetim</span>
            </a>

          </nav>

          {/* Right Action Icons & Phone */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Search Input / Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-white border border-[#D49B44] rounded-full px-3 py-1.5 shadow-sm">
                  <Search className="w-4 h-4 text-[#D49B44] mr-2 shrink-0" />
                  <input
                    type="text"
                    placeholder="Ürün veya şifa ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-28 sm:w-48 text-xs text-[#1A1615] bg-transparent outline-none"
                  />
                  <button 
                    onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                    className="text-gray-400 hover:text-gray-600 ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 sm:p-2.5 rounded-full text-[#1B382B] hover:bg-[#1B382B]/8 transition-colors"
                  title="Ürün Ara"
                  aria-label="Ürün Ara"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Call Button */}
            <a
              href={`tel:${storeInfo.phone}`}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#1B382B] bg-[#1B382B]/8 hover:bg-[#1B382B]/15 rounded-full transition-all whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#D49B44] shrink-0" />
              <span>{storeInfo.phoneDisplay}</span>
            </a>

            {/* Cart Drawer Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-[#1B382B] text-white hover:bg-[#142a20] shadow-md transition-all active:scale-95 shrink-0"
              aria-label="Sepeti Görüntüle"
            >
              <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-[#D49B44] shrink-0" />
              <span className="hidden sm:inline text-xs font-bold tracking-wide">Sepetim</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#D49B44] text-[#1B382B] text-[11px] font-black flex items-center justify-center shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#e8e2d5] px-4 pt-4 pb-6 shadow-xl animate-in fade-in slide-in-from-top-2">
          <div className="space-y-1">
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#1A1615] hover:bg-[#1B382B]/8"
            >
              🏠 Ana Sayfa
            </a>

            {/* Category Submenu in Mobile */}
            <div className="py-2 px-3 bg-white rounded-2xl border border-[#eee7d9] my-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B44] block mb-1.5">
                Kategoriler ({data.products.length} Ürün)
              </span>
              <div className="grid grid-cols-1 gap-1">
                {productCategories.map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => handleCategorySelect(cat.key)}
                    className="w-full text-left px-2.5 py-2 rounded-lg text-xs font-semibold text-[#1B382B] hover:bg-[#F7F4EC] flex items-center gap-2"
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <a
              href="#sifa-rehberi"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#1B382B] hover:bg-[#1B382B]/8"
            >
              🌿 Şifa & İhtiyaç Rehberi
            </a>

            <a
              href="#magaza"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#1A1615] hover:bg-[#1B382B]/8"
            >
              📍 {storeInfo.city} Mağazamız
            </a>

            <a
              href="#admin"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#D49B44] bg-[#1B382B]/5 hover:bg-[#1B382B]/10"
            >
              🔐 Yönetici Girişi (Admin Paneli)
            </a>
          </div>

          <div className="mt-4 pt-4 border-t border-[#e8e2d5] flex flex-col gap-2.5">
            <a
              href={`tel:${storeInfo.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-2xl bg-[#1B382B] text-white font-bold text-xs shadow-md"
            >
              <Phone className="w-4 h-4 text-[#D49B44]" />
              <span>{storeInfo.phoneDisplay} - Hemen Ara</span>
            </a>

            <div className="text-center text-[11px] text-[#1A1615]/70">
              📍 {storeInfo.address}, {storeInfo.city}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
