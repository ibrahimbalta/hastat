import React, { useState, useEffect } from 'react';
import { 
  X, 
  ShoppingBag, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  MessageCircle, 
  CheckCircle2, 
  Info, 
  Thermometer, 
  Plus, 
  Minus,
  Award,
  Leaf
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../../context/CartContext';
import { STORE_INFO } from '../../data/storeInfo';

export const ProductModal: React.FC = () => {
  const { modalProduct, setModalProduct, addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'advice'>('benefits');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (modalProduct && modalProduct.weightOptions.length > 0) {
      setSelectedWeight(modalProduct.weightOptions[0].weight);
      setQuantity(1);
      setActiveTab('benefits');
      setIsZoomed(false);
    }
  }, [modalProduct]);

  if (!modalProduct) return null;

  const currentOption = modalProduct.weightOptions.find(w => w.weight === selectedWeight) || modalProduct.weightOptions[0];
  const totalPrice = currentOption.price * quantity;

  const handleAddToCart = () => {
    addToCart(modalProduct, selectedWeight, quantity);
    try {
      confetti({
        particleCount: 35,
        spread: 55,
        origin: { y: 0.65 },
        colors: ['#D49B44', '#1B382B', '#F3C978'],
      });
    } catch {
      // Ignore if confetti not supported
    }
    setModalProduct(null);
  };

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(
      `Merhaba HAS-TAT Aktar, web sitenizdeki "${modalProduct.name}" (${selectedWeight}) ürünü hakkında bilgi almak ve sipariş vermek istiyorum.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#e8e2d5] max-h-[92vh] flex flex-col md:flex-row animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setModalProduct(null)}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/90 md:bg-gray-100/90 text-gray-700 hover:text-black flex items-center justify-center transition-colors shadow-md hover:scale-105 cursor-pointer"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image with Zoom & Apothecary Seal */}
        <div 
          className="md:w-1/2 relative bg-[#F7F4EC] min-h-[280px] md:min-h-full overflow-hidden cursor-zoom-in"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img
            src={modalProduct.imageUrl}
            alt={modalProduct.name}
            className={`w-full h-full object-cover transition-transform duration-500 ease-out ${
              isZoomed ? 'scale-125' : 'scale-100'
            }`}
          />

          {/* Floating Top Badge */}
          {modalProduct.badge && (
            <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-[#1B382B]/95 text-[#D49B44] text-xs font-bold shadow-md flex items-center gap-1.5 border border-[#D49B44]/40 z-10">
              <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
              <span>{modalProduct.badge}</span>
            </div>
          )}

          {/* Gold Mühür (Apothecary Atelier Seal) */}
          <div className="absolute top-4 right-16 md:right-4 w-12 h-12 rounded-full border-2 border-[#D49B44] bg-[#1B382B]/90 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg pointer-events-none z-10 rotate-12">
            <Award className="w-4 h-4 text-[#D49B44]" />
            <span className="text-[7px] text-[#F3C978] font-bold tracking-tighter uppercase leading-none mt-0.5">
              HAS-TAT
            </span>
          </div>

          {/* Origin & Authenticity Bar */}
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-black/65 backdrop-blur-md text-white text-xs flex justify-between items-center shadow-lg z-10">
            <span>📍 Menşei: <strong>{modalProduct.origin}</strong></span>
            <span className="text-[#D49B44] font-semibold flex items-center gap-1">
              <Leaf className="w-3 h-3 text-[#D49B44]" />
              %100 Doğal
            </span>
          </div>
        </div>

        {/* Right Side: Product Details & Purchase Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[62vh] md:max-h-[88vh] space-y-5">
          
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
                {modalProduct.categoryLabel}
              </span>
              <div className="flex items-center gap-1 text-[#D49B44]">
                <Star className="w-3.5 h-3.5 fill-[#D49B44]" />
                <span className="font-bold text-[#1A1615]">{modalProduct.rating}</span>
                <span className="text-gray-400">({modalProduct.reviewCount} yorum)</span>
              </div>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B382B]">
              {modalProduct.name}
            </h3>
            <p className="text-xs sm:text-sm text-[#1A1615]/80 mt-2 leading-relaxed">
              {modalProduct.longDesc}
            </p>
          </div>

          {/* Tabs: "Faydaları" vs "Aktar Tavsiyesi" */}
          <div className="space-y-3">
            <div className="flex border-b border-[#eee7d9]">
              <button
                type="button"
                onClick={() => setActiveTab('benefits')}
                className={`pb-2 px-3 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'benefits'
                    ? 'border-[#D49B44] text-[#1B382B]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                Öne Çıkan Faydaları
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('advice')}
                className={`pb-2 px-3 text-xs font-bold transition-colors cursor-pointer border-b-2 ${
                  activeTab === 'advice'
                    ? 'border-[#D49B44] text-[#1B382B]'
                    : 'border-transparent text-gray-400 hover:text-gray-600'
                }`}
              >
                Aktar Tavsiyesi & Saklama
              </button>
            </div>

            {activeTab === 'benefits' ? (
              <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#eee7d9] space-y-2 animate-in fade-in duration-200">
                <ul className="space-y-1.5 text-xs text-[#1A1615]/80">
                  {modalProduct.benefits.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#1B382B] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs animate-in fade-in duration-200">
                <div className="p-3.5 rounded-2xl bg-[#F7F4EC] border border-[#eee7d9]">
                  <div className="flex items-center gap-1.5 text-[#1B382B] font-bold mb-1">
                    <Info className="w-3.5 h-3.5 text-[#D49B44]" />
                    <span>Kullanım Şekli</span>
                  </div>
                  <p className="text-[11px] text-[#1A1615]/75 leading-relaxed">{modalProduct.usageAdvice}</p>
                </div>
                <div className="p-3.5 rounded-2xl bg-[#F7F4EC] border border-[#eee7d9]">
                  <div className="flex items-center gap-1.5 text-[#1B382B] font-bold mb-1">
                    <Thermometer className="w-3.5 h-3.5 text-[#D49B44]" />
                    <span>Saklama Koşulu</span>
                  </div>
                  <p className="text-[11px] text-[#1A1615]/75 leading-relaxed">{modalProduct.storageConditions}</p>
                </div>
              </div>
            )}
          </div>

          {/* Weight Selection Pills */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-[#1A1615]/70 block mb-2">
              Gramaj / Paket Boyutu:
            </label>
            <div className="flex flex-wrap gap-2">
              {modalProduct.weightOptions.map((opt) => {
                const isSelected = opt.weight === selectedWeight;
                return (
                  <button
                    key={opt.weight}
                    onClick={() => setSelectedWeight(opt.weight)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1B382B] text-[#D49B44] ring-1 ring-[#D49B44]/50 shadow-md'
                        : 'bg-[#F7F4EC] text-[#1A1615]/80 hover:bg-[#eee7d9] border border-[#e8e2d5]'
                    }`}
                  >
                    <span>{opt.weight}</span>
                    <span className="text-[11px] opacity-80">• ₺{opt.price}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity & Total Price */}
          <div className="flex items-center justify-between pt-3 border-t border-[#eee7d9]">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-[#1A1615]/70">Adet:</span>
              <div className="flex items-center border border-[#e8e2d5] rounded-xl overflow-hidden bg-[#F7F4EC]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-[#eee7d9] text-[#1A1615] transition-colors cursor-pointer"
                  aria-label="Azalt"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-bold text-[#1B382B]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-[#eee7d9] text-[#1A1615] transition-colors cursor-pointer"
                  aria-label="Artır"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-gray-400 block leading-none">Toplam Tutar</span>
              <span className="font-serif text-3xl font-bold text-[#1B382B] mt-1 block">
                ₺{totalPrice}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#1B382B] hover:bg-[#142a20] text-white font-bold text-sm shadow-lg transition-all active:scale-98 cursor-pointer shimmer-effect"
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B44]" />
              <span>Sepete Ekle</span>
            </button>

            <button
              onClick={handleWhatsAppConsult}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs border border-[#25D366]/30 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp ile Bu Ürünü Danış / Sipariş Ver</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductModal;
