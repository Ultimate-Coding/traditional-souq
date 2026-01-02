import { Category } from '../types';

export const mockData: Category[] = [
  {
    id: 'food',
    name: 'Food',
    subCategories: [
      {
        id: 'seafoods',
        name: 'Seafoods',
        shops: [
          {
            id: 'shop-1',
            name: 'Al-Bahr Fresh Fish',
            description: 'Fresh catch daily from local fishermen. Specializing in red snapper, grouper, and shrimp.',
            image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-2',
            name: 'Coastal Delights',
            description: 'Premium seafood market offering the finest selection of fish and shellfish.',
            image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-3',
            name: 'The Fisherman\'s Catch',
            description: 'Traditional fishmonger with over 30 years of experience in the souq.',
            image: 'https://images.unsplash.com/photo-1574781330858-7c07c98574c5?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-4',
            name: 'Ocean Bounty',
            description: 'Wide variety of fresh and frozen seafood, from local to imported delicacies.',
            image: 'https://images.unsplash.com/photo-1606914469633-bd39206ea739?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'fruits-vegetables',
        name: 'Fruits & Vegetables',
        shops: [
          {
            id: 'shop-5',
            name: 'Garden Fresh Produce',
            description: 'Locally sourced fruits and vegetables, organic options available.',
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-6',
            name: 'Sunrise Market',
            description: 'Fresh seasonal produce delivered daily from nearby farms.',
            image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-7',
            name: 'The Green Stall',
            description: 'Family-owned stall specializing in exotic fruits and rare vegetables.',
            image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-8',
            name: 'Harvest Time',
            description: 'Premium quality fruits and vegetables with competitive prices.',
            image: 'https://images.unsplash.com/photo-1605190557072-2f0e0b0dc5b1?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-9',
            name: 'Nature\'s Best',
            description: 'Organic and conventional produce, bulk discounts available.',
            image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'sweets',
        name: 'Sweets',
        shops: [
          {
            id: 'shop-10',
            name: 'Honey & Dates Paradise',
            description: 'Traditional Middle Eastern sweets, baklava, and premium dates.',
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-11',
            name: 'Sweet Dreams Bakery',
            description: 'Handmade pastries, traditional halva, and custom celebration cakes.',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-12',
            name: 'The Confectionery',
            description: 'Artisanal sweets and candies, including Turkish delight and nougat.',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
          }
        ]
      }
    ]
  },
  {
    id: 'spices',
    name: 'Spices',
    subCategories: [
      {
        id: 'ground-spices',
        name: 'Ground Spices',
        shops: [
          {
            id: 'shop-13',
            name: 'Spice Master',
            description: 'Finest ground spices from around the world. Custom blends available.',
            image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-14',
            name: 'Aromatic Blends',
            description: 'Premium quality ground spices, freshly milled on-site.',
            image: 'https://images.unsplash.com/photo-1615485925503-6e4f72925be0?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-15',
            name: 'The Spice House',
            description: 'Traditional spice merchant with over 50 varieties of ground spices.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'whole-spices',
        name: 'Whole Spices',
        shops: [
          {
            id: 'shop-16',
            name: 'Whole Spice Emporium',
            description: 'Premium whole spices: cardamom, cinnamon, cloves, and more.',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-17',
            name: 'Ancient Spice Traders',
            description: 'Authentic whole spices sourced directly from origin countries.',
            image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'spice-mixtures',
        name: 'Spice Mixtures',
        shops: [
          {
            id: 'shop-18',
            name: 'Blend Masters',
            description: 'Custom spice blends for every cuisine. Traditional and modern recipes.',
            image: 'https://images.unsplash.com/photo-1615485925503-6e4f72925be0?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-19',
            name: 'Secret Recipe Spices',
            description: 'Family recipes passed down through generations. Unique spice combinations.',
            image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-20',
            name: 'The Blendery',
            description: 'Pre-mixed spice blends for convenience: curry, garam masala, za\'atar.',
            image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&h=300&fit=crop'
          }
        ]
      }
    ]
  },
  {
    id: 'textiles',
    name: 'Textiles',
    subCategories: [
      {
        id: 'traditional-clothes',
        name: 'Traditional Clothes',
        shops: [
          {
            id: 'shop-21',
            name: 'Heritage Garments',
            description: 'Authentic traditional clothing: thobes, abayas, and cultural attire.',
            image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-22',
            name: 'Traditional Threads',
            description: 'Handcrafted traditional garments with modern touches. Custom sizing available.',
            image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-23',
            name: 'Cultural Couture',
            description: 'Premium traditional wear for special occasions and daily use.',
            image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-24',
            name: 'The Traditional Wardrobe',
            description: 'Wide selection of traditional clothing for men, women, and children.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'fabrics',
        name: 'Fabrics',
        shops: [
          {
            id: 'shop-25',
            name: 'Fabric Paradise',
            description: 'Extensive collection of fabrics: silk, cotton, linen, and synthetic blends.',
            image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-26',
            name: 'Textile Treasures',
            description: 'Premium fabrics by the meter. Imported and local materials available.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-27',
            name: 'The Fabric Store',
            description: 'Quality fabrics for all your sewing needs. Bulk discounts available.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-28',
            name: 'Silk & Cotton Co.',
            description: 'Specializing in luxury fabrics: pure silk, Egyptian cotton, and cashmere.',
            image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-29',
            name: 'Pattern & Print',
            description: 'Beautiful patterned fabrics, traditional designs, and modern prints.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
          }
        ]
      }
    ]
  },
  {
    id: 'handicrafts',
    name: 'Handicrafts',
    subCategories: [
      {
        id: 'pottery',
        name: 'Pottery',
        shops: [
          {
            id: 'shop-30',
            name: 'Clay & Fire Studio',
            description: 'Handmade pottery: traditional and contemporary designs. Custom orders welcome.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-31',
            name: 'Artisan Pottery',
            description: 'Beautiful handcrafted ceramics for home and garden. Unique pieces available.',
            image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e6d63a?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-32',
            name: 'Traditional Ceramics',
            description: 'Authentic traditional pottery preserving ancient crafting techniques.',
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'basketry',
        name: 'Basketry',
        shops: [
          {
            id: 'shop-33',
            name: 'Woven Wonders',
            description: 'Handwoven baskets in various sizes and styles. Traditional and modern designs.',
            image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-34',
            name: 'The Basket Maker',
            description: 'Artisan baskets made from natural materials. Custom sizes available.',
            image: 'https://images.unsplash.com/photo-1603105037883-25d55ec5d8b9?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'metalwork',
        name: 'Metalwork',
        shops: [
          {
            id: 'shop-35',
            name: 'Brass & Copper Crafts',
            description: 'Handcrafted metalwork: lamps, trays, and decorative items.',
            image: 'https://images.unsplash.com/photo-1603105037883-25d55ec5d8b9?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-36',
            name: 'The Forge',
            description: 'Traditional metalworking: custom pieces and traditional designs.',
            image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-37',
            name: 'Artisan Metalworks',
            description: 'Beautiful handcrafted metal items: jewelry, home decor, and gifts.',
            image: 'https://images.unsplash.com/photo-1603105037883-25d55ec5d8b9?w=400&h=300&fit=crop'
          }
        ]
      },
      {
        id: 'woodwork',
        name: 'Woodwork',
        shops: [
          {
            id: 'shop-38',
            name: 'Carpenter\'s Workshop',
            description: 'Handcrafted wooden items: furniture, decorative pieces, and kitchenware.',
            image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop'
          },
          {
            id: 'shop-39',
            name: 'Wooden Treasures',
            description: 'Traditional and modern woodwork. Custom furniture and decorative items.',
            image: 'https://images.unsplash.com/photo-1603105037883-25d55ec5d8b9?w=400&h=300&fit=crop'
          }
        ]
      }
    ]
  }
];

