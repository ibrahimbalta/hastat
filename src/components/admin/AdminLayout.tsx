import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminTab } from '../../types/cms';
import { Menu, ExternalLink, CheckCircle2 } from 'lucide-react';

interface AdminLayoutProps {
  activeTab: AdminTab;
  onTabChange: (tab: AdminTab) => void;
  onLogout: () => void;
  onGoToSite: () => void;
  children: React.ReactNode;
}

export const AdminLayout: React.FC<AdminLayoutProps> = ({
  activeTab,
  onTabChange,
  onLogout,
  onGoToSite,
  children
}) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const tabTitles: { [key in AdminTab]: string } = {
    overview: 'Yönetim Paneli Genel Bakış',
    store: 'Mağaza & İletişim Bilgileri',
    hero: 'Hero & Duyuru Bandı Yönetimi',
    badges: 'Güven Rozetleri Yönetimi',
    products: 'Ürün Kataloğu & Fiyat Yönetimi',
    remedies: 'Şifa & İhtiyaç Rehberi Yönetimi',
    reviews: 'Google Müşteri Yorumları',
    settings: 'Yedekleme & Panel Ayarları',
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#1A1615] flex">
      {/* Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        onTabChange={onTabChange}
        onLogout={onLogout}
        onGoToSite={onGoToSite}
        isOpenMobile={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      {/* Main Content Area */}
      <div className="flex-1 lg:pl-64 flex flex-col min-w-0">
        
        {/* Top Header */}
        <header className="sticky top-0 z-30 bg-white border-b border-[#e8e2d5] h-16 px-4 sm:px-8 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="text-base sm:text-lg font-bold text-[#1B382B]">
              {tabTitles[activeTab]}
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Canlı Senkronize
            </span>

            <button
              onClick={onGoToSite}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1B382B] text-white hover:bg-[#142a20] text-xs font-bold transition-all"
            >
              <span>Siteyi Gör</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#D49B44]" />
            </button>
          </div>
        </header>

        {/* Tab Body */}
        <main className="p-4 sm:p-8 flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
};
