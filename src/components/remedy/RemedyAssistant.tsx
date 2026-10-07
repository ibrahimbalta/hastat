import React, { useState } from 'react';
import { 
  ShieldCheck, 
  HeartPulse, 
  Zap, 
  MoonStar, 
  Wind, 
  CheckCircle2, 
  Sparkles, 
  ShoppingBag, 
  AlertCircle,
  Clock,
  Layers
} from 'lucide-react';
import { REMEDIES } from '../../data/remedies';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Remedy, Product } from '../../types';

export const RemedyAssistant: React.FC = () => {
  const [activeRemedyId, setActiveRemedyId] = useState<string>(REMEDIES[0].id);
  const { addToCart, setModalProduct, showToast } = useCart();

  const activeRemedy: Remedy = REMEDIES.find(r => r.id === activeRemedyId) || REMEDIES[0];

  // Match recommended products from products database
  const recommendedProducts: Product[] = activeRemedy.recommendedProductIds
    .map(id => PRODUCTS.find(p => p.id === id))
    .filter(Boolean) as Product[];

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'HeartPulse': return <HeartPulse className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      case 'MoonStar': return <MoonStar className="w-5 h-5" />;
      case 'Wind': return <Wind className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const handleAddAllToCart = () => {
    recommendedProducts.forEach(prod => {
      addToCart(prod, prod.weightOptions[0].weight, 1);
    });
    showToast(`"${activeRemedy.title}" reçetesindeki tüm ürünler sepete eklendi!`);
  };

  return (
    <section id="sifa-rehberi" className="py-20 bg-[#F7F4EC] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B382B]/10 text-[#1B382B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
            <span>Kişiselleştirilmiş Aktar Asistanı</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B382B] leading-tight">
            Şifa & İhtiyaç Rehberi
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1A1615]/75">
            Vücudunuzun neye ihtiyacı olduğunu seçin; aktarlık ilmimiz ve asırlık tecrübemizle 
            hazırladığımız doğru bitki, baharat ve yağ kürlerini anında keşfedin.
          </p>
        </div>

        {/* Remedy Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {REMEDIES.map((remedy) => {
            const isSelected = remedy.id === activeRemedyId;
            return (
              <button
                key={remedy.id}
                onClick={() => setActiveRemedyId(remedy.id)}
                className={`flex items-center gap-2.5 px-4 sm:px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  isSelected
                    ? 'bg-[#1B382B] text-[#D49B44] shadow-md scale-105'
                    : 'bg-white text-[#1A1615]/80 hover:bg-white/80 hover:text-[#1B382B] border border-[#e8e2d5]'
                }`}
              >
                <span className={isSelected ? 'text-[#D49B44]' : 'text-[#1B382B]'}>
                  {getIcon(remedy.iconName)}
                </span>
                <span>{remedy.title}</span>
              </button>
            );
          })}
        </div>

        {/* Remedy Card Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e8e2d5] shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Remedy Details & Herbal Recipe */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
                  Uzman Aktar Reçetesi
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B382B] mt-1">
                  {activeRemedy.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#D49B44] font-medium mt-1">
                  "{activeRemedy.tagline}"
                </p>
                <p className="text-sm text-[#1A1615]/80 mt-3 leading-relaxed">
                  {activeRemedy.description}
                </p>
              </div>

              {/* Symptoms checklist */}
              <div className="bg-[#FDFBF7] p-5 rounded-2xl border border-[#eee7d9]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B382B] mb-3 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#D49B44]" />
                  Hedeflenen Şikayetler & Belirtiler:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-[#1A1615]/80">
                  {activeRemedy.symptoms.map((sym, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#1B382B] shrink-0 mt-0.5" />
                      <span>{sym}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation & Routine Box */}
              <div className="bg-[#1B382B] text-white p-5 rounded-2xl space-y-3">
                <div className="flex items-center gap-2 text-[#D49B44] text-xs font-bold uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Kullanım & Hazırlama Tavsiyesi</span>
                </div>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                  {activeRemedy.herbalRecipe.preparation}
                </p>
                <div className="pt-2 border-t border-white/10 text-xs text-[#D49B44]">
                  <strong>Düzen:</strong> {activeRemedy.herbalRecipe.routine}
                </div>
                {activeRemedy.herbalRecipe.caution && (
                  <div className="text-[11px] text-white/60 italic">
                    * {activeRemedy.herbalRecipe.caution}
                  </div>
                )}
              </div>

              {/* Add All to Cart Button */}
              <button
                onClick={handleAddAllToCart}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-2xl bg-[#D49B44] hover:bg-[#b67e2b] text-[#1B382B] font-bold text-sm shadow-md transition-all active:scale-98"
              >
                <Layers className="w-4 h-4" />
                <span>Bu Reçetedeki Tüm Ürünleri Sepete Ekle</span>
              </button>
            </div>

            {/* Right: Recommended Products for this Remedy */}
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[#1B382B] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D49B44]" />
                  <span>Reçeteyi Oluşturan Taze Ürünler ({recommendedProducts.length})</span>
                </h4>
                <span className="text-xs text-[#1A1615]/60">Doğrudan sepete eklenebilir</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedProducts.map((prod) => {
                  const defaultWeight = prod.weightOptions[0];
                  return (
                    <div
                      key={prod.id}
                      className="bg-[#FDFBF7] rounded-2xl p-4 border border-[#e8e2d5] hover:border-[#D49B44] hover:shadow-md transition-all flex flex-col justify-between group"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={prod.imageUrl}
                          alt={prod.name}
                          className="w-16 h-16 rounded-xl object-cover shrink-0 cursor-pointer group-hover:scale-105 transition-transform"
                          onClick={() => setModalProduct(prod)}
                        />
                        <div>
                          <span className="text-[10px] font-bold text-[#D49B44] uppercase tracking-wider">
                            {prod.categoryLabel}
                          </span>
                          <h5
                            onClick={() => setModalProduct(prod)}
                            className="text-sm font-bold text-[#1B382B] hover:text-[#D49B44] cursor-pointer line-clamp-1"
                          >
                            {prod.name}
                          </h5>
                          <span className="text-xs text-[#1A1615]/70 block mt-0.5">
                            Menşei: {prod.origin}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs text-[#1A1615]/70 line-clamp-2 mb-3">
                        {prod.shortDesc}
                      </p>

                      <div className="pt-3 border-t border-[#eee7d9] flex items-center justify-between">
                        <div>
                          <span className="text-[11px] text-[#1A1615]/60 block">Başlangıç:</span>
                          <span className="text-base font-extrabold text-[#1B382B]">
                            ₺{defaultWeight.price}
                          </span>
                          <span className="text-[11px] text-gray-500 ml-1">({defaultWeight.weight})</span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setModalProduct(prod)}
                            className="px-2.5 py-1.5 rounded-lg border border-[#1B382B]/20 text-[#1B382B] text-xs font-semibold hover:bg-white transition-colors"
                          >
                            İncele
                          </button>
                          <button
                            onClick={() => addToCart(prod, defaultWeight.weight, 1)}
                            className="p-2 rounded-lg bg-[#1B382B] text-[#D49B44] hover:bg-[#142a20] transition-colors"
                            title="Sepete Ekle"
                          >
                            <ShoppingBag className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
