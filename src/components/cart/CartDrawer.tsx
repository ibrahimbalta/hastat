import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Truck, 
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { generateWhatsAppOrderUrl, OrderCustomerInfo } from '../../utils/whatsapp';
import confetti from 'canvas-confetti';

const FREE_SHIPPING_THRESHOLD = 750;

export const CartDrawer: React.FC = () => {
  const { 
    cart, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    totalPrice, 
    totalItems 
  } = useCart();

  const [step, setStep] = useState<'items' | 'checkout'>('items');
  const [customer, setCustomer] = useState<OrderCustomerInfo>({
    fullName: '',
    phone: '',
    address: '',
    cityDistrict: 'Bartın Merkez',
    orderNote: '',
    deliveryPreference: 'bartin-teslimat'
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  if (!isCartOpen) return null;

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - totalPrice);
  const freeShippingProgress = Math.min(100, (totalPrice / FREE_SHIPPING_THRESHOLD) * 100);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors: { [key: string]: string } = {};
    if (!customer.fullName.trim()) errors.fullName = 'Lütfen adınızı ve soyadınızı giriniz.';
    if (!customer.phone.trim()) errors.phone = 'Lütfen telefon numaranızı giriniz.';
    if (!customer.address.trim()) errors.address = 'Lütfen teslimat adresinizi giriniz.';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Trigger celebratory confetti
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    const whatsappUrl = generateWhatsAppOrderUrl(cart, customer, totalPrice);
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={() => setIsCartOpen(false)} />

      {/* Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col justify-between border-l border-[#e8e2d5]">
          
          {/* Drawer Header */}
          <div className="p-5 bg-white border-b border-[#e8e2d5] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#1B382B] text-[#D49B44] flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#1B382B]">
                  {step === 'items' ? 'Alışveriş Sepetim' : 'Sipariş & Teslimat Bilgileri'}
                </h3>
                <span className="text-xs text-[#1A1615]/60">
                  {cart.length > 0 ? `${totalItems} adet ürün seçildi` : 'Sepetiniz Boş'}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
              aria-label="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          {cart.length > 0 && step === 'items' && (
            <div className="px-5 py-3 bg-[#F7F4EC] border-b border-[#eee7d9]">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 font-semibold text-[#1B382B]">
                  <Truck className="w-3.5 h-3.5 text-[#D49B44]" />
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-emerald-700 font-bold">Tebrikler! Kargo Ücretsiz!</span>
                  ) : (
                    <span>Ücretsiz Kargo için <strong>₺{remainingForFreeShipping}</strong> kaldı</span>
                  )}
                </span>
                <span className="text-[11px] font-bold text-[#D49B44]">%{Math.round(freeShippingProgress)}</span>
              </div>
              <div className="w-full bg-[#eee7d9] h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-[#D49B44] h-full rounded-full transition-all duration-300"
                  style={{ width: `${freeShippingProgress}%` }}
                />
              </div>
            </div>
          )}

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-20 h-20 rounded-full bg-[#1B382B]/10 flex items-center justify-center text-[#1B382B]">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h4 className="font-serif text-xl font-bold text-[#1B382B]">
                  Sepetiniz Henüz Boş
                </h4>
                <p className="text-xs text-[#1A1615]/70 max-w-xs leading-relaxed">
                  Taze kavrulmuş kuruyemişlerimizden veya uzman aktar kürlerimizden dilediğinizi ekleyin.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#1B382B] text-[#D49B44] text-xs font-bold hover:bg-[#142a20] transition-colors"
                >
                  Alışverişe Başla
                </button>
              </div>
            ) : step === 'items' ? (
              // ITEMS LIST STEP
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs pb-2 border-b border-[#eee7d9]">
                  <span className="font-semibold text-[#1A1615]/70">Eklenen Ürünler</span>
                  <button
                    onClick={clearCart}
                    className="text-red-600 hover:underline flex items-center gap-1 text-[11px]"
                  >
                    <Trash2 className="w-3 h-3" />
                    <span>Sepeti Boşalt</span>
                  </button>
                </div>

                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-white border border-[#e8e2d5] flex gap-3 items-center shadow-sm"
                  >
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="text-xs font-bold text-[#1B382B] truncate">
                        {item.name}
                      </h5>
                      <span className="inline-block mt-0.5 px-2 py-0.5 bg-[#F7F4EC] text-[#D49B44] text-[10px] font-bold rounded-md">
                        {item.selectedWeight}
                      </span>
                      <div className="text-xs font-extrabold text-[#1B382B] mt-1">
                        ₺{item.unitPrice * item.quantity}
                        <span className="text-[10px] text-gray-400 font-normal ml-1">
                          (₺{item.unitPrice} / adet)
                        </span>
                      </div>
                    </div>

                    {/* Quantity Controls & Delete */}
                    <div className="flex flex-col items-end gap-2">
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                        title="Ürünü Sil"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center border border-[#e8e2d5] rounded-lg overflow-hidden bg-[#F7F4EC]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="px-2 py-1 hover:bg-[#eee7d9] text-gray-700 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-bold text-[#1B382B]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="px-2 py-1 hover:bg-[#eee7d9] text-gray-700 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // CHECKOUT FORM STEP
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <button
                  type="button"
                  onClick={() => setStep('items')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1B382B] hover:text-[#D49B44] mb-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Sepete Geri Dön</span>
                </button>

                {/* Delivery Option Toggle */}
                <div>
                  <label className="text-xs font-bold text-[#1A1615]/80 block mb-2">
                    Teslimat Yöntemi:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCustomer({ ...customer, deliveryPreference: 'bartin-teslimat' })}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        customer.deliveryPreference === 'bartin-teslimat'
                          ? 'border-[#1B382B] bg-[#1B382B] text-white shadow-sm'
                          : 'border-[#e8e2d5] bg-white text-[#1A1615]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <Truck className="w-3.5 h-3.5 text-[#D49B44]" />
                        <span>Bartın Kapıya Teslim</span>
                      </div>
                      <span className="text-[10px] opacity-80 font-normal">Aynı gün kurye / elden</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setCustomer({ ...customer, deliveryPreference: 'kargo' })}
                      className={`p-3 rounded-xl border text-left text-xs font-bold transition-all ${
                        customer.deliveryPreference === 'kargo'
                          ? 'border-[#1B382B] bg-[#1B382B] text-white shadow-sm'
                          : 'border-[#e8e2d5] bg-white text-[#1A1615]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#D49B44]" />
                        <span>Tüm Türkiye Kargo</span>
                      </div>
                      <span className="text-[10px] opacity-80 font-normal">Hava almaz paketleme</span>
                    </button>
                  </div>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                    Adınız & Soyadınız: *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Örn: Ahmet Yılmaz"
                    value={customer.fullName}
                    onChange={(e) => setCustomer({ ...customer, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                  />
                  {formErrors.fullName && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">{formErrors.fullName}</span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                    Telefon Numaranız: *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Örn: 05xx xxx xx xx"
                    value={customer.phone}
                    onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                  />
                  {formErrors.phone && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">{formErrors.phone}</span>
                  )}
                </div>

                {/* City & District */}
                <div>
                  <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                    İlçe & Şehir:
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Merkez / Bartın"
                    value={customer.cityDistrict}
                    onChange={(e) => setCustomer({ ...customer, cityDistrict: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                    Açık Teslimat Adresi: *
                  </label>
                  <textarea
                    rows={2}
                    required
                    placeholder="Mahalle, Cadde, Sokak, No, Daire..."
                    value={customer.address}
                    onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                  />
                  {formErrors.address && (
                    <span className="text-[11px] text-red-500 mt-0.5 block">{formErrors.address}</span>
                  )}
                </div>

                {/* Order Note */}
                <div>
                  <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                    Sipariş Notu (Opsiyonel):
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Çerezleri ekstra çıtır taze kavurursanız sevinirim"
                    value={customer.orderNote}
                    onChange={(e) => setCustomer({ ...customer, orderNote: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                  />
                </div>
              </form>
            )}

          </div>

          {/* Drawer Footer (Summary & CTAs) */}
          {cart.length > 0 && (
            <div className="p-5 bg-white border-t border-[#e8e2d5] space-y-3 shadow-lg">
              <div className="space-y-1.5 text-xs text-[#1A1615]/80">
                <div className="flex justify-between">
                  <span>Ara Toplam:</span>
                  <span className="font-semibold">₺{totalPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Kargo / Teslimat:</span>
                  <span className="font-semibold text-emerald-700">
                    {remainingForFreeShipping === 0 ? 'Ücretsiz' : 'Standart / Kapıda'}
                  </span>
                </div>
                <div className="pt-2 border-t border-[#eee7d9] flex justify-between items-baseline">
                  <span className="font-bold text-sm text-[#1B382B]">Toplam Tutar:</span>
                  <span className="font-serif text-2xl font-bold text-[#1B382B]">
                    ₺{totalPrice}
                  </span>
                </div>
              </div>

              {step === 'items' ? (
                <button
                  onClick={() => setStep('checkout')}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#1B382B] hover:bg-[#142a20] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-98"
                >
                  <span>Siparişi Tamamla & Bilgileri Gir</span>
                  <ArrowRight className="w-4 h-4 text-[#D49B44]" />
                </button>
              ) : (
                <button
                  onClick={handleCheckoutSubmit}
                  className="w-full py-3.5 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all active:scale-98"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                  <span>WhatsApp ile Siparişi Gönder</span>
                </button>
              )}

              <p className="text-[11px] text-center text-[#1A1615]/60 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-[#D49B44]" />
                <span>Ödeme kapıda nakit/kredi kartı veya havale ile alınır.</span>
              </p>
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
