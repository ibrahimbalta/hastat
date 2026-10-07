import React from 'react';
import { useCart } from '../../context/CartContext';
import { CheckCircle2 } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-5 z-50 max-w-sm bg-[#1B382B] text-white px-5 py-3.5 rounded-2xl shadow-2xl border border-[#D49B44]/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-3 duration-300">
      <CheckCircle2 className="w-5 h-5 text-[#D49B44] shrink-0" />
      <span className="text-xs sm:text-sm font-medium text-[#FDFBF7]">
        {toastMessage}
      </span>
    </div>
  );
};
