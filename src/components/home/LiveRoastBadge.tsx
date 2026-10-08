import React from 'react';
import { Flame, Sparkles, ChevronRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';

interface LiveRoastBadgeProps {
  className?: string;
  roastItemName?: string;
  batchTimeAgo?: string;
}

export const LiveRoastBadge: React.FC<LiveRoastBadgeProps> = ({
  className = '',
  roastItemName = 'Taze Çifte Kavrulmuş Fındık',
  batchTimeAgo = '14 dk önce',
}) => {
  const { setSelectedCategory } = useCart();

  const handleClick = () => {
    setSelectedCategory('kuruyemis');
    const el = document.getElementById('urunler');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`group relative inline-flex items-center gap-2.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#142A20]/90 to-[#1B382B]/90 hover:from-[#1B382B] hover:to-[#27523E] border border-[#D49B44]/40 hover:border-[#D49B44]/80 text-[#FDFBF7] shadow-lg hover:shadow-[#D49B44]/20 transition-all duration-300 text-left cursor-pointer backdrop-blur-md active:scale-98 ${className}`}
      aria-label="Taze kavrum kuruyemişleri görüntüle"
    >
      {/* Live Pulsing Beacon Radar */}
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D49B44] opacity-75" />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#F3C978]" />
      </span>

      {/* Flame Icon with gentle warm glow */}
      <div className="w-5 h-5 rounded-full bg-[#D49B44]/20 flex items-center justify-center shrink-0 text-[#D49B44] group-hover:scale-110 transition-transform">
        <Flame className="w-3.5 h-3.5 text-[#D49B44] fill-[#D49B44]/20" />
      </div>

      {/* Text Info */}
      <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-medium leading-none">
        <span className="text-[#D49B44] font-bold tracking-wide uppercase text-[10px] sm:text-[11px]">
          Fırından Yeni Çıktı:
        </span>
        <span className="text-white/95 font-semibold group-hover:text-[#F3C978] transition-colors truncate max-w-[180px] sm:max-w-none">
          {roastItemName}
        </span>
        <span className="hidden md:inline text-white/50 text-[11px]">
          (Son Parti: {batchTimeAgo})
        </span>
      </div>

      {/* Arrow Sheen */}
      <ChevronRight className="w-3.5 h-3.5 text-[#D49B44] group-hover:translate-x-0.5 transition-transform shrink-0" />
    </button>
  );
};

export default LiveRoastBadge;
