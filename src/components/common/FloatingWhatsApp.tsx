import React from 'react';
import { MessageCircle } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export const FloatingWhatsApp: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent(
      "Merhaba HAS-TAT Aktar, web sitenizden ulaşıyorum. Ürünleriniz ve sipariş hakkında bilgi almak istiyorum."
    );
    window.open(`https://wa.me/${STORE_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip text on desktop */}
      <div className="hidden sm:block mr-3 px-3 py-1.5 rounded-xl bg-[#1B382B] text-[#D49B44] text-xs font-bold shadow-lg border border-[#D49B44]/30 opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        <span>Sipariş & Bilgi Hattı</span>
      </div>

      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
        aria-label="WhatsApp İletişim Hattı"
        title="WhatsApp ile Sipariş Ver"
      >
        {/* Soft pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
      </button>
    </div>
  );
};
