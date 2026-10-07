import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Star, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';
import { GoogleReviews } from './GoogleReviews';

export const StoreSection: React.FC = () => {
  return (
    <section id="magaza" className="py-20 bg-[#F7F4EC] relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B382B]/10 text-[#1B382B] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
            <span>Merkez Mağazamız & İletişim</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B382B]">
            Bartın'daki Sıcak Yuvamız
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#1A1615]/75">
            Sizleri taze kavrulmuş fındık kokusu ve doğal şifalı bitkilerin huzur veren atmosferinde 
            ağırlamaktan onur duyarız.
          </p>
        </div>

        {/* Store Detail Showcase Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#e8e2d5] shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Store Photo */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e8e2d5] group">
                <img
                  src="/store-photo.png"
                  alt="HAS-TAT Aktar ve Kuruyemiş Bartın Mağaza İçi Reyonlar"
                  className="w-full h-80 sm:h-96 object-cover group-hover:scale-103 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="text-xs text-[#D49B44] font-bold uppercase tracking-wider">
                      Gerçek Mağaza Görüntüsü
                    </span>
                    <h3 className="font-serif text-2xl font-bold mt-0.5">
                      HAS-TAT AKTAR & KURUYEMİŞ
                    </h3>
                    <p className="text-xs text-white/80">
                      Bartın Merkez • Taze Çerez & Şifalı Bitki Reyonları
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Store Contact & Location Details */}
            <div className="lg:col-span-6 space-y-6">
              
              <div className="space-y-4">
                {/* Address Box */}
                <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#eee7d9]">
                  <div className="w-10 h-10 rounded-xl bg-[#1B382B] text-[#D49B44] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#D49B44] uppercase tracking-wider">
                      Mağaza Adresi
                    </span>
                    <h4 className="text-sm font-bold text-[#1B382B]">
                      {STORE_INFO.address}
                    </h4>
                    <p className="text-xs text-[#1A1615]/70 mt-0.5">
                      74100 {STORE_INFO.district} / {STORE_INFO.city}
                    </p>
                  </div>
                </div>

                {/* Phone & Working Hours */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#eee7d9] flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1B382B]/10 text-[#1B382B] flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#D49B44] uppercase tracking-wider">
                        Sipariş & Bilgi
                      </span>
                      <a 
                        href={`tel:${STORE_INFO.phone}`} 
                        className="text-xs font-bold text-[#1B382B] hover:text-[#D49B44] block"
                      >
                        {STORE_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#eee7d9] flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-[#1B382B]/10 text-[#1B382B] flex items-center justify-center shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#D49B44] uppercase tracking-wider">
                        Açılış Saatleri
                      </span>
                      <p className="text-xs font-bold text-[#1B382B]">
                        {STORE_INFO.workingHours}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={STORE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#1B382B] hover:bg-[#142a20] text-white font-bold text-xs shadow-md transition-all active:scale-98"
                >
                  <Navigation className="w-4 h-4 text-[#D49B44]" />
                  <span>Google Haritalarda Yol Tarifi Al</span>
                </a>

                <a
                  href={`tel:${STORE_INFO.phone}`}
                  className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#D49B44] hover:bg-[#b67e2b] text-[#1B382B] font-bold text-xs shadow-md transition-all active:scale-98"
                >
                  <Phone className="w-4 h-4" />
                  <span>Hemen Ara</span>
                </a>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsapp}?text=${encodeURIComponent("Merhaba HAS-TAT Aktar, mağazanızın konumunu ve güncel çalışma saatlerini rica edebilir miyim?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs shadow-md transition-all active:scale-98"
                  title="WhatsApp Konum İste"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* Real Google Reviews Section */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
              Müşteri Memnuniyeti
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B382B] mt-1">
              Google'da 5.0 Yıldızlı Yorumlarımız
            </h3>
          </div>
          <GoogleReviews />
        </div>

      </div>
    </section>
  );
};
