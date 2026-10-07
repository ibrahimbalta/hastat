import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { StoreInfo } from '../../../types';
import { Save, CheckCircle2 } from 'lucide-react';

export const StoreInfoTab: React.FC = () => {
  const { data, updateStoreInfo } = useSiteData();
  const [formData, setFormData] = useState<StoreInfo>(data.storeInfo);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'googleRating' || name === 'reviewCount' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateStoreInfo(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e8e2d5] shadow-sm">
      <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#eee7d9]">
        <div>
          <h2 className="text-lg font-bold text-[#1B382B]">
            🏢 Mağaza & İletişim Bilgileri
          </h2>
          <p className="text-xs text-[#1A1615]/70 mt-0.5">
            Bu bilgiler sitedeki üst bantta, mağaza bölümünde ve footer'da anında güncellenir.
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Brand Name */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Kısa Marka Adı:
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Full Title */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Tam İşletme Unvanı:
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Phone Display */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Görünen Telefon Numarası:
            </label>
            <input
              type="text"
              name="phoneDisplay"
              value={formData.phoneDisplay}
              onChange={handleChange}
              placeholder="0507 200 00 28"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Phone Call URL */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Arama Numarası (tel: formatı):
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+905072000028"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              WhatsApp Numarası (Ülke kodu ile, başında + olmadan):
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="905072000028"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Working Hours */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Çalışma Saatleri:
            </label>
            <input
              type="text"
              name="workingHours"
              value={formData.workingHours}
              onChange={handleChange}
              placeholder="Her gün: 08:30 - 21:30"
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Google Rating */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Google Puanı (Örn: 5.0):
            </label>
            <input
              type="number"
              step="0.1"
              min="1"
              max="5"
              name="googleRating"
              value={formData.googleRating}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Review Count */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Google Yorum Sayısı:
            </label>
            <input
              type="number"
              name="reviewCount"
              value={formData.reviewCount}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

        </div>

        {/* Address */}
        <div>
          <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
            Açık Adres (Cadde / Sokak / Tarif):
          </label>
          <textarea
            rows={2}
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              İlçe:
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Şehir:
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>
        </div>

        {/* Google Maps URL */}
        <div>
          <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
            Google Haritalar Yol Tarifi Bağlantısı:
          </label>
          <input
            type="url"
            name="googleMapsUrl"
            value={formData.googleMapsUrl}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
          />
        </div>

        {/* Save Button */}
        <div className="pt-4 border-t border-[#eee7d9] flex justify-end">
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#1B382B] text-white hover:bg-[#142a20] font-bold text-xs shadow-md transition-all active:scale-95"
          >
            <Save className="w-4 h-4 text-[#D49B44]" />
            <span>Değişiklikleri Kaydet</span>
          </button>
        </div>

      </form>
    </div>
  );
};
