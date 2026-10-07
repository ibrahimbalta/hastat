import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star, Award, Heart } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#1B382B] text-[#FDFBF7] py-16 sm:py-24 lg:py-28">
      {/* Warm ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D49B44]/15 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C86446]/10 rounded-full blur-3xl pointer-events-none -ml-36 -mb-36" />

      {/* Subtle geometric oriental pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D49B44_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D49B44]/20 border border-[#D49B44]/35 text-[#D49B44] text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D49B44]" />
              <span>Bartın'ın Güvenilir Doğal Şifa & Gurme Lezzet Durağı</span>
            </div>

            {/* Main Editorial Serif Heading */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.08] tracking-tight text-white">
              Doğanın <span className="italic text-[#D49B44]">Saf Şifası</span>,<br />
              En Taze <span className="underline decoration-[#D49B44]/60 decoration-wavy decoration-1">Kavrum</span> Lezzetler.
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#F4EFE6]/80 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              HAS-TAT; Bartın'da günlük fırınlanan sıcak kuruyemişleri, asırlık şifalı bitki kürlerini, 
              katkısız taş değirmen baharatları ve ilk soğuk pres saf yağları güvenle sofranıza getirir.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <a
                href="#urunler"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D49B44] text-[#1B382B] hover:bg-[#e0a84e] font-semibold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span>Taze Ürünleri İncele</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sifa-rehberi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
              >
                <span>🌿 Şifa Rehberini Başlat</span>
              </a>
            </div>

            {/* Social Proof & Google Review Metric */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <div className="flex text-[#D49B44]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D49B44] text-[#D49B44]" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">5.0 / 5.0</span>
                <span>(10 Google Değerlendirmesi)</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#D49B44]" />
                <span>%100 Doğal & İlaçsız Hasat</span>
              </div>
            </div>

          </div>

          {/* Right Featured Visual Display */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2 backdrop-blur-md">
                
                <img
                  src="/store-photo.png"
                  alt="HAS-TAT Aktar ve Kuruyemiş Bartın Mağaza İçi"
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl brightness-95 contrast-105"
                  onError={(e) => {
                    // Fallback to high quality spice market image if needed
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1000&q=80";
                  }}
                />

                {/* Floating Overlay Badge: Store Details */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#1B382B]/90 backdrop-blur-md border border-[#D49B44]/30 shadow-lg flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-[#D49B44] text-xs font-semibold">
                      <Award className="w-3.5 h-3.5" />
                      <span>Bartın Merkez Şubesi</span>
                    </div>
                    <div className="text-white text-sm font-bold mt-0.5">
                      Bülent Ecevit Bulvarı
                    </div>
                    <div className="text-white/60 text-xs">
                      15 Temmuz Şehitler Okulu Karşısı
                    </div>
                  </div>
                  <a
                    href={STORE_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-[#D49B44] text-[#1B382B] text-xs font-bold rounded-lg hover:bg-white transition-colors"
                  >
                    Yol Tarifi
                  </a>
                </div>

                {/* Top Corner Floating Pill */}
                <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
                  <Heart className="w-3 h-3 text-red-400 fill-red-400" />
                  <span>Müşteri Memnuniyeti</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
