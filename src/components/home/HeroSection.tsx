import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Star, Award, Heart, CheckCircle2 } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export const HeroSection: React.FC = () => {
  const { data } = useSiteData();
  const { hero, storeInfo } = data;

  return (
    <section className="relative overflow-hidden bg-[#1B382B] text-[#FDFBF7] py-12 sm:py-20 lg:py-24">
      {/* Warm ambient background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D49B44]/15 rounded-full blur-3xl pointer-events-none -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#C86446]/10 rounded-full blur-3xl pointer-events-none -ml-36 -mb-36" />

      {/* Subtle oriental pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#D49B44_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Text & CTA Content */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-center lg:text-left">
            
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D49B44]/20 border border-[#D49B44]/35 text-[#D49B44] text-[11px] sm:text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D49B44] shrink-0" />
              <span>{hero.badgeText}</span>
            </div>

            {/* Main Editorial Serif Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.12] sm:leading-[1.08] tracking-tight text-white">
              {hero.titleLine1}<br />
              <span className="italic text-[#D49B44]">{hero.titleLine2}</span>
            </h1>

            {/* Subtitle / Philosophy */}
            <p className="text-sm sm:text-base lg:text-lg text-[#F4EFE6]/85 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero.subtitle}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2">
              <a
                href="#urunler"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#D49B44] text-[#1B382B] hover:bg-[#e0a84e] font-bold text-sm sm:text-base transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
              >
                <span>{hero.ctaPrimaryText}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#sifa-rehberi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white font-medium text-sm sm:text-base backdrop-blur-sm transition-all duration-200"
              >
                <span>{hero.ctaSecondaryText}</span>
              </a>
            </div>

            {/* Social Proof & Google Review Metric */}
            <div className="pt-5 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <div className="flex text-[#D49B44]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D49B44] text-[#D49B44]" />
                  ))}
                </div>
                <span className="font-bold text-white text-sm">{storeInfo.googleRating}.0 / 5.0</span>
                <span>({storeInfo.reviewCount} Google Yorumu)</span>
              </div>
              <span className="hidden sm:inline text-white/20">•</span>
              <div className="flex items-center gap-1.5 text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#D49B44]" />
                <span>%100 Doğal & İlaçsız Hasat</span>
              </div>
            </div>

          </div>

          {/* Right Featured Visual Display (Configurable Hero Image) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative card frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 p-2 backdrop-blur-md">
                
                <img
                  src={hero.heroImageUrl}
                  alt={`${storeInfo.name} Taze Çerezler ve Şifalı Bitkiler`}
                  className="w-full h-80 sm:h-96 object-cover rounded-2xl brightness-100 contrast-102"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/hero-showcase.jpg';
                  }}
                />

                {/* Floating Top Pill */}
                <div className="absolute top-5 right-5 bg-black/60 backdrop-blur-md text-white text-xs px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                  <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
                  <span className="font-medium">Günlük Taze Kavrum</span>
                </div>

                {/* Floating Bottom Verified Store Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-2xl bg-[#1B382B]/95 backdrop-blur-md border border-[#D49B44]/40 shadow-xl flex items-center justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 text-[#D49B44] text-[11px] font-bold">
                      <Award className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">{storeInfo.city} Merkez Şubemiz</span>
                    </div>
                    <div className="text-white text-xs sm:text-sm font-bold truncate mt-0.5">
                      {storeInfo.address}
                    </div>
                  </div>
                  
                  <a
                    href={storeInfo.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 px-3.5 py-2 bg-[#D49B44] hover:bg-white text-[#1B382B] text-xs font-bold rounded-xl transition-colors shadow-sm whitespace-nowrap"
                  >
                    Yol Tarifi
                  </a>
                </div>

              </div>

              {/* Decorative side badge */}
              <div className="hidden sm:flex absolute -top-4 -left-4 px-3.5 py-2 bg-white text-[#1B382B] rounded-2xl shadow-xl border border-[#eee7d9] items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold">%100 Doğal & Taze</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
