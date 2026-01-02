import { useState, useMemo } from 'react';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Logo } from './components/Logo/Logo';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { SubCategoryTabs } from './components/SubCategoryTabs/SubCategoryTabs';
import { ShopGrid } from './components/ShopGrid/ShopGrid';
import { mockData } from './data/mockData';
import { Category, SubCategory } from './types';
import './App.css';

function App() {
  const [hasEnteredMarket, setHasEnteredMarket] = useState<boolean>(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    mockData[0]?.id || null
  );
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<
    string | null
  >(null);

  const handleLogoClick = () => {
    setHasEnteredMarket(false);
    setSelectedCategoryId(mockData[0]?.id || null);
    setSelectedSubCategoryId(null);
  };

  const selectedCategory: Category | undefined = useMemo(() => {
    return mockData.find((cat) => cat.id === selectedCategoryId);
  }, [selectedCategoryId]);

  const selectedSubCategory: SubCategory | undefined = useMemo(() => {
    if (!selectedCategory || !selectedSubCategoryId) {
      return selectedCategory?.subCategories[0];
    }
    return selectedCategory.subCategories.find(
      (subCat) => subCat.id === selectedSubCategoryId
    );
  }, [selectedCategory, selectedSubCategoryId]);

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    setSelectedSubCategoryId(null);
  };

  const handleSubCategorySelect = (subCategoryId: string) => {
    setSelectedSubCategoryId(subCategoryId);
  };

  const handleEnterMarket = () => {
    setHasEnteredMarket(true);
  };

  if (!hasEnteredMarket) {
    return <LandingPage onEnter={handleEnterMarket} />;
  }

  return (
    <div className="app">
      <header className="app__header">
        <div className="app__header-content">
          <Logo size="small" onClick={handleLogoClick} />
          <div className="app__header-text">
            <h1 className="app__title">Soukify</h1>
            <p className="app__subtitle">Traditional Market, Modern Experience</p>
          </div>
        </div>
      </header>

      <CategoryTabs
        categories={mockData}
        selectedCategoryId={selectedCategoryId}
        onSelectCategory={handleCategorySelect}
      />

      {selectedCategory && (
        <main className="app__main">
          <SubCategoryTabs
            subCategories={selectedCategory.subCategories}
            selectedSubCategoryId={
              selectedSubCategoryId ||
              selectedCategory.subCategories[0]?.id ||
              null
            }
            onSelectSubCategory={handleSubCategorySelect}
          />

          {selectedSubCategory && (
            <div className="app__content">
              <ShopGrid shops={selectedSubCategory.shops} />
            </div>
          )}
        </main>
      )}
    </div>
  );
}

export default App;

