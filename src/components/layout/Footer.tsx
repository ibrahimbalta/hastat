import React from 'react';
import { Phone, MapPin, Clock, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#142a20] text-[#FDFBF7] pt-16 pb-12 border-t border-[#234837]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Philosophy */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1B382B] border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44]">
                <span className="font-serif text-2xl font-bold italic">H</span>
              </div>
              <div>
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  HAS-TAT
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-[#D49B44] uppercase">
                  Aktar & Kuruyemiş
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-sm">
              Bartın'da kök salan lezzet ve doğallık durağımızda; taze kavrum kuruyemişleri, 
              katkısız organik baharatları, asırlık şifalı çay harmanlarını ve soğuk pres yağları 
              en yüksek hijyen standartlarında sunuyoruz.
            </p>

            <div className="flex items-center gap-2 text-xs text-[#D49B44]">
              <ShieldCheck className="w-4 h-4" />
              <span>Bartın Merkez'in 5.0 Google Yıldızlı Doğal Aktarı</span>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Ürün Kategorileri
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#urunler" className="hover:text-[#D49B44] transition-colors">
                  Taze Kavrum Kuruyemişler
                </a>
              </li>
              <li>
                <a href="#urunler" className="hover:text-[#D49B44] transition-colors">
                  Şifalı Bitkiler & Kış Çayları
                </a>
              </li>
              <li>
                <a href="#urunler" className="hover:text-[#D49B44] transition-colors">
                  Taş Değirmen Organik Baharatlar
                </a>
              </li>
              <li>
                <a href="#urunler" className="hover:text-[#D49B44] transition-colors">
                  İlk Soğuk Sıkım Saf Yağlar
                </a>
              </li>
              <li>
                <a href="#urunler" className="hover:text-[#D49B44] transition-colors">
                  Karakovan Petek Bal & Şifalı Macunlar
                </a>
              </li>
              <li>
                <a href="#sifa-rehberi" className="hover:text-[#D49B44] transition-colors text-[#D49B44]">
                  🌿 İnteraktif Şifa Rehberi
                </a>
              </li>
            </ul>
          </div>

          {/* Store Location & Hours */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-serif text-lg font-bold text-white tracking-wide">
              Mağaza & İletişim
            </h4>
            <ul className="space-y-2.5 text-xs text-white/75">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
                <span>
                  {STORE_INFO.address},<br />
                  74100 {STORE_INFO.district} / {STORE_INFO.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D49B44] shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-[#D49B44] font-semibold">
                  {STORE_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D49B44] shrink-0" />
                <span>{STORE_INFO.workingHours}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-[#D49B44] font-semibold border border-white/15 transition-colors"
              >
                Google Haritalar'da Aç →
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} HAS-TAT Aktar & Kuruyemiş. Tüm Hakları Saklıdır.</p>
          
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              Sevgi ve doğallıkla hazırlandı <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Yukarı Çık"
              title="Yukarı Çık"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
