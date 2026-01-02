import { Shop } from '../../types';
import { ShopCard } from '../ShopCard/ShopCard';
import './ShopGrid.css';

interface ShopGridProps {
  shops: Shop[];
}

export const ShopGrid: React.FC<ShopGridProps> = ({ shops }) => {
  if (shops.length === 0) {
    return (
      <div className="shop-grid__empty">
        <p>No shops available in this category.</p>
      </div>
    );
  }

  return (
    <div className="shop-grid">
      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
};

