import React, { useState } from 'react';
import { Product, CategoryType, WeightOption } from '../../types';
import { X, Plus, Trash2, Save, Image as ImageIcon } from 'lucide-react';

interface ProductEditModalProps {
  product: Product | null; // null if adding new
  isOpen: boolean;
  onClose: () => void;
  onSave: (product: Product) => void;
}

export const ProductEditModal: React.FC<ProductEditModalProps> = ({
  product,
  isOpen,
  onClose,
  onSave
}) => {
  const isEditing = Boolean(product);

  const [formData, setFormData] = useState<Product>(() => {
    if (product) return { ...product };
    return {
      id: `prod-${Date.now()}`,
      name: '',
      category: 'kuruyemis',
      categoryLabel: 'Taze Kuruyemiş',
      shortDesc: '',
      longDesc: '',
      badge: 'Taze Ürün',
      basePrice: 150,
      weightOptions: [
        { weight: '250g', price: 150 },
        { weight: '500g', price: 290 },
      ],
      rating: 5.0,
      reviewCount: 1,
      imageUrl: 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=800&q=80',
      benefits: ['%100 Doğal ve taze içerik', 'Bağışıklığı destekler'],
      usageAdvice: 'Günlük taze olarak tüketilmesi tavsiye edilir.',
      storageConditions: 'Serin ve kuru yerde saklayınız.',
      origin: 'Bartın / Türkiye',
      inStock: true
    };
  });

  const [benefitsText, setBenefitsText] = useState(
    product ? product.benefits.join('\n') : '%100 Doğal ve taze içerik\nBağışıklığı destekler'
  );

  if (!isOpen) return null;

  const handleCategoryChange = (cat: CategoryType) => {
    const labels: { [key in CategoryType]: string } = {
      all: 'Tüm Ürünler',
      kuruyemis: 'Taze Kuruyemiş',
      bitkicay: 'Şifalı Bitkiler',
      baharat: 'Organik Baharatlar',
      yag: 'Soğuk Sıkım Yağlar',
      balmacun: 'Doğal Bal & Macun',
    };
    setFormData(prev => ({
      ...prev,
      category: cat,
      categoryLabel: labels[cat] || 'Ürün'
    }));
  };

  const handleWeightChange = (index: number, field: keyof WeightOption, value: string | number) => {
    setFormData(prev => {
      const updated = [...prev.weightOptions];
      updated[index] = {
        ...updated[index],
        [field]: field === 'price' ? Number(value) : value
      };
      return {
        ...prev,
        weightOptions: updated,
        basePrice: updated[0] ? updated[0].price : prev.basePrice
      };
    });
  };

  const handleAddWeight = () => {
    setFormData(prev => ({
      ...prev,
      weightOptions: [...prev.weightOptions, { weight: '1000g', price: prev.basePrice * 2 }]
    }));
  };

  const handleRemoveWeight = (index: number) => {
    if (formData.weightOptions.length <= 1) return;
    setFormData(prev => ({
      ...prev,
      weightOptions: prev.weightOptions.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const benefitsArray = benefitsText
      .split('\n')
      .map(s => s.trim())
      .filter(Boolean);

    const productToSave: Product = {
      ...formData,
      basePrice: formData.weightOptions[0] ? formData.weightOptions[0].price : formData.basePrice,
      benefits: benefitsArray.length > 0 ? benefitsArray : ['Doğal ve taze lezzet'],
    };

    onSave(productToSave);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#e8e2d5] max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#FDFBF7] border-b border-[#eee7d9] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#1B382B]">
              {isEditing ? `Ürünü Düzenle: ${formData.name}` : '✨ Yeni Ürün Ekle'}
            </h3>
            <p className="text-xs text-[#1A1615]/60 mt-0.5">
              Ürün ayrıntılarını, fiyatlarını ve gramaj seçeneklerini belirleyin.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 overflow-y-auto space-y-4 flex-1">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Ürün Adı: *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Örn: Duble Antep Fıstığı"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Kategori: *
              </label>
              <select
                value={formData.category}
                onChange={(e) => handleCategoryChange(e.target.value as CategoryType)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-white"
              >
                <option value="kuruyemis">🌰 Taze Kuruyemiş</option>
                <option value="bitkicay">🌿 Şifalı Çay & Bitki</option>
                <option value="baharat">🌶️ Organik Baharat</option>
                <option value="yag">🫒 Soğuk Sıkım Yağ</option>
                <option value="balmacun">🍯 Doğal Bal & Macun</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Rozet / Etiket:
              </label>
              <input
                type="text"
                value={formData.badge || ''}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="Örn: Günlük Taze Kavrum"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Menşei:
              </label>
              <input
                type="text"
                value={formData.origin}
                onChange={(e) => setFormData({ ...formData, origin: e.target.value })}
                placeholder="Örn: Gaziantep / Türkiye"
                className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Kısa Açıklama (Kartta görünen):
            </label>
            <input
              type="text"
              value={formData.shortDesc}
              onChange={(e) => setFormData({ ...formData, shortDesc: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Detaylı Açıklama:
            </label>
            <textarea
              rows={2}
              value={formData.longDesc}
              onChange={(e) => setFormData({ ...formData, longDesc: e.target.value })}
              className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Weight Options Builder */}
          <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#eee7d9] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D49B44]">
                Gramaj & Fiyat Seçenekleri
              </span>
              <button
                type="button"
                onClick={handleAddWeight}
                className="flex items-center gap-1 text-xs text-[#1B382B] font-bold hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Seçenek Ekle</span>
              </button>
            </div>

            <div className="space-y-2">
              {formData.weightOptions.map((opt, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={opt.weight}
                    onChange={(e) => handleWeightChange(idx, 'weight', e.target.value)}
                    placeholder="250g / 500ml"
                    className="w-1/2 px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs bg-white"
                  />
                  <div className="relative w-1/2">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs">₺</span>
                    <input
                      type="number"
                      value={opt.price}
                      onChange={(e) => handleWeightChange(idx, 'price', e.target.value)}
                      placeholder="Fiyat"
                      className="w-full pl-7 pr-3 py-2 rounded-xl border border-[#e8e2d5] text-xs bg-white"
                    />
                  </div>
                  {formData.weightOptions.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveWeight(idx)}
                      className="p-2 text-gray-400 hover:text-red-500"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Image URL & Preview */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-[#1A1615]/80 block">
              Görsel URL Bağlantısı:
            </label>
            <div className="flex gap-3 items-center">
              <input
                type="url"
                value={formData.imageUrl}
                onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
              <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#e8e2d5] shrink-0 bg-gray-50">
                <img
                  src={formData.imageUrl}
                  alt="Önizleme"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1607672632458-9eb56696346b?auto=format&fit=crop&w=300&q=80';
                  }}
                />
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
              Öne Çıkan Faydalar (Her satıra bir fayda yazın):
            </label>
            <textarea
              rows={3}
              value={benefitsText}
              onChange={(e) => setBenefitsText(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
            />
          </div>

          {/* Usage & Storage */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Kullanım Tavsiyesi:
              </label>
              <input
                type="text"
                value={formData.usageAdvice}
                onChange={(e) => setFormData({ ...formData, usageAdvice: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">
                Saklama Koşulları:
              </label>
              <input
                type="text"
                value={formData.storageConditions}
                onChange={(e) => setFormData({ ...formData, storageConditions: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B]"
              />
            </div>
          </div>

          {/* In Stock toggle */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="inStockCheck"
              checked={formData.inStock}
              onChange={(e) => setFormData({ ...formData, inStock: e.target.checked })}
              className="w-4 h-4 text-[#1B382B] rounded-sm"
            />
            <label htmlFor="inStockCheck" className="text-xs font-bold text-[#1B382B]">
              Ürün Stokta Var (Sitede Satışa Açık)
            </label>
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-[#eee7d9] flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#e8e2d5] text-xs font-semibold text-gray-700 hover:bg-gray-100"
            >
              İptal
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#1B382B] text-white hover:bg-[#142a20] text-xs font-bold shadow-md"
            >
              <Save className="w-4 h-4 text-[#D49B44]" />
              <span>{isEditing ? 'Değişiklikleri Kaydet' : 'Ürünü Ekle'}</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
