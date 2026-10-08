import React from 'react';
import { Flame, ShieldCheck, PackageCheck, Truck } from 'lucide-react';
import { useSiteData } from '../../context/SiteDataContext';
import { TiltCard } from '../effects/TiltCard';

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
    <section className="relative z-20 -mt-10 sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {trustBadges.map((b) => {
          const Icon = getIcon(b.iconName);
          return (
            <TiltCard
              key={b.id}
              maxTilt={5}
              glare={true}
              glareMaxOpacity={0.16}
              scale={1.02}
              className="rounded-2xl h-full"
            >
              <div className="h-full bg-white/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-[#e8e2d5] hover:border-[#D49B44]/40 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-3.5">
                    <div className="w-12 h-12 rounded-xl bg-[#1B382B]/10 flex items-center justify-center text-[#1B382B] group-hover:bg-[#1B382B] group-hover:text-[#D49B44] group-hover:shadow-md transition-all duration-300 shrink-0">
                      <Icon className="w-6 h-6 transition-transform group-hover:scale-110" />
                    </div>
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#D49B44]">
                        {b.highlight}
                      </span>
                      <h3 className="text-sm font-bold text-[#1A1615] group-hover:text-[#1B382B] transition-colors leading-snug">
                        {b.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-xs text-[#1A1615]/75 leading-relaxed font-normal">
                    {b.desc}
                  </p>
                </div>

                {/* Subtle bottom gold hairline on hover */}
                <div className="mt-4 pt-2 border-t border-transparent group-hover:border-[#D49B44]/20 transition-colors flex items-center justify-end">
                  <span className="text-[10px] text-[#1B382B]/40 group-hover:text-[#D49B44] transition-colors font-semibold">
                    HAS-TAT Güvencesi
                  </span>
                </div>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </section>
  );
};

export default TrustBadges;
