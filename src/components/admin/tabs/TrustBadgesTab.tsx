import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { TrustBadgeConfig } from '../../../types/cms';
import { Save, CheckCircle2 } from 'lucide-react';

export const TrustBadgesTab: React.FC = () => {
  const { data, updateTrustBadge } = useSiteData();
  const [badges, setBadges] = useState<TrustBadgeConfig[]>(data.trustBadges);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleBadgeChange = (id: string, field: keyof TrustBadgeConfig, value: string) => {
    setBadges(prev => prev.map(b => b.id === id ? { ...b, [field]: value } : b));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    badges.forEach(b => updateTrustBadge(b.id, b));
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e2d5] shadow-sm">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#eee7d9]">
        <div>
          <h2 className="text-lg font-bold text-[#1B382B]">
            ✨ Güven Rozetleri (4 Değer Sütunu)
          </h2>
          <p className="text-xs text-[#1A1615]/70 mt-0.5">
            Hero bölümünün altındaki 4 temel hizmet değerinin başlık ve açıklamalarını düzenleyin.
          </p>
        </div>

        {savedSuccess && (
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Kaydedildi!
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {badges.map((badge, idx) => (
            <div key={badge.id} className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#eee7d9] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1B382B]">
                  Rozet #{idx + 1}
                </span>
                <span className="text-[10px] text-gray-500 font-mono">
                  {badge.iconName}
                </span>
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1A1615]/70 block mb-1">
                  Vurgu Etiketi:
                </label>
                <input
                  type="text"
                  value={badge.highlight}
                  onChange={(e) => handleBadgeChange(badge.id, 'highlight', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1A1615]/70 block mb-1">
                  Başlık:
                </label>
                <input
                  type="text"
                  value={badge.title}
                  onChange={(e) => handleBadgeChange(badge.id, 'title', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                />
              </div>

              <div>
                <label className="text-[11px] font-bold text-[#1A1615]/70 block mb-1">
                  Açıklama:
                </label>
                <textarea
                  rows={2}
                  value={badge.desc}
                  onChange={(e) => handleBadgeChange(badge.id, 'desc', e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-[#eee7d9] flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1B382B] text-white hover:bg-[#142a20] font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Save className="w-4 h-4 text-[#D49B44]" />
            <span>Rozetleri Kaydet</span>
          </button>
        </div>
      </form>
    </div>
  );
};
