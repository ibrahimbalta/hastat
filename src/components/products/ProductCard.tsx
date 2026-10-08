import React, { useState } from 'react';
import { ShoppingBag, Star, Eye, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Product } from '../../types';
import { useCart } from '../../context/CartContext';
import { TiltCard } from '../effects/TiltCard';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, setModalProduct } = useCart();
  const [selectedWeight, setSelectedWeight] = useState<string>(product.weightOptions[0].weight);

  const activeWeightOption = product.weightOptions.find(w => w.weight === selectedWeight) || product.weightOptions[0];

  const handleAddToCart = () => {
    addToCart(product, selectedWeight, 1);
    try {
      confetti({
        particleCount: 26,
        spread: 45,
        origin: { y: 0.82 },
        colors: ['#D49B44', '#1B382B', '#F3C978'],
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  return (
    <TiltCard
      maxTilt={5}
      glare={true}
      glareMaxOpacity={0.16}
      scale={1.015}
      className="rounded-3xl h-full"
    >
      <div className="bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden border border-[#e8e2d5] hover:border-[#D49B44]/50 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 flex flex-col justify-between group h-full">
        
        {/* Top Image & Badge Container */}
        <div className="relative aspect-square overflow-hidden bg-[#F7F4EC]">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
          />

          {/* Floating Top Badge */}
          {product.badge && (
            <div className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-[#1B382B]/90 backdrop-blur-md text-[#D49B44] text-[11px] font-bold tracking-wide border border-[#D49B44]/35 shadow-md flex items-center gap-1.5 z-10">
              <Sparkles className="w-3 h-3 text-[#D49B44]" />
              <span>{product.badge}</span>
            </div>
          )}

          {/* Quick View Button on Hover */}
          <button
            onClick={() => setModalProduct(product)}
            className="absolute inset-0 bg-black/35 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-medium text-xs tracking-wider uppercase z-20 cursor-pointer"
            aria-label="Detaylı İncele"
          >
            <span className="p-3 bg-[#1B382B] rounded-full text-[#D49B44] shadow-xl flex items-center gap-1.5 px-4.5 border border-[#D49B44]/30 hover:scale-105 transition-transform">
              <Eye className="w-4 h-4" />
              <span>Hızlı İncele</span>
            </span>
          </button>

          {/* Origin Pill */}
          <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/65 backdrop-blur-md text-white text-[10px] font-medium flex items-center gap-1 shadow-sm z-10">
            <MapPin className="w-2.5 h-2.5 text-[#D49B44]" />
            <span>{product.origin}</span>
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
              className="font-serif text-lg sm:text-xl font-bold text-[#1B382B] group-hover:text-[#D49B44] transition-colors cursor-pointer line-clamp-1"
            >
              {product.name}
            </h3>

            {/* Short Description */}
            <p className="text-xs text-[#1A1615]/75 line-clamp-2 mt-1 leading-relaxed">
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
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#1B382B] text-[#D49B44] ring-1 ring-[#D49B44]/50 shadow-sm'
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
              onClick={handleAddToCart}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1B382B] text-white hover:bg-[#D49B44] hover:text-[#1B382B] font-semibold text-xs transition-all duration-200 shadow-md active:scale-95 cursor-pointer shimmer-effect"
            >
              <ShoppingBag className="w-4 h-4 text-[#D49B44]" />
              <span>Sepete Ekle</span>
            </button>
          </div>

        </div>

      </div>
    </TiltCard>
  );
};

export default ProductCard;
