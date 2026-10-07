export type CategoryType = 
  | 'all'
  | 'kuruyemis'
  | 'bitkicay'
  | 'baharat'
  | 'yag'
  | 'balmacun';

export interface WeightOption {
  weight: string; // e.g., '250g', '500g', '1000g'
  price: number;  // in TL
}

export interface Product {
  id: string;
  name: string;
  category: CategoryType;
  categoryLabel: string;
  shortDesc: string;
  longDesc: string;
  badge?: string; // 'Taze Kavrum', 'Organik', 'Çok Satan', 'Bartın Yöresel'
  basePrice: number;
  weightOptions: WeightOption[];
  rating: number;
  reviewCount: number;
  imageUrl: string;
  benefits: string[];
  usageAdvice: string;
  storageConditions: string;
  origin: string;
  inStock: boolean;
}

export interface CartItem {
  id: string; // unique item key: `${productId}-${weight}`
  productId: string;
  name: string;
  selectedWeight: string;
  unitPrice: number;
  quantity: number;
  imageUrl: string;
}

export interface Remedy {
  id: string;
  title: string;
  slug: string;
  iconName: string;
  tagline: string;
  description: string;
  symptoms: string[];
  recommendedProductIds: string[];
  herbalRecipe: {
    preparation: string;
    routine: string;
    caution?: string;
  };
}

export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified: boolean;
}

export interface StoreInfo {
  name: string;
  title: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  address: string;
  district: string;
  city: string;
  googleRating: number;
  reviewCount: number;
  workingHours: string;
  googleMapsUrl: string;
  instagram: string;
}
