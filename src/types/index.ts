export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Shop {
  id: string;
  name: string;
  description: string;
  image: string;
  imageUrl?: string; // Alias for image
  coordinates?: Coordinates;
  price?: string;
  location?: string;
  hours?: string;
  contact?: string;
  rating?: number;
  additionalInfo?: string;
}

export interface SubCategory {
  id: string;
  name: string;
  shops: Shop[];
}

export interface Category {
  id: string;
  name: string;
  subCategories: SubCategory[];
}

export type CategoryId = 'food' | 'spices' | 'textiles' | 'handicrafts' | 'sweets' | 'books' | 'drinks';

