import React from 'react';
import { Package, HeartPulse, Star, Phone, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { useSiteData } from '../../../context/SiteDataContext';
import { AdminTab } from '../../../types/cms';

interface OverviewTabProps {
  onNavigateTab: (tab: AdminTab) => void;
  onGoToSite: () => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigateTab, onGoToSite }) => {
  const { data } = useSiteData();

  const stats = [
    { label: 'Kayıtlı Ürün', value: data.products.length, icon: Package, color: 'text-emerald-700 bg-emerald-50' },
    { label: 'Şifa Kürü & Reçete', value: data.remedies.length, icon: HeartPulse, color: 'text-amber-700 bg-amber-50' },
    { label: 'Google Puanı', value: `${data.storeInfo.googleRating} ★`, icon: Star, color: 'text-yellow-700 bg-yellow-50' },
    { label: 'Müşteri Yorumu', value: data.reviews.length, icon: Sparkles, color: 'text-indigo-700 bg-indigo-50' },
  ];

  return (
    <div className="space-y-6">
      
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#1B382B] to-[#254d3b] text-white p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden">
        <div className="relative z-10 max-w-xl">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
            Canlı İçerik Yönetimi (CMS)
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold mt-1 text-white">
            Hoş Geldiniz, HAS-TAT Yöneticisi
          </h2>
          <p className="text-xs sm:text-sm text-white/80 mt-2 leading-relaxed">
            Bu panel üzerinden ana sayfa başlıklarını, telefon ve WhatsApp numaranızı, 
            ürün fiyatlarını, gramajları ve şifa rehberini anında güncelleyebilirsiniz.
          </p>
          <div className="flex gap-3 mt-4">
            <button
              onClick={() => onNavigateTab('products')}
              className="px-4 py-2 bg-[#D49B44] text-[#1B382B] text-xs font-bold rounded-xl hover:bg-white transition-colors"
            >
              Ürünleri Yönet →
            </button>
            <button
              onClick={onGoToSite}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl border border-white/20 transition-colors flex items-center gap-1.5"
            >
              <span>Siteyi İncele</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div key={idx} className="bg-white p-5 rounded-2xl border border-[#e8e2d5] shadow-xs flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.color}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs text-[#1A1615]/60 font-medium block">
                  {s.label}
                </span>
                <span className="text-xl sm:text-2xl font-black text-[#1B382B]">
                  {s.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Info Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Store snapshot */}
        <div className="bg-white p-6 rounded-2xl border border-[#e8e2d5] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#eee7d9]">
            <h3 className="text-sm font-bold text-[#1B382B]">
              🏢 Mağaza İletişim Özeti
            </h3>
            <button
              onClick={() => onNavigateTab('store')}
              className="text-xs text-[#D49B44] font-bold hover:underline"
            >
              Düzenle
            </button>
          </div>

          <div className="space-y-2 text-xs text-[#1A1615]/80">
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#D49B44]" />
              <span>Telefon: <strong>{data.storeInfo.phoneDisplay}</strong></span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp: <strong>+{data.storeInfo.whatsapp}</strong></span>
            </p>
            <p className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-[#D49B44] shrink-0 mt-0.5" />
              <span>{data.storeInfo.address}, {data.storeInfo.city}</span>
            </p>
            <p className="text-[11px] text-gray-500 pt-1">
              Saatler: {data.storeInfo.workingHours}
            </p>
          </div>
        </div>

        {/* Hero preview */}
        <div className="bg-white p-6 rounded-2xl border border-[#e8e2d5] shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#eee7d9]">
            <h3 className="text-sm font-bold text-[#1B382B]">
              📢 Aktif Hero Manşeti
            </h3>
            <button
              onClick={() => onNavigateTab('hero')}
              className="text-xs text-[#D49B44] font-bold hover:underline"
            >
              Düzenle
            </button>
          </div>

          <div className="space-y-2 text-xs text-[#1A1615]/80">
            <p className="font-serif text-lg font-bold text-[#1B382B] leading-tight">
              {data.hero.titleLine1} {data.hero.titleLine2}
            </p>
            <p className="text-xs text-[#1A1615]/70 line-clamp-2">
              {data.hero.subtitle}
            </p>
            <div className="flex items-center gap-3 pt-2 text-[11px] text-gray-500">
              <span>Görsel: {data.hero.heroImageUrl}</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
