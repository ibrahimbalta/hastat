import React from 'react';
import { Phone, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../../data/storeInfo';

export const TopBanner: React.FC = () => {
  return (
    <div className="bg-[#1B382B] text-[#FDFBF7] text-xs py-2 px-4 border-b border-[#2d5240] tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-2 text-center sm:text-left">
          <span className="flex items-center gap-1.5 font-medium text-[#D49B44]">
            <Sparkles className="w-3.5 h-3.5" />
            Bartın Merkez İçi Aynı Gün Kapıya Teslim
          </span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="hidden md:inline text-white/90">
            Tüm Türkiye'ye Taze Kavrum Hava Almaz Ambalajında Kargo
          </span>
        </div>

        <div className="flex items-center gap-4 text-white/80">
          <a
            href={STORE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#D49B44] transition-colors flex items-center gap-1"
          >
            <MapPin className="w-3 h-3 text-[#D49B44]" />
            <span className="hidden lg:inline">{STORE_INFO.address},</span> {STORE_INFO.city}
          </a>
          <span className="text-white/30">|</span>
          <a
            href={`tel:${STORE_INFO.phone}`}
            className="hover:text-[#D49B44] transition-colors flex items-center gap-1 font-semibold text-white"
          >
            <Phone className="w-3 h-3 text-[#D49B44]" />
            {STORE_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
