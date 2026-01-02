import { useState, useMemo } from 'react';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { SubCategoryTabs } from './components/SubCategoryTabs/SubCategoryTabs';
import { ShopGrid } from './components/ShopGrid/ShopGrid';
import { mockData } from './data/mockData';
import { Category, SubCategory } from './types';
import './App.css';

function App() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    mockData[0]?.id || null
  );
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<
    string | null
  >(null);

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

  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Souq Digital</h1>
        <p className="app__subtitle">Traditional Market, Modern Experience</p>
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

