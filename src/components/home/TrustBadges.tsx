import React from 'react';
import { Flame, ShieldCheck, PackageCheck, Truck } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';

export const TrustBadges: React.FC = () => {
  const { data } = useSiteData();
  const { trustBadges } = data;

  const getIcon = (name: string) => {
    switch (name) {
      case 'Flame': return Flame;
      case 'ShieldCheck': return ShieldCheck;
      case 'PackageCheck': return PackageCheck;
      case 'Truck': return Truck;
      default: return ShieldCheck;
    }
  };

  return (
    <section className="relative z-10 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {trustBadges.map((b) => {
          const Icon = getIcon(b.iconName);
          return (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-6 border border-[#e8e2d5] shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl bg-[#1B382B]/10 flex items-center justify-center text-[#1B382B] group-hover:bg-[#1B382B] group-hover:text-[#D49B44] transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#D49B44]">
                    {b.highlight}
                  </span>
                  <h3 className="text-sm font-bold text-[#1A1615] group-hover:text-[#1B382B] transition-colors">
                    {b.title}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-[#1A1615]/70 leading-relaxed">
                {b.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
