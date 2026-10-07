import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export const TopBanner: React.FC = () => {
  const { data } = useSiteData();
  const { storeInfo, hero } = data;

  return (
    <div className="bg-[#1B382B] text-[#FDFBF7] text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-[#2d5240]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Left message with sparkle */}
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex items-center gap-1.5 font-semibold text-[#D49B44] shrink-0">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">{hero.topBannerTextDesktop}</span>
            <span className="sm:hidden">{hero.topBannerTextMobile}</span>
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline text-white/80 truncate">
            {storeInfo.city} İçi Kapıya Hızlı Teslimat
          </span>
        </div>

        {/* Right contact links */}
        <div className="flex items-center gap-3 shrink-0 text-white/90">
          <a
            href={storeInfo.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 hover:text-[#D49B44] transition-colors whitespace-nowrap"
          >
            <MapPin className="w-3 h-3 text-[#D49B44]" />
            <span>{storeInfo.city} {storeInfo.district}</span>
          </a>
          <span className="hidden lg:inline text-white/20">|</span>
          <a
            href={`tel:${storeInfo.phone}`}
            className="flex items-center gap-1.5 hover:text-[#D49B44] transition-colors font-bold text-[#FDFBF7] whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-[#D49B44]" />
            <span>{storeInfo.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
