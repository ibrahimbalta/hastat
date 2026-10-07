import React, { createContext, useContext, useState, useEffect } from 'react';
import { SiteData, HeroConfig, TrustBadgeConfig } from '../types/cms';
import { StoreInfo, Product, Remedy, GoogleReview } from '../types';
import { DEFAULT_SITE_DATA } from '../data/defaultCms';

interface SiteDataContextType {
  data: SiteData;
  updateStoreInfo: (info: Partial<StoreInfo>) => void;
  updateHero: (hero: Partial<HeroConfig>) => void;
  updateTrustBadge: (badgeId: string, badge: Partial<TrustBadgeConfig>) => void;
  addProduct: (product: Product) => void;
  updateProduct: (productId: string, product: Partial<Product>) => void;
  deleteProduct: (productId: string) => void;
  updateRemedy: (remedyId: string, remedy: Partial<Remedy>) => void;
  addReview: (review: GoogleReview) => void;
  updateReview: (reviewId: string, review: Partial<GoogleReview>) => void;
  deleteReview: (reviewId: string) => void;
  resetToDefaults: () => void;
  exportDataJson: () => string;
  importDataJson: (jsonString: string) => boolean;
}

const SiteDataContext = createContext<SiteDataContextType | undefined>(undefined);

const CMS_STORAGE_KEY = 'hastat_cms_data_v2';

export const SiteDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<SiteData>(() => {
    try {
      const saved = localStorage.getItem(CMS_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to ensure all fields exist
        return {
          storeInfo: { ...DEFAULT_SITE_DATA.storeInfo, ...(parsed.storeInfo || {}) },
          hero: { ...DEFAULT_SITE_DATA.hero, ...(parsed.hero || {}) },
          trustBadges: parsed.trustBadges || DEFAULT_SITE_DATA.trustBadges,
          products: parsed.products || DEFAULT_SITE_DATA.products,
          remedies: parsed.remedies || DEFAULT_SITE_DATA.remedies,
          reviews: parsed.reviews || DEFAULT_SITE_DATA.reviews,
        };
      }
    } catch (e) {
      console.error("Failed to load CMS data from localStorage:", e);
    }
    return DEFAULT_SITE_DATA;
  });

  useEffect(() => {
    try {
      localStorage.setItem(CMS_STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save CMS data:", e);
    }
  }, [data]);

  const updateStoreInfo = (info: Partial<StoreInfo>) => {
    setData(prev => ({
      ...prev,
      storeInfo: { ...prev.storeInfo, ...info }
    }));
  };

  const updateHero = (hero: Partial<HeroConfig>) => {
    setData(prev => ({
      ...prev,
      hero: { ...prev.hero, ...hero }
    }));
  };

  const updateTrustBadge = (badgeId: string, badgeUpdate: Partial<TrustBadgeConfig>) => {
    setData(prev => ({
      ...prev,
      trustBadges: prev.trustBadges.map(b => b.id === badgeId ? { ...b, ...badgeUpdate } : b)
    }));
  };

  const addProduct = (product: Product) => {
    setData(prev => ({
      ...prev,
      products: [product, ...prev.products]
    }));
  };

  const updateProduct = (productId: string, productUpdate: Partial<Product>) => {
    setData(prev => ({
      ...prev,
      products: prev.products.map(p => p.id === productId ? { ...p, ...productUpdate } : p)
    }));
  };

  const deleteProduct = (productId: string) => {
    setData(prev => ({
      ...prev,
      products: prev.products.filter(p => p.id !== productId)
    }));
  };

  const updateRemedy = (remedyId: string, remedyUpdate: Partial<Remedy>) => {
    setData(prev => ({
      ...prev,
      remedies: prev.remedies.map(r => r.id === remedyId ? { ...r, ...remedyUpdate } : r)
    }));
  };

  const addReview = (review: GoogleReview) => {
    setData(prev => ({
      ...prev,
      reviews: [review, ...prev.reviews]
    }));
  };

  const updateReview = (reviewId: string, reviewUpdate: Partial<GoogleReview>) => {
    setData(prev => ({
      ...prev,
      reviews: prev.reviews.map(rev => rev.id === reviewId ? { ...rev, ...reviewUpdate } : rev)
    }));
  };

  const deleteReview = (reviewId: string) => {
    setData(prev => ({
      ...prev,
      reviews: prev.reviews.filter(rev => rev.id !== reviewId)
    }));
  };

  const resetToDefaults = () => {
    setData(DEFAULT_SITE_DATA);
    localStorage.removeItem(CMS_STORAGE_KEY);
  };

  const exportDataJson = () => {
    return JSON.stringify(data, null, 2);
  };

  const importDataJson = (jsonString: string): boolean => {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.storeInfo && parsed.products) {
        setData(parsed);
        return true;
      }
    } catch (e) {
      console.error("Import error:", e);
    }
    return false;
  };

  return (
    <SiteDataContext.Provider
      value={{
        data,
        updateStoreInfo,
        updateHero,
        updateTrustBadge,
        addProduct,
        updateProduct,
        deleteProduct,
        updateRemedy,
        addReview,
        updateReview,
        deleteReview,
        resetToDefaults,
        exportDataJson,
        importDataJson,
      }}
    >
      {children}
    </SiteDataContext.Provider>
  );
};

export const useSiteData = () => {
  const context = useContext(SiteDataContext);
  if (!context) {
    throw new Error('useSiteData must be used within a SiteDataProvider');
  }
  return context;
};
