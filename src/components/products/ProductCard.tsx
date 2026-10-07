import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Sparkles } from 'lucide-react';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setModalProduct } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>(product.weightOptions[0].weight);

  const activeWeightOption = product.weightOptions.find(w => w.weight === selectedWeight) || product.weightOptions[0];

  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-[#e8e2d5] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1">
      
      {/* Top Image & Badge Container */}
      <div className="relative aspect-square overflow-hidden bg-[#F7F4EC]">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          loading="lazy"
        />

        {/* Floating Top Badge */}
        {product.badge && (
          <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#1B382B]/90 backdrop-blur-md text-[#D49B44] text-[11px] font-bold tracking-wide border border-[#D49B44]/30 shadow-sm flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-[#D49B44]" />
            <span>{product.badge}</span>
          </div>
        )}

        {/* Quick View Button on Hover */}
        <button
          onClick={() => setModalProduct(product)}
          className="absolute inset-0 bg-black/30 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs tracking-wider uppercase"
          aria-label="Detaylı İncele"
        >
          <span className="p-3 bg-[#1B382B] rounded-full text-[#D49B44] shadow-lg flex items-center gap-1.5 px-4">
            <Eye className="w-4 h-4" />
            <span>Hızlı İncele</span>
          </span>
        </button>

        {/* Origin Pill */}
        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-medium">
          {product.origin}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-[#D49B44] uppercase tracking-wider text-[11px]">
              {product.categoryLabel}
            </span>
            <div className="flex items-center gap-1 text-[#D49B44]">
              <Star className="w-3.5 h-3.5 fill-[#D49B44]" />
              <span className="font-bold text-[#1A1615] text-xs">{product.rating}</span>
              <span className="text-gray-400 text-[10px]">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => setModalProduct(product)}
            className="font-serif text-lg sm:text-xl font-bold text-[#1B382B] group-hover:text-[#b67e2b] transition-colors cursor-pointer line-clamp-1"
          >
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#1A1615]/70 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDesc}
          </p>
        </div>

        {/* Weight Selector Pills */}
        <div>
          <label className="text-[11px] font-semibold text-[#1A1615]/60 uppercase tracking-wider block mb-1.5">
            Gramaj Seçimi:
          </label>
          <div className="flex flex-wrap gap-1.5">
            {product.weightOptions.map((opt) => {
              const isSelected = opt.weight === selectedWeight;
              return (
                <button
                  key={opt.weight}
                  onClick={() => setSelectedWeight(opt.weight)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-[#1B382B] text-[#D49B44] shadow-sm'
                      : 'bg-[#F7F4EC] text-[#1A1615]/80 hover:bg-[#eee7d9]'
                  }`}
                >
                  {opt.weight}
                </button>
              );
            })}
          </div>
        </div>

        {/* Price & Add to Cart Footer */}
        <div className="pt-3 border-t border-[#eee7d9] flex items-center justify-between">
          <div>
            <span className="text-[11px] text-gray-500 block leading-none">Toplam Fiyat</span>
            <span className="font-serif text-2xl font-bold text-[#1B382B]">
              ₺{activeWeightOption.price}
            </span>
          </div>

          <button
            onClick={() => addToCart(product, selectedWeight, 1)}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1B382B] text-white hover:bg-[#D49B44] hover:text-[#1B382B] font-semibold text-xs transition-all duration-200 shadow-md active:scale-95"
          >
            <ShoppingBag className="w-4 h-4 text-[#D49B44] group-hover:text-[#1B382B]" />
            <span>Sepete Ekle</span>
          </button>
        </div>

      </div>

    </div>
  );
};
