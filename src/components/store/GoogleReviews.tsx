import React from 'react';
import { Star, CheckCircle, Quote, ExternalLink } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { TiltCard } from '../effects/TiltCard';

export const GoogleReviews: React.FC = () => {
  const { data } = useSiteData();
  const { reviews, storeInfo } = data;

  return (
    <div className="space-y-6">
      {/* Header with Google Rating Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e8e2d5] shadow-luxury">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-full bg-[#1B382B] flex items-center justify-center text-[#D49B44] font-serif text-xl font-bold shadow-md border border-[#D49B44]/30 shrink-0">
            G
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-[#1B382B] text-base">Google Haritalar Puanı</span>
              <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                Doğrulanmış
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex text-[#D49B44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D49B44] text-[#D49B44]" />
                ))}
              </div>
              <span className="font-extrabold text-[#1B382B] text-sm">{storeInfo.googleRating}.0 / 5.0</span>
              <span className="text-gray-400 text-xs">({storeInfo.reviewCount} Yorum)</span>
            </div>
          </div>
        </div>

        <a
          href={storeInfo.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1B382B] hover:text-[#D49B44] transition-colors py-2 px-3 rounded-xl hover:bg-[#F7F4EC]"
        >
          <span>Google Haritalar'da Tüm Yorumları Gör</span>
          <ExternalLink className="w-3.5 h-3.5 text-[#D49B44]" />
        </a>
      </div>

      {/* Reviews Grid wrapped in TiltCard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {reviews.map((rev) => (
          <TiltCard
            key={rev.id}
            maxTilt={4}
            glare={true}
            glareMaxOpacity={0.14}
            scale={1.01}
            className="rounded-2xl h-full"
          >
            <div className="p-5 sm:p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#e8e2d5] hover:border-[#D49B44]/40 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between h-full group">
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="flex text-[#D49B44]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D49B44] text-[#D49B44]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium">{rev.date}</span>
                </div>
                <p className="text-xs text-[#1A1615]/80 italic leading-relaxed relative font-normal">
                  <Quote className="w-3.5 h-3.5 text-[#D49B44]/40 inline mr-1 -mt-1" />
                  {rev.comment}
                </p>
              </div>

              <div className="pt-3.5 mt-3.5 border-t border-[#eee7d9] flex items-center justify-between">
                <span className="text-xs font-bold text-[#1B382B] group-hover:text-[#D49B44] transition-colors">
                  {rev.author}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-emerald-700 font-medium">
                  <CheckCircle className="w-3 h-3 text-emerald-600" />
                  Doğrulanmış Müşteri
                </span>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviews;
