import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Phone, Sparkles } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { STORE_INFO } from '../../data/storeInfo';
import { CategoryType } from '../../types';

export const Navbar: React.FC = () => {
  const { 
    totalItems, 
    setIsCartOpen, 
    selectedCategory, 
    setSelectedCategory, 
    searchQuery, 
    setSearchQuery 
  } = useCart();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navItems: { label: string; category?: CategoryType; href?: string }[] = [
    { label: 'Tüm Ürünler', category: 'all', href: '#urunler' },
    { label: 'Taze Kuruyemiş', category: 'kuruyemis', href: '#urunler' },
    { label: 'Şifalı Çaylar', category: 'bitkicay', href: '#urunler' },
    { label: 'Organik Baharat', category: 'baharat', href: '#urunler' },
    { label: 'Soğuk Sıkım Yağ', category: 'yag', href: '#urunler' },
    { label: 'Bal & Macun', category: 'balmacun', href: '#urunler' },
    { label: '🌿 Şifa Rehberi', href: '#sifa-rehberi' },
    { label: 'Bartın Mağazamız', href: '#magaza' },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.category) {
      setSelectedCategory(item.category);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-[#e8e2d5] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-[#1B382B] hover:bg-[#1B382B]/5 transition-colors"
              aria-label="Menüyü Aç"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Luxury Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-[#1B382B] flex items-center justify-center text-[#D49B44] shadow-md group-hover:bg-[#142a20] transition-colors">
              <span className="font-serif text-2xl font-bold italic tracking-tighter">H</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wider text-[#1B382B] leading-none">
                HAS-TAT
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.22em] text-[#D49B44] uppercase mt-0.5">
                Aktar & Kuruyemiş
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item, idx) => {
              const isActive = item.category && selectedCategory === item.category;
              return (
                <a
                  key={idx}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#1B382B] text-white shadow-sm'
                      : 'text-[#1A1615]/80 hover:text-[#1B382B] hover:bg-[#1B382B]/5'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Input / Toggle */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-white border border-[#D49B44] rounded-full px-3 py-1.5 shadow-sm">
                  <Search className="w-4 h-4 text-[#D49B44] mr-2" />
                  <input
                    type="text"
                    placeholder="Ürün, baharat veya şifa ara..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus
                    className="w-36 sm:w-56 text-xs text-[#1A1615] bg-transparent outline-none"
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
                  className="p-2.5 rounded-full text-[#1B382B] hover:bg-[#1B382B]/5 transition-colors"
                  title="Ürün Ara"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Quick Call Button (Desktop) */}
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-[#1B382B] bg-[#1B382B]/8 hover:bg-[#1B382B]/15 rounded-full transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-[#1B382B]" />
              <span>{STORE_INFO.phoneDisplay}</span>
            </a>

            {/* Cart Drawer Button with Dynamic Counter Badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1B382B] text-white hover:bg-[#142a20] shadow-md transition-all active:scale-95"
              aria-label="Sepeti Görüntüle"
            >
              <ShoppingBag className="w-5 h-5 text-[#D49B44]" />
              <span className="hidden sm:inline text-xs font-semibold tracking-wide">Sepetim</span>
              {totalItems > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#D49B44] text-[#1B382B] text-[11px] font-black flex items-center justify-center animate-pulse shadow-sm">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#FDFBF7] border-b border-[#e8e2d5] px-4 pt-3 pb-6 shadow-lg animate-in fade-in slide-in-from-top-2">
          <div className="space-y-1">
            {navItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={() => handleNavClick(item)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-[#1A1615] hover:bg-[#1B382B]/5 hover:text-[#1B382B]"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#e8e2d5] flex flex-col gap-2">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#1B382B] text-white font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#D49B44]" />
              {STORE_INFO.phoneDisplay} - Hemen Ara
            </a>
            <div className="text-center text-xs text-[#1A1615]/60 mt-1">
              📍 {STORE_INFO.address}, Bartın
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
