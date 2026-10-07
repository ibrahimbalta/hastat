import React from 'react';
import { 
  LayoutDashboard, 
  Store, 
  Sparkles, 
  Award, 
  Package, 
  HeartPulse, 
  Star, 
  Settings, 
  LogOut, 
  ExternalLink,
  X
} from 'lucide-react';
import { AdminTab } from '../../types/cms';
import { useSiteData } from '../../context/SiteDataContext';

interface AdminSidebarProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
  onGoToSite: () => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({
  activeTab,
  onTabChange,
  onLogout,
  onGoToSite,
  isOpenMobile,
  onCloseMobile
}) => {
  const { data } = useSiteData();

  const navItems: { tab: AdminTab; label: string; icon: React.ElementType; badge?: number | string }[] = [
    { tab: 'overview', label: 'Genel Bakış', icon: LayoutDashboard },
    { tab: 'store', label: 'Mağaza Bilgileri', icon: Store },
    { tab: 'hero', label: 'Hero & Duyuru', icon: Sparkles },
    { tab: 'badges', label: 'Güven Rozetleri', icon: Award },
    { tab: 'products', label: 'Ürün Yönetimi', icon: Package, badge: data.products.length },
    { tab: 'remedies', label: 'Şifa Rehberi', icon: HeartPulse, badge: data.remedies.length },
    { tab: 'reviews', label: 'Google Yorumları', icon: Star, badge: data.reviews.length },
    { tab: 'settings', label: 'Yedek & Ayarlar', icon: Settings },
  ];

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-xs"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed top-0 bottom-0 left-0 z-50 w-64 bg-[#142a20] text-[#FDFBF7] flex flex-col justify-between border-r border-white/10 transition-transform duration-300
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Top Brand Logo */}
        <div>
          <div className="p-5 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1B382B] border border-[#D49B44]/40 flex items-center justify-center text-[#D49B44] font-serif text-xl font-bold">
                H
              </div>
              <div>
                <span className="font-serif text-lg font-bold text-white tracking-wide block leading-none">
                  HAS-TAT
                </span>
                <span className="text-[10px] text-[#D49B44] font-semibold tracking-widest uppercase">
                  Yönetim Konsolu
                </span>
              </div>
            </div>

            <button
              onClick={onCloseMobile}
              className="lg:hidden p-1.5 rounded-lg text-white/60 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="p-3 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.tab;
              return (
                <button
                  key={item.tab}
                  onClick={() => {
                    onTabChange(item.tab);
                    onCloseMobile();
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-[#D49B44] text-[#1B382B] shadow-sm font-bold'
                      : 'text-white/75 hover:bg-white/8 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-4 h-4 shrink-0" />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive ? 'bg-[#1B382B] text-white' : 'bg-white/10 text-white/90'
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Actions */}
        <div className="p-4 border-t border-white/10 space-y-2">
          <button
            onClick={onGoToSite}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-[#D49B44]" />
            <span>Canlı Siteyi Gör ↗</span>
          </button>

          <button
            onClick={onLogout}
            className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl hover:bg-red-500/20 text-red-300 text-xs font-semibold transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Çıkış Yap</span>
          </button>
        </div>
      </aside>
    </>
  );
};
