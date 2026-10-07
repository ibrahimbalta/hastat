import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { GoogleReview } from '../../../types';
import { Plus, Trash2, Star, CheckCircle2 } from 'lucide-react';

export const ReviewsTab: React.FC = () => {
  const { data, addReview, deleteReview } = useSiteData();
  const [isAdding, setIsAdding] = useState(false);
  const [newReview, setNewReview] = useState<Omit<GoogleReview, 'id'>>({
    author: '',
    rating: 5,
    date: 'Yeni',
    comment: '',
    verified: true
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) return;

    addReview({
      id: `rev-${Date.now()}`,
      ...newReview
    });
    setNewReview({
      author: '',
      rating: 5,
      date: 'Yeni',
      comment: '',
      verified: true
    });
    setIsAdding(false);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-3xl border border-[#e8e2d5] shadow-xs flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-[#1B382B]">
            ⭐ Google Müşteri Yorumları Yönetimi
          </h2>
          <p className="text-xs text-[#1A1615]/60 mt-0.5">
            Sitede sergilenen doğrulanmış Google değerlendirmelerini ekleyin veya silin.
          </p>
        </div>

        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1B382B] text-white hover:bg-[#142a20] text-xs font-bold transition-all"
        >
          <Plus className="w-4 h-4 text-[#D49B44]" />
          <span>Yeni Yorum Ekle</span>
        </button>
      </div>

      {/* Add Review Form */}
      {isAdding && (
        <form onSubmit={handleAdd} className="bg-white p-6 rounded-3xl border border-[#D49B44]/40 shadow-md space-y-4">
          <h3 className="text-sm font-bold text-[#1B382B]">
            Yeni Müşteri Yorumu
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">Müşteri Adı:</label>
              <input
                type="text"
                required
                value={newReview.author}
                onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                placeholder="Örn: Canan Yıldız"
                className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">Puan:</label>
              <select
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
                className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs bg-white"
              >
                <option value={5}>5 Yıldız ★★★★★</option>
                <option value={4}>4 Yıldız ★★★★☆</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">Tarih Bilgisi:</label>
              <input
                type="text"
                value={newReview.date}
                onChange={(e) => setNewReview({ ...newReview, date: e.target.value })}
                placeholder="Örn: 3 gün önce"
                className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-[#1A1615]/80 block mb-1">Yorum Metni:</label>
            <textarea
              rows={2}
              required
              value={newReview.comment}
              onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              placeholder="Müşterinin yorumunu yazınız..."
              className="w-full px-3 py-2 rounded-xl border border-[#e8e2d5] text-xs"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className="px-4 py-2 rounded-xl border border-[#e8e2d5] text-xs font-semibold text-gray-600 hover:bg-gray-100"
            >
              İptal
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-[#1B382B] text-[#D49B44] text-xs font-bold hover:bg-[#142a20]"
            >
              Kaydet
            </button>
          </div>
        </form>
      )}

      {/* Reviews List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.reviews.map(rev => (
          <div key={rev.id} className="bg-white p-5 rounded-2xl border border-[#e8e2d5] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-xs text-[#1B382B]">{rev.author}</span>
                <div className="flex text-[#D49B44]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#D49B44]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#1A1615]/80 italic">"{rev.comment}"</p>
            </div>

            <div className="pt-3 mt-3 border-t border-[#eee7d9] flex items-center justify-between text-[11px] text-gray-400">
              <span>{rev.date}</span>
              <button
                onClick={() => deleteReview(rev.id)}
                className="text-red-500 hover:text-red-700 flex items-center gap-1 font-semibold"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Sil</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
