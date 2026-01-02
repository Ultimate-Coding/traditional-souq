export interface Shop {
  id: string;
  name: string;
  description: string;
  image: string;
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

export type CategoryId = 'food' | 'spices' | 'textiles' | 'handicrafts';

