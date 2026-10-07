import React, { useState } from 'react';
import { useAdminAuth } from '../../hooks/useAdminAuth';
import { AdminLogin } from './AdminLogin';
import { AdminLayout } from './AdminLayout';
import { AdminTab } from '../../types/cms';
import { OverviewTab } from './tabs/OverviewTab';
import { StoreInfoTab } from './tabs/StoreInfoTab';
import { HeroBannerTab } from './tabs/HeroBannerTab';
import { TrustBadgesTab } from './tabs/TrustBadgesTab';
import { ProductManagerTab } from './tabs/ProductManagerTab';
import { RemediesTab } from './tabs/RemediesTab';
import { ReviewsTab } from './tabs/ReviewsTab';
import { SettingsTab } from './tabs/SettingsTab';

export const AdminPanel: React.FC = () => {
  const { isAuthenticated, login, logout, changePassword, navigateToSite } = useAdminAuth();
  const [activeTab, setActiveTab] = useState<AdminTab>('overview');

  if (!isAuthenticated) {
    return (
      <AdminLogin
        onLogin={login}
        onBackToSite={navigateToSite}
      />
    );
  }

  return (
    <AdminLayout
      activeTab={activeTab}
      onTabChange={setActiveTab}
      onLogout={logout}
      onGoToSite={navigateToSite}
    >
      {activeTab === 'overview' && (
        <OverviewTab
          onNavigateTab={setActiveTab}
          onGoToSite={navigateToSite}
        />
      )}
      {activeTab === 'store' && <StoreInfoTab />}
      {activeTab === 'hero' && <HeroBannerTab />}
      {activeTab === 'badges' && <TrustBadgesTab />}
      {activeTab === 'products' && <ProductManagerTab />}
      {activeTab === 'remedies' && <RemediesTab />}
      {activeTab === 'reviews' && <ReviewsTab />}
      {activeTab === 'settings' && <SettingsTab onChangePassword={changePassword} />}
    </AdminLayout>
  );
};
