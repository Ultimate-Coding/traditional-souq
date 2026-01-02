import { Category } from "../types";

export const mockData: Category[] = [
  {
    id: "food",
    name: "Food",
    subCategories: [
      {
        id: "seafoods",
        name: "Seafoods",
        shops: [
          {
            id: "shop-1",
            name: "Seafood Delights",
            description:
              "Fresh catch daily from local fishermen. Specializing in red snapper, grouper, and shrimp.",
            image:
              "data:image/jpeg;base64,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",
          },
          {
            id: "shop-3",
            name: "The Fisherman's Catch",
            description:
              "Traditional fishmonger with over 30 years of experience in the souq.",
            image: "/images/fish.webp",
          },
          {
            id: "shop-4",
            name: "Oyster House",
            description:
              "Wide variety of fresh and frozen seafood, from local to imported delicacies.",
            image: "/images/oyster.jpeg",
          },
        ],
      },
      {
        id: "fruits-vegetables",
        name: "Fruits & Vegetables",
        shops: [
          {
            id: "shop-5",
            name: "Garden Fresh Produce",
            description:
              "Locally sourced fruits and vegetables, organic options available.",
            image:
              "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-6",
            name: "Sunrise Market",
            description:
              "Fresh seasonal produce delivered daily from nearby farms.",
            image:
              "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-7",
            name: "The Green Stall",
            description:
              "Family-owned stall specializing in exotic fruits and rare vegetables.",
            image:
              "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ],
      },
      {
        id: "sweets",
        name: "Sweets",
        shops: [
          {
            id: "shop-10",
            name: "Honey & Dates Paradise",
            description:
              "Traditional Middle Eastern sweets, baklava, and premium dates.",
            image:
              "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-11",
            name: "Sweet Dreams Bakery",
            description:
              "Handmade pastries, traditional halva, and custom celebration cakes.",
            image:
              "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-12",
            name: "The Confectionery",
            description:
              "Artisanal sweets and candies, including Turkish delight and nougat.",
            image:
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "spices",
    name: "Spices",
    subCategories: [
      {
        id: "sweet-spices",
        name: "Sweet Spices",
        shops: [
          {
            id: "shop-13",
            name: "Cinnamon & Vanilla House",
            description:
              "Premium sweet spices: cinnamon, vanilla, nutmeg, and allspice. Perfect for desserts.",
            image: "images/nutmeg.webp",
          },
          {
            id: "shop-14",
            name: "Sweet Aromatics",
            description:
              "Finest sweet spices: cardamom, star anise, and clove. Freshly ground available.",
            image: "images/sweet.jpg",
          },
          {
            id: "shop-15",
            name: "Paprika House",
            description:
              "Traditional sweet spices for baking and desserts. Bulk and retail available.",
            image: "/images/paprika.jpg",
          },
        ],
      },
      {
        id: "hot-spices",
        name: "Hot Spices",
        shops: [
          {
            id: "shop-17",
            name: "Chili Heaven",
            description:
              "Hot spices: chili peppers, cayenne, black pepper, and hot paprika.",
            image: "/images/pepper.jpeg",
          },
          {
            id: "shop-18",
            name: "The Pepper Corner",
            description:
              "Premium hot spices: habanero, ghost pepper, and specialty hot blends.",
            image: "/images/black.jpg",
          },
          {
            id: "shop-19",
            name: "Spicy Kabsa House",
            description:
              "A traditional spice shop specializing in hot Kabsa blends.",
            image: "/images/kabsa.jpg",
          },
        ],
      },
      {
        id: "salty-sour-spices",
        name: "Salty & Sour Spices",
        shops: [
          {
            id: "shop-21",
            name: "Lemon & Salt Bazaar",
            description:
              "The perfect combination of tangy and savory spices for your kitchen.",
            image: "/images/lemon.jpg",
          },
          {
            id: "shop-22",
            name: "Golden Soy",
            description:
              "Traditional and modern soy products for authentic flavors.",
            image: "/images/soya.jpg",
          },
          {
            id: "shop-23",
            name: "The Sumac Corner",
            description:
              "Traditional sumac, carefully selected for aroma and quality.",
            image: "/images/sumac.webp",
          },
        ],
      },
    ],
  },
  {
    id: "textiles",
    name: "Textiles",
    subCategories: [
      {
        id: "traditional-clothes",
        name: "Traditional Clothes",
        shops: [
          {
            id: "shop-25",
            name: "Heritage Garments",
            description:
              "Authentic traditional clothing: thobes, abayas, and cultural attire.",
            image:
              "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-27",
            name: "Cultural Couture",
            description:
              "Premium traditional wear for special occasions and daily use.",
            image:
              "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-28",
            name: "The Traditional Wardrobe",
            description:
              "Wide selection of traditional clothing for men, women, and children.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ],
      },
      {
        id: "fabrics",
        name: "Fabrics",
        shops: [
          {
            id: "shop-29",
            name: "Fabric Paradise",
            description:
              "Extensive collection of fabrics: silk, cotton, linen, and synthetic blends.",
            image:
              "https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-30",
            name: "Textile Treasures",
            description:
              "Premium fabrics by the meter. Imported and local materials available.",
            image:
              "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ],
      },
    ],
  },
  {
    id: "handicrafts",
    name: "Handicrafts",
    subCategories: [
      {
        id: "pottery",
        name: "Pottery",
        shops: [
          {
            id: "shop-34",
            name: "The Clay Corner",
            description:
              "Handcrafted pottery and ceramics made with traditional techniques.",
            image: "/images/pottery.jpg",
          },
          {
            id: "shop-35",
            name: "Artisan Pots",
            description:
              "Beautifully crafted pots, vases, and decorative items for your home.",
            image: "/images/pottery2.jpg",
          },
          {
            id: "shop-36",
            name: "Traditional Ceramics",
            description:
              "Authentic traditional pottery preserving ancient crafting techniques.",
            image: "/images/pottery3.jpg",
          },
        ],
      },
      {
        id: "woolenwork",
        name: "Woolenwork",
        shops: [
          {
            id: "shop-39",
            name: "Wool & Warmth",
            description: "Cozy and premium wool products for all seasons.",
            image: "images/wool1.jpg",
          },
          {
            id: "Woolen Wonders",
            name: "The Wool Basket",
            description:
              "Beautiful wool creations made with care and tradition.",
            image: "images/wool2.jpg",
          },
          {
            id: "shop-41",
            name: "Artisan Metalworks",
            description:
              "Beautiful handcrafted metal items: jewelry, home decor, and gifts.",
            image: "images/wool3.jpg",
          },
        ],
      },
      {
        id: "woodwork",
        name: "Woodwork",
        shops: [
          {
            id: "shop-42",
            name: "Wooden Wonders",
            description:
              "Handcrafted wooden items, from decor to functional pieces, made with skill and tradition.",
            image: "images/wood.jpg",
          },
          {
            id: "shop-43",
            name: "Timber Treasures",
            description:
              "Unique wooden crafts created by local artisans for every home.",
            image: "images/wood2.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "books",
    name: "Books",
    subCategories: [
      {
        id: "novels",
        name: "Novels",
        shops: [
          {
            id: "shop-54",
            name: "The Story Corner",
            description:
              "A cozy shop offering a wide range of novels from classics to modern fiction.",
            image: "/images/novel.jpg",
          },
          {
            id: "shop-55",
            name: "Fiction Haven",
            description:
              "Dive into a world of imagination with our curated selection of novels.",
            image: "/images/novel2.jpg",
          },
          {
            id: "shop-558",
            name: "Tales & Tomes",
            description:
              "Discover gripping stories and literary treasures for every reader.",
            image: "/images/novel3.jpg",
          },
        ],
      },
      {
        id: "educational",
        name: "Educational Books",
        shops: [
          {
            id: "shop-56",
            name: "Academic Books",
            description:
              "Textbooks, reference materials, and educational resources.",
            image: "/images/book.jpg",
          },
          {
            id: "shop-57",
            name: "Learning Resources",
            description:
              "Study guides, language learning books, and skill development materials.",
            image: "/images/book2.jpg",
          },
        ],
      },
      {
        id: "poetry",
        name: "Poetry & Literature",
        shops: [
          {
            id: "shop-577",
            name: "The Poet’s Corner",
            description:
              "A cozy shop for lovers of poetry and literature, offering classic and contemporary works.",
            image: "/images/poet.jpg",
          },
          {
            id: "shop-56454",
            name: "Rhythm & Rhyme",
            description:
              "A curated collection of poetry books and literary treasures for all ages.",
            image: "/images/poet2.jpg",
          },
          {
            id: "shop-575445",
            name: "The Literary Bazaar",
            description:
              "Traditional and contemporary literature for enthusiasts and collectors.",
            image: "/images/poet3.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    subCategories: [
      {
        id: "traditional-drinks",
        name: "Cold Drinks",
        shops: [
          {
            id: "shop-58",
            name: "Herbal Tea House",
            description:
              "Traditional herbal teas: sage, chamomile, mint, and regional blends.",
            image:
              "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-59",
            name: "Qahwa & Coffee",
            description:
              "Traditional Arabic coffee, Turkish coffee, and premium coffee beans.",
            image:
              "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
          {
            id: "shop-60",
            name: "Fresh Juices",
            description:
              "Freshly squeezed juices: pomegranate, orange, carrot, and mixed blends.",
            image:
              "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80",
          },
        ],
      },
      {
        id: "spices-tea",
        name: "Hot Drinks",
        shops: [
          {
            id: "shop-61",
            name: "The Cozy Cup",
            description:
              "Warm up with our selection of teas, coffees, and traditional hot drinks.",
            image: "/images/drink.jpg",
          },
          {
            id: "shop-62",
            name: "Steaming Sips",
            description:
              "Delicious and aromatic hot beverages to start your day right.",
            image: "/images/drink2.jpg",
          },
        ],
      },
    ],
  },
];
