import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { Remedy } from '../../../types';
import { Save, CheckCircle2 } from 'lucide-react';

export const RemediesTab: React.FC = () => {
  const { data, updateRemedy } = useSiteData();
  const [selectedRemedyId, setSelectedRemedyId] = useState<string>(data.remedies[0]?.id || '');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const activeRemedy = data.remedies.find(r => r.id === selectedRemedyId) || data.remedies[0];
  const [formData, setFormData] = useState<Remedy>(activeRemedy);

  // Sync form when active remedy selector changes
  const handleSelectRemedy = (id: string) => {
    setSelectedRemedyId(id);
    const target = data.remedies.find(r => r.id === id);
    if (target) setFormData(target);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateRemedy(formData.id, formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e2d5] shadow-sm">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#eee7d9]">
        <div>
          <h2 className="text-lg font-bold text-[#1B382B]">
            🌿 Şifa & İhtiyaç Rehberi Kürleri
          </h2>
          <p className="text-xs text-[#1A1615]/60 mt-0.5">
            Ziyaretçilere sunulan uzman aktar reçetelerini, şikayet listelerini ve kullanım rutinlerini düzenleyin.
          </p>
        </div>

        {savedSuccess && (
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Kaydedildi!
          </span>
        )}
      </div>

      {/* Remedy Selector Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {data.remedies.map(r => (
          <button
            key={r.id}
            type="button"
            onClick={() => handleSelectRemedy(r.id)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              selectedRemedyId === r.id
                ? 'bg-[#1B382B] text-[#D49B44] shadow-sm'
                : 'bg-[#F7F4EC] text-[#1A1615]/70 hover:bg-[#eee7d9]'
            }`}
          >
            {r.title}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Kür Başlığı:
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Slogan / Vurgu Cümlesi:
            </label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => setFormData({ ...formData, tagline: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
            Kür Açıklaması:
          </label>
          <textarea
            rows={2}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
          />
        </div>

        {/* Symptoms */}
        <div>
          <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
            Hedeflenen Belirtiler & Şikayetler (Her satıra bir belirti):
          </label>
          <textarea
            rows={3}
            value={formData.symptoms.join('\n')}
            onChange={(e) => setFormData({
              ...formData,
              symptoms: e.target.value.split('\n').filter(Boolean)
            })}
            className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
          />
        </div>

        {/* Recipe details */}
        <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#eee7d9] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44] block">
            Uzman Aktar Reçetesi
          </span>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Kullanım & Hazırlama Tavsiyesi:
            </label>
            <textarea
              rows={2}
              value={formData.herbalRecipe.preparation}
              onChange={(e) => setFormData({
                ...formData,
                herbalRecipe: { ...formData.herbalRecipe, preparation: e.target.value }
              })}
              className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Kullanım Düzeni (Süre):
              </label>
              <input
                type="text"
                value={formData.herbalRecipe.routine}
                onChange={(e) => setFormData({
                  ...formData,
                  herbalRecipe: { ...formData.herbalRecipe, routine: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Uyarı / Not (Opsiyonel):
              </label>
              <input
                type="text"
                value={formData.herbalRecipe.caution || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  herbalRecipe: { ...formData.herbalRecipe, caution: e.target.value }
                })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
              />
            </div>
          </div>
        </div>

        {/* Submit */}
        <div className="pt-4 border-t border-[#eee7d9] flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1B382B] text-white hover:bg-[#142a20] font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Save className="w-4 h-4 text-[#D49B44]" />
            <span>Kür Bilgilerini Kaydet</span>
          </button>
        </div>

      </form>
    </div>
  );
};
