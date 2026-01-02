# Souq Digital - Traditional Market Web Application

A modern, responsive web application built with Vite + React + TypeScript to digitize and revive traditional street markets (souqs).

## 🚀 Tech Stack

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **CSS** - Standard CSS (no frameworks)

## 📁 Folder Structure

```
project/
├── public/                 # Static assets (if any)
├── src/
│   ├── components/         # Reusable React components
│   │   ├── CategoryTabs/   # Main category navigation tabs
│   │   │   ├── CategoryTabs.tsx
│   │   │   └── CategoryTabs.css
│   │   ├── SubCategoryTabs/ # Subcategory navigation tabs
│   │   │   ├── SubCategoryTabs.tsx
│   │   │   └── SubCategoryTabs.css
│   │   ├── ShopCard/       # Individual shop card component
│   │   │   ├── ShopCard.tsx
│   │   │   └── ShopCard.css
│   │   └── ShopGrid/       # Grid layout for shop cards
│   │       ├── ShopGrid.tsx
│   │       └── ShopGrid.css
│   ├── data/               # Mock data
│   │   └── mockData.ts     # JSON-like data structure
│   ├── types/              # TypeScript type definitions
│   │   └── index.ts        # Interfaces and types
│   ├── App.tsx             # Main application component
│   ├── App.css             # App-specific styles
│   ├── main.tsx            # Application entry point
│   ├── index.css           # Global styles and CSS variables
│   └── vite-env.d.ts       # Vite type definitions
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md               # This file
```

## 🎨 Design Decisions

### Architecture

1. **Component-Based Structure**: Each component lives in its own folder with its CSS file, promoting modularity and maintainability.

2. **Type Safety**: Strong TypeScript typing with interfaces for `Category`, `SubCategory`, and `Shop` ensures type safety throughout the application.

3. **State Management**: Uses React hooks (`useState`, `useMemo`) for local state management. The app maintains:
   - Selected category ID
   - Selected subcategory ID
   - Derived data (selected category/subcategory objects)

4. **Data Structure**: Mock data is stored in a separate file (`mockData.ts`) with a hierarchical structure:
   - Categories → SubCategories → Shops

### UI/UX Design

1. **Color Palette**: 
   - Primary: Brown tones (#8b4513, #a0522d) - traditional souq feeling
   - Accent: Warm beige (#d4a574, #e8dcc6) - complements the brown theme
   - Background: Soft cream (#faf8f5) - clean and modern

2. **Navigation Flow**:
   - **Category Tabs**: Sticky header with main categories (Food, Spices, Textiles, Handicrafts)
   - **Subcategory Tabs**: Horizontal scrollable tabs below categories
   - **Shop Grid**: Responsive grid layout showing shop cards

3. **Transitions**: 
   - CSS-only smooth transitions on hover and state changes
   - Fade-in animations for content changes
   - Transform effects on interactive elements

4. **Responsive Design**:
   - Desktop: Multi-column grid (auto-fill, min 280px)
   - Tablet: Adjusted grid and spacing
   - Mobile: Single column, horizontal scrolling tabs, optimized touch targets

### Component Design

1. **CategoryTabs**: 
   - Sticky positioning for always-visible navigation
   - Gradient background with glassmorphism effect
   - Active state clearly distinguished

2. **SubCategoryTabs**: 
   - Horizontal scrollable on mobile
   - Pill-shaped buttons with smooth transitions
   - Active state with enhanced styling

3. **ShopCard**: 
   - Image-first design with hover effects
   - Clean typography hierarchy
   - Shadow elevation on hover

4. **ShopGrid**: 
   - CSS Grid with auto-fill for responsive layout
   - Consistent spacing and gaps
   - Empty state handling

### CSS Strategy

1. **CSS Variables**: Global color and shadow variables in `index.css` for consistency
2. **Component Scoping**: Each component has its own CSS file with BEM-like naming
3. **Mobile-First**: Base styles for mobile, enhanced for larger screens
4. **Smooth Animations**: All transitions use CSS for performance

## 🛠️ Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Features

- ✅ Main category navigation (Food, Spices, Textiles, Handicrafts)
- ✅ Subcategory filtering
- ✅ Shop card grid display
- ✅ Responsive design (desktop, tablet, mobile)
- ✅ Smooth CSS transitions
- ✅ TypeScript type safety
- ✅ Clean, scalable component structure
- ✅ Mock data integration

## 🎯 Future Enhancements

- Search functionality
- Shop detail pages
- Filtering and sorting options
- Shopping cart (if e-commerce is added)
- User authentication
- Backend API integration

