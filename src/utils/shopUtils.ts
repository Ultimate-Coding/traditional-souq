import { Shop } from '../types';
import { mockData } from '../data/mockData';

/**
 * Get all shops from all categories and subcategories
 */
export const getAllShops = (): Shop[] => {
  const shops: Shop[] = [];
  
  mockData.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      shops.push(...subCategory.shops);
    });
  });
  
  return shops;
};

/**
 * Find a shop by ID
 */
export const findShopById = (shopId: string): Shop | null => {
  for (const category of mockData) {
    for (const subCategory of category.subCategories) {
      const shop = subCategory.shops.find((s) => s.id === shopId);
      if (shop) return shop;
    }
  }
  return null;
};

/**
 * Search shops by name or description
 */
export const searchShops = (query: string): Shop[] => {
  if (!query || query.trim() === '') {
    return [];
  }
  
  const searchTerm = query.toLowerCase().trim();
  const allShops = getAllShops();
  
  return allShops.filter((shop) => {
    const nameMatch = shop.name.toLowerCase().includes(searchTerm);
    const descriptionMatch = shop.description.toLowerCase().includes(searchTerm);
    return nameMatch || descriptionMatch;
  });
};

