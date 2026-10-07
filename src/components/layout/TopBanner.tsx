import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#1B382B] text-[#FDFBF7] text-[11px] sm:text-xs py-2 px-3 sm:px-6 border-b border-[#2d5240]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        
        {/* Left message with sparkle */}
        <div className="flex items-center gap-2 overflow-hidden truncate">
          <span className="flex items-center gap-1.5 font-semibold text-[#D49B44] shrink-0">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden sm:inline">Bartın Merkez İçi Aynı Gün Kapıya Teslim</span>
            <span className="sm:hidden">Bartın İçi Aynı Gün Teslim</span>
          </span>
          <span className="hidden md:inline text-white/30">•</span>
          <span className="hidden md:inline text-white/80 truncate">
            Tüm Türkiye'ye Hava Almaz Vakumlu Ambalajında Kargo
          </span>
        </div>

        {/* Right contact links (no line breaks) */}
        <div className="flex items-center gap-3 shrink-0 text-white/90">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-1 hover:text-[#D49B44] transition-colors whitespace-nowrap"
          >
            <MapPin className="w-3 h-3 text-[#D49B44]" />
            <span>Bartın Merkez</span>
          </a>
          <span className="hidden lg:inline text-white/20">|</span>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="flex items-center gap-1.5 hover:text-[#D49B44] transition-colors font-bold text-[#FDFBF7] whitespace-nowrap"
          >
            <Phone className="w-3 h-3 text-[#D49B44]" />
            <span>{STORE_INFO.phoneDisplay}</span>
          </a>
        </div>

      </div>
    </div>
  );
};
