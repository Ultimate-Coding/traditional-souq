import { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { LandingPage } from './components/LandingPage/LandingPage';
import { Logo } from './components/Logo/Logo';
import { CategoryTabs } from './components/CategoryTabs/CategoryTabs';
import { SubCategoryTabs } from './components/SubCategoryTabs/SubCategoryTabs';
import { ShopGrid } from './components/ShopGrid/ShopGrid';
import { ShopDetails } from './components/ShopDetails/ShopDetails';
import { MapPage } from './components/MapPage/MapPage';
import { mockData } from './data/mockData';
import { searchShops } from './utils/shopUtils';
import { Category, SubCategory, Shop } from './types';
import './App.css';

function MarketContent() {
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    mockData[0]?.id || null
  );
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState<
    string | null
  >(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<Shop[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    setSelectedCategoryId(mockData[0]?.id || null);
    setSelectedSubCategoryId(null);
    setSearchQuery('');
    setIsSearching(false);
    setSearchResults([]);
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setIsSearching(false);
      setSearchResults([]);
    } else {
      setIsSearching(true);
      const results = searchShops(query);
      setSearchResults(results);
    }
  };

  const handleSearchClear = () => {
    setSearchQuery('');
    setIsSearching(false);
    setSearchResults([]);
  };

  return (
    <div className="app">
      <div className="app__top-section">
        <img 
          src="/images/Doha-Souq-Waqif-Interior.jpg"
          alt="Traditional Souq"
          className="app__top-section-background"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
          }}
        />
        <div className="app__top-section-overlay"></div>
        
        <header className="app__header">
          <div className="app__header-content">
            <Logo size="small" onClick={handleLogoClick} />
            <div className="app__header-text">
              <h1 className="app__title">Soukify</h1>
              <h2 className="app__quote">OUR SOUQ...OUR STORY</h2>
            </div>
            <button
              onClick={() => navigate('/map')}
              className="app__map-button"
            >
              🗺️ Map
            </button>
          </div>
        </header>

        {!isSearching && (
          <div className="app__category-tabs-wrapper">
            <CategoryTabs
              categories={mockData}
              selectedCategoryId={selectedCategoryId}
              onSelectCategory={handleCategorySelect}
            />
          </div>
        )}

        <div className="app__search-container">
          <div className="app__search-content">
            <div className="app__search-wrapper">
              <input
                type="text"
                placeholder="Search for any shop..."
                value={searchQuery}
                onChange={handleSearchChange}
                className="app__search-input"
              />
              {searchQuery && (
                <button
                  onClick={handleSearchClear}
                  className="app__search-clear"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isSearching ? (
        <main className="app__main">
          <div className="app__search-header">
            <h2 className="app__search-title">
              Search Results ({searchResults.length})
            </h2>
            {searchQuery && (
              <p className="app__search-subtitle">
                Found {searchResults.length} shop{searchResults.length !== 1 ? 's' : ''} for "{searchQuery}"
              </p>
            )}
          </div>
          <div className="app__content">
            <ShopGrid shops={searchResults} />
          </div>
        </main>
      ) : (
        <>

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
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWrapper />} />
        <Route path="/market" element={<MarketContent />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/shop/:shopId" element={<ShopDetails />} />
      </Routes>
    </Router>
  );
}

function LandingPageWrapper() {
  const navigate = useNavigate();
  
  const handleEnterMarket = () => {
    navigate('/market');
  };

  return <LandingPage onEnter={handleEnterMarket} />;
}

export default App;

