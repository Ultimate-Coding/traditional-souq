import { Shop } from '../types';
import { mockData } from '../data/mockData';

/**
 * Get all shops from all categories and subcategories
 * Removes duplicates based on shop ID
 */
export const getAllShops = (): Shop[] => {
  const shops: Shop[] = [];
  const seenIds = new Set<string>();
  
  mockData.forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      subCategory.shops.forEach((shop) => {
        if (!seenIds.has(shop.id)) {
          seenIds.add(shop.id);
          shops.push(shop);
        }
      });
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

