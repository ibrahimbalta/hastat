import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { GOOGLE_REVIEWS, STORE_INFO } from '../../data/storeInfo';

export const GoogleReviews: React.FC = () => {
  return (
    <div className="space-y-6">
      {/* Header with Google Rating Badge */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#e8e2d5] shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-[#1B382B] flex items-center justify-center text-[#D49B44] font-serif text-xl font-bold shadow-md">
            G
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-[#1B382B] text-base">Google İşletme Puanı</span>
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                Doğrulanmış
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <div className="flex text-[#D49B44]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D49B44] text-[#D49B44]" />
                ))}
              </div>
              <span className="font-extrabold text-[#1B382B] text-sm">{STORE_INFO.googleRating}.0 / 5.0</span>
              <span className="text-gray-400 text-xs">({STORE_INFO.reviewCount} Yorum)</span>
            </div>
          </div>
        </div>

        <a
          href={STORE_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-[#1B382B] hover:text-[#D49B44] underline decoration-[#D49B44]"
        >
          Google Haritalar'da Tüm Yorumları Gör →
        </a>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {GOOGLE_REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-5 rounded-2xl bg-white border border-[#e8e2d5] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex text-[#D49B44]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D49B44] text-[#D49B44]" />
                  ))}
                </div>
                <span className="text-[11px] text-gray-400">{rev.date}</span>
              </div>
              <p className="text-xs text-[#1A1615]/80 italic leading-relaxed relative">
                <Quote className="w-3.5 h-3.5 text-[#D49B44]/40 inline mr-1 -mt-1" />
                {rev.comment}
              </p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#eee7d9] flex items-center justify-between">
              <span className="text-xs font-bold text-[#1B382B]">{rev.author}</span>
              <span className="flex items-center gap-1 text-[10px] text-emerald-700">
                <CheckCircle className="w-3 h-3" />
                Doğrulanmış Müşteri
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
