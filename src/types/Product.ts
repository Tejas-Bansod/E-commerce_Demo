export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  sellingPrice?: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  category: string;
  tags: string[];
  sizes?: { size: string; price: number; sellingPrice?: number }[];
  features: string[];
  ingredients?: string[];
  nutritionalInfo?: {
    [key: string]: {
      amount: string;
      dailyValue?: string;
    };
  };
  stock: number;
  sku: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isOrganic?: boolean;
  quantity?: number;
}