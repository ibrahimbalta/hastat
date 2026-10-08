import React from 'react';
import { ProductCard } from './ProductCard';
import { useCart } from '../../context/CartContext';
import { useSiteData } from '../../context/SiteDataContext';
import { CategoryType } from '../../types';
import { Sparkles, SlidersHorizontal, SearchX, CheckCircle } from 'lucide-react';

export const ProductCatalog: React.FC = () => {
  const { selectedCategory, setSelectedCategory, searchQuery, setSearchQuery } = useCart();
  const { data } = useSiteData();
  const { products } = data;

  const categories: { key: CategoryType; label: string; icon: string }[] = [
    { key: 'all', label: 'Tüm Ürünler', icon: '✨' },
    { key: 'kuruyemis', label: 'Taze Kuruyemiş', icon: '🌰' },
    { key: 'bitkicay', label: 'Şifalı Çay & Bitki', icon: '🌿' },
    { key: 'baharat', label: 'Organik Baharat', icon: '🌶️' },
    { key: 'yag', label: 'Soğuk Sıkım Yağ', icon: '🫒' },
    { key: 'balmacun', label: 'Doğal Bal & Macun', icon: '🍯' },
  ];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.benefits.some(b => b.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="urunler" className="py-20 sm:py-24 bg-[#FDFBF7] scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B382B]/10 text-[#1B382B] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#1B382B]/15">
              <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
              <span>Geleneksel & Taze Ürün Seçkisi</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B382B]">
              Doğanın En Saf Lezzetleri
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#1A1615]/70 max-w-xl leading-relaxed">
              Her biri özenle seçilmiş, günlük taze kavrulmuş veya ilk soğuk sıkım yöntemiyle şişelenmiş gurme lezzetler.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-[#1A1615]/70 font-semibold bg-white/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-[#e8e2d5] shadow-xs">
            <SlidersHorizontal className="w-4 h-4 text-[#D49B44]" />
            <span>Toplam <strong className="text-[#1B382B]">{filteredProducts.length}</strong> ürün listeleniyor</span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            const count = cat.key === 'all' 
              ? products.length 
              : products.filter(p => p.category === cat.key).length;

            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#1B382B] text-[#D49B44] shadow-md border border-[#D49B44]/50 scale-102 ring-1 ring-[#D49B44]/30'
                    : 'bg-white text-[#1A1615]/80 hover:bg-[#F7F4EC] hover:text-[#1B382B] border border-[#e8e2d5] hover:border-[#D49B44]/30 shadow-xs'
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.label}</span>
                <span className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-[#D49B44]/20 text-[#D49B44]' : 'bg-gray-100 text-gray-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Search notification badge */}
        {searchQuery && (
          <div className="mb-8 p-3.5 rounded-2xl bg-[#F7F4EC] border border-[#eee7d9] flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2 text-xs text-[#1A1615]">
              <CheckCircle className="w-4 h-4 text-[#D49B44]" />
              <span>
                <strong>"{searchQuery}"</strong> araması için <span className="font-bold">{filteredProducts.length}</span> sonuç bulundu
              </span>
            </div>
            <button
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#D49B44] font-bold hover:underline cursor-pointer"
            >
              Filtreyi Temizle
            </button>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#e8e2d5] p-8 max-w-md mx-auto shadow-md">
            <SearchX className="w-12 h-12 text-[#D49B44] mx-auto mb-3" />
            <h3 className="font-serif text-xl font-bold text-[#1B382B]">Ürün Bulunamadı</h3>
            <p className="text-xs text-[#1A1615]/70 mt-1">
              Arama kriterlerinize uygun ürün bulunamadı. Lütfen farklı bir arama terimi deneyin.
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-5 px-6 py-2.5 rounded-full bg-[#1B382B] text-[#D49B44] text-xs font-semibold hover:bg-[#142a20] transition-colors cursor-pointer"
            >
              Tüm Ürünleri Göster
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductCatalog;
