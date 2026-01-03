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
            id: "shop-1",
            name: "Seafood Delights",
            description:
              "Fresh catch daily from local fishermen. Specializing in red snapper, grouper, and shrimp.",
            image:'/images/fish10.jpg',
            imageUrl: '/images/fish10.jpg',
            coordinates: { latitude: 25.2830, longitude: 51.5305 },
            price: '21 - 45 JOD'
          },
          {
            id: 'shop-3',
            name: 'The Fisherman\'s Catch',
            description: 'Traditional fishmonger with over 30 years of experience in the souq.',
            image: '/images/fish.webp',
            imageUrl: '/images/fish.webp',
            coordinates: { latitude: 25.2854, longitude: 51.5310 },
            price: '7 - 28 JOD'
          },
          {
            id: 'shop-4',
            name: 'Oyster House',
            description: 'Wide variety of fresh and frozen seafood, from local to imported delicacies.',
            image: '/images/oyster.jpeg',
            imageUrl: '/images/oyster.jpeg',
            coordinates: { latitude: 25.2860, longitude: 51.5315 },
            price: '11 - 49 JOD'
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
            image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2848, longitude: 51.5305 },
            price: '2 - 11 JOD'
          },
          {
            id: 'shop-6',
            name: 'Sunrise Market',
            description: 'Fresh seasonal produce delivered daily from nearby farms.',
            image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2850, longitude: 51.5320 },
            price: '1.4 - 8.5 JOD'
          },
          {
            id: 'shop-7',
            name: 'The Green Stall',
            description: 'Family-owned stall specializing in exotic fruits and rare vegetables.',
            image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2858, longitude: 51.5308 },
            price: '2.8 - 14 JOD'
          },
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
            image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2845, longitude: 51.5318 },
            price: '3.5 - 21 JOD'
          },
          {
            id: 'shop-11',
            name: 'Sweet Dreams Bakery',
            description: 'Handmade pastries, traditional halva, and custom celebration cakes.',
            image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2862, longitude: 51.5302 },
            price: '4.2 - 28 JOD'
          },
          {
            id: 'shop-12',
            name: 'The Confectionery',
            description: 'Artisanal sweets and candies, including Turkish delight and nougat.',
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2852, longitude: 51.5325 },
            price: '2.8 - 17 JOD'
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
        id: 'sweet-spices',
        name: 'Sweet Spices',
        shops: [
          {
            id: 'shop-13',
            name: 'Cinnamon & Vanilla House',
            description: 'Premium sweet spices: cinnamon, vanilla, nutmeg, and allspice. Perfect for desserts.',
            image: 'images/nutmeg.webp',
            imageUrl: 'images/nutmeg.webp',
            coordinates: { latitude: 25.2842, longitude: 51.5312 },
            price: '5 - 25 JOD'
          },
          {
            id: 'shop-14',
            name: 'Sweet Aromatics',
            description: 'Finest sweet spices: cardamom, star anise, and clove. Freshly ground available.',
            image: 'images/sweet.jpg',
            imageUrl: 'images/sweet.jpg',
            coordinates: { latitude: 25.2865, longitude: 51.5318 },
            price: '4 - 20 JOD'
          },
          {
            id: 'shop-15',
            name: 'Paprika House',
            description: 'Traditional sweet spices for baking and desserts. Bulk and retail available.',
            image: '/images/paprika.jpg',
            imageUrl: '/images/paprika.jpg',
            coordinates: { latitude: 25.2840, longitude: 51.5300 },
            price: '3 - 18 JOD'
          }
        ]
      },
      {
        id: 'hot-spices',
        name: 'Hot Spices',
        shops: [
          {
            id: 'shop-17',
            name: 'Chili Heaven',
            description: 'Hot spices: chili peppers, cayenne, black pepper, and hot paprika.',
            image: '/images/pepper.jpeg',
            imageUrl: '/images/pepper.jpeg',
            coordinates: { latitude: 25.2868, longitude: 51.5305 },
            price: '4 - 22 JOD'
          },
          {
            id: 'shop-18',
            name: 'The Pepper Corner',
            description: 'Premium hot spices: habanero, ghost pepper, and specialty hot blends.',
            image: '/images/black.jpg',
            imageUrl: '/images/black.jpg',
            coordinates: { latitude: 25.2838, longitude: 51.5322 },
            price: '6 - 30 JOD'
          },
          {
            id: 'shop-19',
            name: 'Spicy Kabsa House',
            description: 'A traditional spice shop specializing in hot Kabsa blends.',
            image: '/images/kabsa.jpg',
            imageUrl: '/images/kabsa.jpg',
            coordinates: { latitude: 25.2856, longitude: 51.5313 },
            price: '5 - 25 JOD'
          },
        ]
      },
      {
        id: 'salty-sour-spices',
        name: 'Salty & Sour Spices',
        shops: [
          {
            id: 'shop-21',
            name: 'Lemon & Salt Bazaar',
            description: 'The perfect combination of tangy and savory spices for your kitchen.',
            image: '/images/lemon.jpg',
            imageUrl: '/images/lemon.jpg',
            coordinates: { latitude: 25.2835, longitude: 51.5315 },
            price: '3 - 15 JOD'
          },
          {
            id: 'shop-22',
            name: 'Golden Soy',
            description: 'Traditional and modern soy products for authentic flavors.',
            image: '/images/soya.jpg',
            imageUrl: '/images/soya.jpg',
            coordinates: { latitude: 25.2870, longitude: 51.5310 },
            price: '4 - 20 JOD'
          },
          {
            id: 'shop-23',
            name: 'The Sumac Corner',
            description: 'Traditional sumac, carefully selected for aroma and quality.',
            image: '/images/sumac.webp',
            imageUrl: '/images/sumac.webp',
            coordinates: { latitude: 25.2845, longitude: 51.5302 },
            price: '5 - 25 JOD'
          },
          
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
            id: 'shop-25',
            name: 'Heritage Garments',
            description: 'Authentic traditional clothing: thobes, abayas, and cultural attire.',
            image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2832, longitude: 51.5328 },
            price: '25 - 120 JOD'
          },
          {
            id: 'shop-27',
            name: 'Cultural Couture',
            description: 'Premium traditional wear for special occasions and daily use.',
            image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2872, longitude: 51.5308 },
            price: '40 - 200 JOD'
          },
          {
            id: 'shop-28',
            name: 'The Traditional Wardrobe',
            description: 'Wide selection of traditional clothing for men, women, and children.',
            image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2830, longitude: 51.5305 },
            price: '20 - 100 JOD'
          }
        ]
      },
      {
        id: 'fabrics',
        name: 'Fabrics',
        shops: [
          {
            id: 'shop-29',
            name: 'Fabric Paradise',
            description: 'Extensive collection of fabrics: silk, cotton, linen, and synthetic blends.',
            image: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2860, longitude: 51.5325 },
            price: '8 - 50 JOD per meter'
          },
          {
            id: 'shop-30',
            name: 'Textile Treasures',
            description: 'Premium fabrics by the meter. Imported and local materials available.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2848, longitude: 51.5318 },
            price: '10 - 70 JOD per meter'
          },
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
            id: 'shop-34',
            name: 'The Clay Corner',
            description: 'Handcrafted pottery and ceramics made with traditional techniques.',
            image: '/images/pottery.jpg',
            imageUrl: '/images/pottery.jpg',
            coordinates: { latitude: 25.2855, longitude: 51.5303 },
            price: '15 - 80 JOD'
          },
          {
            id: 'shop-35',
            name: 'Artisan Pots',
            description: 'Beautifully crafted pots, vases, and decorative items for your home.',
            image: '/images/pottery2.jpg',
            imageUrl: '/images/pottery2.jpg',
            coordinates: { latitude: 25.2835, longitude: 51.5318 },
            price: '20 - 100 JOD'
          },
          {
            id: 'shop-36',
            name: 'Traditional Ceramics',
            description: 'Authentic traditional pottery preserving ancient crafting techniques.',
            image: '/images/pottery3.jpg',
            imageUrl: '/images/pottery3.jpg',
            coordinates: { latitude: 25.2865, longitude: 51.5315 },
            price: '25 - 150 JOD'
          }
        ]
      },
      {
        id: 'woolenwork',
        name: 'Woolenwork',
        shops: [
          {
            id: 'shop-39',
            name: 'Wool & Warmth',
            description: 'Cozy and premium wool products for all seasons.',
            image: 'images/wool1.jpg',
            imageUrl: 'images/wool1.jpg',
            coordinates: { latitude: 25.2840, longitude: 51.5320 },
            price: '30 - 150 JOD'
          },
          {
            id: 'Woolen Wonders',
            name: 'The Wool Basket',
            description: 'Beautiful wool creations made with care and tradition.',
            image: 'images/wool2.jpg',
            imageUrl: 'images/wool2.jpg',
            coordinates: { latitude: 25.2870, longitude: 51.5300 },
            price: '25 - 120 JOD'
          },
          {
            id: 'shop-41',
            name: 'Artisan Metalworks',
            description: 'Beautiful handcrafted metal items: jewelry, home decor, and gifts.',
            image: 'images/wool3.jpg',
            imageUrl: 'images/wool3.jpg',
            coordinates: { latitude: 25.2838, longitude: 51.5308 },
            price: '15 - 80 JOD'
          }
        ]
      },
      {
        id: 'woodwork',
        name: 'Woodwork',
        shops: [
          {
            id: 'shop-42',
            name: 'Wooden Wonders',
            description: 'Handcrafted wooden items, from decor to functional pieces, made with skill and tradition.',
            image: 'images/wood.jpg',
            imageUrl: 'images/wood.jpg',
            coordinates: { latitude: 25.2850, longitude: 51.5322 },
            price: '20 - 100 JOD'
          },
          {
            id: 'shop-43',
            name: 'Timber Treasures',
            description: 'Unique wooden crafts created by local artisans for every home.',
            image: 'images/wood2.jpg',
            imageUrl: 'images/wood2.jpg',
            coordinates: { latitude: 25.2862, longitude: 51.5303 },
            price: '18 - 90 JOD'
          }
        ]
      }
    ]
  },
  {
    id: 'books',
    name: 'Books',
    subCategories: [
      {
        id: 'novels',
        name: 'Novels',
        shops: [
          {
            id: 'shop-54',
            name: 'The Story Corner',
            description: 'A cozy shop offering a wide range of novels from classics to modern fiction.',
            image: '/images/novel.jpg',
            imageUrl: '/images/novel.jpg',
            coordinates: { latitude: 25.2843, longitude: 51.5310 },
            price: '5 - 25 JOD'
          },
          {
            id: 'shop-55',
            name: 'Fiction Haven',
            description: 'Dive into a world of imagination with our curated selection of novels.',
            image: '/images/novel2.jpg',
            imageUrl: '/images/novel2.jpg',
            coordinates: { latitude: 25.2868, longitude: 51.5312 },
            price: '6 - 30 JOD'
          },
          {
            id: 'shop-558',
            name: 'Tales & Tomes',
            description: 'Discover gripping stories and literary treasures for every reader.',
            image: '/images/novel3.jpg',
            imageUrl: '/images/novel3.jpg',
            coordinates: { latitude: 25.2832, longitude: 51.5315 },
            price: '5 - 28 JOD'
          }
        ]
      },
      {
        id: 'educational',
        name: 'Educational Books',
        shops: [
          {
            id: 'shop-56',
            name: 'Knowledge Hub',
            description: 'A wide range of educational books and learning materials for all ages.',
            image: 'images/book.jpg',
            imageUrl: 'images/book.jpg',
            coordinates: { latitude: 25.2857, longitude: 51.5307 },
            price: '8 - 40 JOD'
          },
          {
            id: 'shop-57',
            name: 'Smart Reads',
            description: 'Educational books that inspire curiosity, learning, and skill development.',
            image: 'images/book2.jpg',
            imageUrl: 'images/book2.jpg',
            coordinates: { latitude: 25.2835, longitude: 51.5325 },
            price: '10 - 50 JOD'
          }
        ]
      },
      {
        id: 'poetry',
        name: 'Poetry & Literature',
        shops: [
          {
            id: 'shop-56',
            name: 'The Poet’s Corner',
            description: 'A cozy shop for lovers of poetry and literature, offering classic and contemporary works.',
            image: 'images/poet.jpg',
            imageUrl: 'images/poet.jpg',
            coordinates: { latitude: 25.2860, longitude: 51.5340 },
            price: '8 - 40 JOD'
          },
          {
            id: 'shop-57',
            name: 'Rhythm & Rhyme',
            description: 'A curated collection of poetry books and literary treasures for all ages.',
            image: 'images/poet2.jpg',
            imageUrl: 'images/poet2.jpg',
            coordinates: { latitude: 25.2862, longitude: 51.5341 },
            price: '10 - 50 JOD'
          },
          {
            id: 'shop-57',
            name: 'Words & Wonders',
            description: 'Your destination for unique poetry collections and literary masterpieces.',
            image: 'images/poet3.jpg',
            imageUrl: 'images/poet3.jpg',
            coordinates: { latitude: 25.2864, longitude: 51.5343 },
            price: '10 - 50 JOD'
          }
        ]
      }
    ]
  },
  {
    id: 'drinks',
    name: 'Drinks',
    subCategories: [
      {
        id: 'cold-drinks',
        name: 'Cold Drinks',
        shops: [
          {
            id: 'shop-454545',
            name: 'Icy Refresh',
            description: 'A wide variety of iced beverages, juices, and cold refreshments.',
            image: '/images/cold.jpg',
            imageUrl: '/images/cold.jpg',
            coordinates: { latitude: 25.2863, longitude: 51.5305 },
            price: '3 - 15 JOD'
          },
          {
            id: 'shop-56565656565656',
            name: 'Fresh Juices',
            description: 'Freshly squeezed juices: pomegranate, orange, carrot, and mixed blends.',
            image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
            coordinates: { latitude: 25.2833, longitude: 51.5318 },
            price: '1.5 - 8 JOD'
          }
        ]
      },
      {
        id: 'hot-drinks',
        name: 'Hot Drinks',
        shops: [
          {
            id: 'shop-34343434',
            name: 'The Cozy Cup',
            description: 'Warm up with our selection of teas, coffees, and traditional hot drinks.',
            image: '/images/drink.jpg',
            imageUrl: '/images/drink.jpg',
            coordinates: { latitude: 25.2865, longitude: 51.5318 },
            price: '3 - 6 JOD'
          },
          {
            id: 'shop-66767',
            name: 'Herbal Haven',
            description: 'A variety of herbal teas and hot drinks for relaxation and wellness.',
            image: '/images/drink2.jpg',
            imageUrl: '/images/drink2.jpg',
            coordinates: { latitude: 25.2840, longitude: 51.5303 },
            price: '3 - 10 JOD'
          }, 
          {
            id: 'shop-7787878',
            name: 'Coffee & Chai Corner',
            description: 'Classic coffees, spiced chai, and hot beverages made to perfection.',
            image: '/images/coffee.jpg',
            imageUrl: '/images/coffee.jpg',
            coordinates: { latitude: 25.2842, longitude: 51.5343 },
            price: '3 - 6 JOD'
          }
        ]
      },
      
    ]
  }
];

