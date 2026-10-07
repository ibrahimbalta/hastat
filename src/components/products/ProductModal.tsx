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
  Minus 
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { STORE_INFO } from '../../data/storeInfo';

export const ProductModal: React.FC = () => {
  const { modalProduct, setModalProduct, addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>('');
  const [quantity, setQuantity] = useState<number>(1);

  useEffect(() => {
    if (modalProduct && modalProduct.weightOptions.length > 0) {
      setSelectedWeight(modalProduct.weightOptions[0].weight);
      setQuantity(1);
    }
  }, [modalProduct]);

  if (!modalProduct) return null;

  const currentOption = modalProduct.weightOptions.find(w => w.weight === selectedWeight) || modalProduct.weightOptions[0];
  const totalPrice = currentOption.price * quantity;

  const handleAddToCart = () => {
    addToCart(modalProduct, selectedWeight, quantity);
    setModalProduct(null);
  };

  const handleWhatsAppConsult = () => {
    const text = encodeURIComponent(
      `Merhaba HAS-TAT Aktar, web sitenizdeki "${modalProduct.name}" (${selectedWeight}) ürünü hakkında bilgi almak ve sipariş vermek istiyorum.`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl border border-[#e8e2d5] max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setModalProduct(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 md:bg-gray-100 text-gray-700 hover:text-black flex items-center justify-center transition-colors shadow-sm"
          aria-label="Kapat"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Product Image & Badges */}
        <div className="md:w-1/2 relative bg-[#F7F4EC] min-h-[260px] md:min-h-full">
          <img
            src={modalProduct.imageUrl}
            alt={modalProduct.name}
            className="w-full h-full object-cover"
          />
          {modalProduct.badge && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#1B382B] text-[#D49B44] text-xs font-bold shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#D49B44]" />
              <span>{modalProduct.badge}</span>
            </div>
          )}
          <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-black/50 backdrop-blur-md text-white text-xs flex justify-between items-center">
            <span>📍 Menşei: <strong>{modalProduct.origin}</strong></span>
            <span className="text-[#D49B44] font-semibold">Tazelik Garantili</span>
          </div>
        </div>

        {/* Right Side: Product Details & Purchase Controls */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[60vh] md:max-h-[85vh] space-y-5">
          
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
                {modalProduct.categoryLabel}
              </span>
              <div className="flex items-center gap-1 text-[#D49B44]">
                <Star className="w-4 h-4 fill-[#D49B44]" />
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

          {/* Health Benefits Bullet Points */}
          <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#eee7d9] space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#1B382B] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#D49B44]" />
              Öne Çıkan Faydaları:
            </h4>
            <ul className="space-y-1.5 text-xs text-[#1A1615]/80">
              {modalProduct.benefits.map((b, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#1B382B] shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage & Storage Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#F7F4EC] border border-[#eee7d9]">
              <div className="flex items-center gap-1 text-[#1B382B] font-bold mb-1">
                <Info className="w-3.5 h-3.5 text-[#D49B44]" />
                <span>Kullanım Şekli</span>
              </div>
              <p className="text-[11px] text-[#1A1615]/75 leading-tight">{modalProduct.usageAdvice}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#F7F4EC] border border-[#eee7d9]">
              <div className="flex items-center gap-1 text-[#1B382B] font-bold mb-1">
                <Thermometer className="w-3.5 h-3.5 text-[#D49B44]" />
                <span>Saklama Koşulu</span>
              </div>
              <p className="text-[11px] text-[#1A1615]/75 leading-tight">{modalProduct.storageConditions}</p>
            </div>
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
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                      isSelected
                        ? 'bg-[#1B382B] text-[#D49B44] shadow-md'
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
                  className="p-2 hover:bg-[#eee7d9] text-[#1A1615] transition-colors"
                  aria-label="Azalt"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-3 text-xs font-bold text-[#1B382B]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-[#eee7d9] text-[#1A1615] transition-colors"
                  aria-label="Artır"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[11px] text-gray-400 block">Toplam Tutar</span>
              <span className="font-serif text-3xl font-bold text-[#1B382B]">
                ₺{totalPrice}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleAddToCart}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#1B382B] hover:bg-[#142a20] text-white font-bold text-sm shadow-lg transition-all active:scale-98"
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B44]" />
              <span>Sepete Ekle</span>
            </button>

            <button
              onClick={handleWhatsAppConsult}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-2xl bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#128C7E] font-semibold text-xs border border-[#25D366]/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp ile Bu Ürünü Sor / Sipariş Ver</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
