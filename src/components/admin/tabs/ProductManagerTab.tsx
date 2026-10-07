import React, { useState } from 'react';
import { useSiteData } from '../../../context/SiteDataContext';
import { Product, CategoryType } from '../../../types';
import { ProductEditModal } from '../ProductEditModal';
import { Plus, Search, Edit3, Trash2, CheckCircle2, XCircle, Star } from 'lucide-react';

export const ProductManagerTab: React.FC = () => {
  const { data, addProduct, updateProduct, deleteProduct } = useSiteData();
  const [search, setSearch] = useState('');
  const [selectedCat, setSelectedCat] = useState<CategoryType>('all');
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteConfirmId, setDeleteConfirmId] = useState<string | null>(null);

  const filteredProducts = data.products.filter(p => {
    const matchesCat = selectedCat === 'all' || p.category === selectedCat;
    const matchesSearch = search === '' || 
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleOpenAddModal = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleSaveProduct = (product: Product) => {
    if (editingProduct) {
      updateProduct(product.id, product);
    } else {
      addProduct(product);
    }
  };

  const handleDelete = (id: string) => {
    deleteProduct(id);
    setDeleteConfirmId(null);
  };

  return (
    <div className="space-y-6">
      
      {/* Top Action Bar */}
      <div className="bg-white p-5 sm:p-6 rounded-3xl border border-[#e8e2d5] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-[#1B382B]">
            📦 Ürün Kataloğu Yönetimi
          </h2>
          <p className="text-xs text-[#1A1615]/60 mt-0.5">
            Sitede listelenen toplam {data.products.length} ürün bulunuyor.
          </p>
        </div>

        <button
          onClick={handleOpenAddModal}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-[#1B382B] text-white hover:bg-[#142a20] font-bold text-xs shadow-md transition-all active:scale-95"
        >
          <Plus className="w-4 h-4 text-[#D49B44]" />
          <span>Yeni Ürün Ekle</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[#e8e2d5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Search */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Ürün adı ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-[#e8e2d5] text-xs outline-none focus:border-[#1B382B] bg-[#FDFBF7]"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
          {[
            { key: 'all', label: 'Tümü' },
            { key: 'kuruyemis', label: 'Kuruyemiş' },
            { key: 'bitkicay', label: 'Şifalı Çay' },
            { key: 'baharat', label: 'Baharat' },
            { key: 'yag', label: 'Yağlar' },
            { key: 'balmacun', label: 'Bal & Macun' },
          ].map(c => (
            <button
              key={c.key}
              onClick={() => setSelectedCat(c.key as CategoryType)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedCat === c.key
                  ? 'bg-[#1B382B] text-[#D49B44]'
                  : 'bg-[#F7F4EC] text-[#1A1615]/70 hover:bg-[#eee7d9]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {/* Products Table / Cards */}
      <div className="bg-white rounded-3xl border border-[#e8e2d5] shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#eee7d9] bg-[#FDFBF7] text-[11px] font-bold text-[#1A1615]/60 uppercase tracking-wider">
                <th className="py-3.5 px-4">Görsel & Ürün Adı</th>
                <th className="py-3.5 px-4">Kategori</th>
                <th className="py-3.5 px-4">Başlangıç Fiyatı</th>
                <th className="py-3.5 px-4">Gramaj Seçenekleri</th>
                <th className="py-3.5 px-4">Stok</th>
                <th className="py-3.5 px-4 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eee7d9] text-xs">
              {filteredProducts.map(p => (
                <tr key={p.id} className="hover:bg-[#FDFBF7]/60 transition-colors">
                  
                  {/* Name and Image */}
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.imageUrl}
                        alt={p.name}
                        className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#e8e2d5]"
                      />
                      <div className="min-w-0">
                        <span className="font-bold text-[#1B382B] block truncate max-w-[200px]">
                          {p.name}
                        </span>
                        <span className="text-[11px] text-gray-400 block truncate max-w-[200px]">
                          {p.origin}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-1 rounded-lg bg-[#F7F4EC] text-[#D49B44] font-semibold text-[11px]">
                      {p.categoryLabel}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="py-3.5 px-4 font-bold text-[#1B382B]">
                    ₺{p.basePrice}
                  </td>

                  {/* Weight Options */}
                  <td className="py-3.5 px-4">
                    <div className="flex flex-wrap gap-1">
                      {p.weightOptions.map((opt, i) => (
                        <span key={i} className="px-2 py-0.5 rounded-md bg-gray-100 text-[10px] text-gray-700">
                          {opt.weight} (₺{opt.price})
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Stock */}
                  <td className="py-3.5 px-4">
                    {p.inStock ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Stokta
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-red-600">
                        <XCircle className="w-3.5 h-3.5" />
                        Tükendi
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleOpenEditModal(p)}
                        className="p-2 rounded-xl border border-[#e8e2d5] text-[#1B382B] hover:bg-[#F7F4EC] transition-colors"
                        title="Düzenle"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      {deleteConfirmId === p.id ? (
                        <div className="flex items-center gap-1 bg-red-50 p-1 rounded-xl border border-red-200">
                          <button
                            onClick={() => handleDelete(p.id)}
                            className="px-2 py-1 bg-red-600 text-white rounded-lg text-[10px] font-bold"
                          >
                            Evet, Sil
                          </button>
                          <button
                            onClick={() => setDeleteConfirmId(null)}
                            className="px-2 py-1 bg-gray-200 text-gray-700 rounded-lg text-[10px]"
                          >
                            Vazgeç
                          </button>
                        </div>
                      ) : (
                        <button
                          onClick={() => setDeleteConfirmId(p.id)}
                          className="p-2 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 transition-colors"
                          title="Sil"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Product Edit / Create Modal */}
      <ProductEditModal
        product={editingProduct}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProduct}
      />

    </div>
  );
};
