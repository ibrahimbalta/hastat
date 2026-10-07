import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { HeroConfig } from '../../../types/cms';
import { Save, CheckCircle2, Image as ImageIcon } from 'lucide-react';

export const HeroBannerTab: React.FC = () => {
  const { data, updateHero } = useSiteData();
  const [formData, setFormData] = useState<HeroConfig>(data.hero);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateHero(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e2d5] shadow-sm">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#eee7d9]">
        <div>
          <h2 className="text-lg font-bold text-[#1B382B]">
            📢 Hero & Duyuru Bandı Yönetimi
          </h2>
          <p className="text-xs text-[#1A1615]/70 mt-0.5">
            Sitenin en tepesindeki duyuru bandını, ana manşet metinlerini ve sağdaki vitrin görselini düzenleyin.
          </p>
        </div>

        {savedSuccess && (
          <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            Kaydedildi!
          </span>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        
        {/* Top Banner Announcements */}
        <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#eee7d9] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44] block">
            Üst Bant Duyurusu
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Mobilde Görünen Duyuru Metni:
              </label>
              <input
                type="text"
                name="topBannerTextMobile"
                value={formData.topBannerTextMobile}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Masaüstünde Görünen Duyuru Metni:
              </label>
              <input
                type="text"
                name="topBannerTextDesktop"
                value={formData.topBannerTextDesktop}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
              />
            </div>
          </div>
        </div>

        {/* Hero Headings */}
        <div className="space-y-4">
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Hero Üst Rozet Etiketi:
            </label>
            <input
              type="text"
              name="badgeText"
              value={formData.badgeText}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Ana Başlık Satır 1:
              </label>
              <input
                type="text"
                name="titleLine1"
                value={formData.titleLine1}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Ana Başlık Satır 2:
              </label>
              <input
                type="text"
                name="titleLine2"
                value={formData.titleLine2}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Hero Alt Açıklama Paragrafı:
            </label>
            <textarea
              rows={3}
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Birincil Buton Metni:
              </label>
              <input
                type="text"
                name="ctaPrimaryText"
                value={formData.ctaPrimaryText}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                İkincil Buton Metni:
              </label>
              <input
                type="text"
                name="ctaSecondaryText"
                value={formData.ctaSecondaryText}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#eee7d9] space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44] block">
            Vitrin Fotoğrafı (Hero Sağ Görsel)
          </span>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Görsel URL veya Yolu:
            </label>
            <input
              type="text"
              name="heroImageUrl"
              value={formData.heroImageUrl}
              onChange={handleChange}
              placeholder="/hero-showcase.jpg veya https://..."
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
            />
          </div>

          {/* Image Preview */}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-28 h-20 rounded-xl overflow-hidden border border-[#eee7d9] bg-white shadow-xs shrink-0">
              <img
                src={formData.heroImageUrl}
                alt="Hero Önizleme"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/hero-showcase.jpg';
                }}
              />
            </div>
            <div className="text-xs text-[#1A1615]/70">
              <div className="flex items-center gap-1 font-semibold text-[#1B382B]">
                <ImageIcon className="w-4 h-4 text-[#D49B44]" />
                <span>Görsel Canlı Önizleme</span>
              </div>
              <p className="text-[11px] text-gray-500 mt-0.5">
                Standart görsel: <code>/hero-showcase.jpg</code>
              </p>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-[#eee7d9] flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1B382B] text-white hover:bg-[#142a20] font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Save className="w-4 h-4 text-[#D49B44]" />
            <span>Hero Bilgilerini Kaydet</span>
          </button>
        </div>

      </form>
    </div>
  );
};
