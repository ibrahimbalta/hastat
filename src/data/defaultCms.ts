import { SiteData, HeroConfig, TrustBadgeConfig } from '../types/cms';
import { STORE_INFO, GOOGLE_REVIEWS } from './storeInfo';
import { PRODUCTS } from './products';
import { REMEDIES } from './remedies';

export const DEFAULT_HERO: HeroConfig = {
  topBannerTextMobile: "Bartın İçi Aynı Gün Teslim",
  topBannerTextDesktop: "Tüm Türkiye'ye Hava Almaz Vakumlu Ambalajında Kargo",
  badgeText: "Bartın'ın Güvenilir Doğal Şifa & Gurme Lezzet Durağı",
  titleLine1: "Doğanın Saf Şifası,",
  titleLine2: "En Taze Kavrum Lezzetler.",
  subtitle: "HAS-TAT; Bartın'da günlük fırınlanan sıcak kuruyemişleri, asırlık şifalı bitki kürlerini, katkısız taş değirmen baharatları ve ilk soğuk pres saf yağları güvenle sofranıza getirir.",
  ctaPrimaryText: "Taze Ürünleri İncele",
  ctaSecondaryText: "🌿 Şifa Rehberi",
  heroImageUrl: "./hero-showcase.jpg",
  ratingBadgeText: "5.0 / 5.0 (10 Google Yorumu)",
};

export const DEFAULT_TRUST_BADGES: TrustBadgeConfig[] = [
  {
    id: "badge-1",
    iconName: "Flame",
    highlight: "Tazelik Garantisi",
    title: "Günlük Sıcak Kavrum",
    desc: "Kuruyemişlerimiz dükkanımızda günlük fırınlanır, asla bayat ya da bekletilmiş ürün gönderilmez.",
  },
  {
    id: "badge-2",
    iconName: "ShieldCheck",
    highlight: "Doğal & Organik",
    title: "%100 Katkısız & Saf Şifa",
    desc: "Taş değirmende çekilen katkısız baharatlar, ilaçsız bitkiler ve ilk soğuk pres saf bitkisel yağlar.",
  },
  {
    id: "badge-3",
    iconName: "PackageCheck",
    highlight: "Özel Koruma",
    title: "Hava Almaz Kilitli Ambalaj",
    desc: "Aromayı ve çıtırlığı ilk günkü tazeliğinde koruyan özel gıda kilitli vakumlu doypack paketleme.",
  },
  {
    id: "badge-4",
    iconName: "Truck",
    highlight: "Hızlı Teslimat",
    title: "Bartın İçi Hızlı & Türkiye Kargo",
    desc: "Bartın merkezde elden kapıya hızlı teslimat, tüm Türkiye'ye aynı gün özenli ve güvenli kargo.",
  }
];

export const DEFAULT_SITE_DATA: SiteData = {
  storeInfo: STORE_INFO,
  hero: DEFAULT_HERO,
  trustBadges: DEFAULT_TRUST_BADGES,
  products: PRODUCTS,
  remedies: REMEDIES,
  reviews: GOOGLE_REVIEWS,
};
