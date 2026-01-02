import { Category } from '../../types';
import './CategoryTabs.css';

interface CategoryTabsProps {
  categories: Category[];
  selectedCategoryId: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export const CategoryTabs: React.FC<CategoryTabsProps> = ({
  categories,
  selectedCategoryId,
  onSelectCategory
}) => {
  return (
    <div className="category-tabs">
      <div className="category-tabs__container">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-tabs__tab ${
              selectedCategoryId === category.id
                ? 'category-tabs__tab--active'
                : ''
            }`}
            onClick={() => onSelectCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

