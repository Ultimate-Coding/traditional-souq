import { SubCategory } from '../../types';
import './SubCategoryTabs.css';

interface SubCategoryTabsProps {
  subCategories: SubCategory[];
  selectedSubCategoryId: string | null;
  onSelectSubCategory: (subCategoryId: string) => void;
}

export const SubCategoryTabs: React.FC<SubCategoryTabsProps> = ({
  subCategories,
  selectedSubCategoryId,
  onSelectSubCategory
}) => {
  if (subCategories.length === 0) {
    return null;
  }

  return (
    <div className="subcategory-tabs">
      <div className="subcategory-tabs__container">
        {subCategories.map((subCategory) => (
          <button
            key={subCategory.id}
            className={`subcategory-tabs__tab ${
              selectedSubCategoryId === subCategory.id
                ? 'subcategory-tabs__tab--active'
                : ''
            }`}
            onClick={() => onSelectSubCategory(subCategory.id)}
          >
            {subCategory.name}
          </button>
        ))}
      </div>
    </div>
  );
};

