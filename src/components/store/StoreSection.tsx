import React from 'react';
import { MapPin, Phone, Clock, Navigation, MessageCircle, Sparkles, CheckCircle2, Award, Star } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { GoogleReviews } from './GoogleReviews';
import { TiltCard } from '../effects/TiltCard';

export const StoreSection: React.FC = () => {
  const { data } = useSiteData();
  const { storeInfo } = data;

  return (
    <section id="magaza" className="py-20 sm:py-24 bg-[#F7F4EC] relative scroll-mt-20 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D49B44]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1B382B]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1B382B]/10 text-[#1B382B] text-xs font-semibold uppercase tracking-wider mb-3 border border-[#1B382B]/15">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
            <span>Merkez Mağazamız & İletişim</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1B382B]">
            {storeInfo.city}'daki Sıcak Yuvamız
          </h2>
          <p className="mt-2 text-xs sm:text-base text-[#1A1615]/75 leading-relaxed">
            Sizleri taze kavrulmuş fındık kokusu ve doğal şifalı bitkilerin huzur veren atmosferinde 
            ağırlamaktan onur duyarız.
          </p>
        </div>

        {/* Store Detail Showcase Card with 3D Tilt Wrapper */}
        <TiltCard
          maxTilt={4}
          glare={true}
          glareMaxOpacity={0.14}
          scale={1.01}
          className="rounded-3xl mb-12 sm:mb-16"
        >
          <div className="bg-white/95 backdrop-blur-md rounded-3xl p-5 sm:p-8 lg:p-10 border border-[#e8e2d5] hover:border-[#D49B44]/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Store Photo / Google Business Profile Card */}
              <div className="lg:col-span-6 relative">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#e8e2d5] bg-[#FDFBF7] group">
                  <img
                    src="./store-photo.png"
                    alt={`${storeInfo.title} Google İşletme Kartı`}
                    className="w-full h-auto max-h-96 object-contain mx-auto group-hover:scale-102 transition-transform duration-300"
                  />
                </div>
                <div className="mt-3 text-center">
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1B382B] font-semibold bg-[#1B382B]/5 px-3.5 py-1.5 rounded-full border border-[#1B382B]/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Google Haritalar Doğrulanmış İşletme Kartı ({storeInfo.googleRating} Puan)
                  </span>
                </div>
              </div>

              {/* Store Contact & Location Details */}
              <div className="lg:col-span-6 space-y-5">
                
                {/* 5.0 Google Gold Plaque */}
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[#1B382B] to-[#142A20] text-white border border-[#D49B44]/40 shadow-md flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#D49B44] text-[#1B382B] flex items-center justify-center font-bold shrink-0 shadow-sm">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-[#F3C978]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-[#F3C978] text-[#F3C978]" />
                        ))}
                        <span className="font-extrabold text-white text-xs ml-1">{storeInfo.googleRating}.0 / 5.0</span>
                      </div>
                      <span className="text-[11px] text-white/70 block mt-0.5 font-medium">
                        Bartın'ın En Yüksek Puanlı Doğal Aktarı
                      </span>
                    </div>
                  </div>
                  <span className="hidden sm:inline-block text-[11px] text-[#D49B44] font-bold uppercase tracking-wider bg-[#D49B44]/15 px-3 py-1 rounded-full border border-[#D49B44]/30">
                    5.0 Mükemmellik
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Address Box */}
                  <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FDFBF7] border border-[#eee7d9]">
                    <div className="w-10 h-10 rounded-xl bg-[#1B382B] text-[#D49B44] flex items-center justify-center shrink-0 shadow-xs">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[11px] font-bold text-[#D49B44] uppercase tracking-wider block">
                        Mağaza Adresi
                      </span>
                      <h4 className="text-sm font-bold text-[#1B382B] leading-snug">
                        {storeInfo.address}
                      </h4>
                      <p className="text-xs text-[#1A1615]/70 mt-0.5">
                        {storeInfo.district} / {storeInfo.city}
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
                        <span className="text-[10px] font-bold text-[#D49B44] uppercase tracking-wider block">
                          Sipariş & Bilgi
                        </span>
                        <a 
                          href={`tel:${storeInfo.phone}`} 
                          className="text-xs font-bold text-[#1B382B] hover:text-[#D49B44] block mt-0.5 whitespace-nowrap"
                        >
                          {storeInfo.phoneDisplay}
                        </a>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#eee7d9] flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-[#1B382B]/10 text-[#1B382B] flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#D49B44] uppercase tracking-wider block">
                          Açılış Saatleri
                        </span>
                        <p className="text-xs font-bold text-[#1B382B] mt-0.5">
                          {storeInfo.workingHours}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                  <a
                    href={storeInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#1B382B] hover:bg-[#142a20] text-white font-bold text-xs shadow-md transition-all active:scale-98"
                  >
                    <Navigation className="w-4 h-4 text-[#D49B44]" />
                    <span>Google Haritalarda Yol Tarifi</span>
                  </a>

                  <a
                    href={`tel:${storeInfo.phone}`}
                    className="flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-[#D49B44] hover:bg-[#b67e2b] text-[#1B382B] font-bold text-xs shadow-md transition-all active:scale-98"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Hemen Ara</span>
                  </a>

                  <a
                    href={`https://wa.me/${storeInfo.whatsapp}?text=${encodeURIComponent("Merhaba HAS-TAT Aktar, mağazanızın tam konumunu alabilir miyim?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xs shadow-md transition-all active:scale-98"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Konum</span>
                  </a>
                </div>

              </div>

            </div>
          </div>
        </TiltCard>

        {/* Real Google Reviews Section */}
        <div className="space-y-4">
          <div className="text-center mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
              Müşteri Memnuniyeti
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1B382B] mt-1">
              Google'da {storeInfo.googleRating} Yıldızlı Yorumlarımız
            </h3>
          </div>
          <GoogleReviews />
        </div>

      </div>
    </section>
  );
};

export default StoreSection;
