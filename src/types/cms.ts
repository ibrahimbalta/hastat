import { StoreInfo, Product, Remedy, GoogleReview } from './index';

export interface HeroConfig {
  topBannerTextMobile: string;
  topBannerTextDesktop: string;
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  subtitle: string;
  ctaPrimaryText: string;
  ctaSecondaryText: string;
  heroImageUrl: string;
  ratingBadgeText: string;
}

export interface TrustBadgeConfig {
  id: string;
  highlight: string;
  title: string;
  desc: string;
  iconName: 'Flame' | 'ShieldCheck' | 'PackageCheck' | 'Truck';
}

export interface SiteData {
  storeInfo: StoreInfo;
  hero: HeroConfig;
  trustBadges: TrustBadgeConfig[];
  products: Product[];
  remedies: Remedy[];
  reviews: GoogleReview[];
}

export type AdminTab = 
  | 'overview'
  | 'store'
  | 'hero'
  | 'badges'
  | 'products'
  | 'remedies'
  | 'reviews'
  | 'settings';
