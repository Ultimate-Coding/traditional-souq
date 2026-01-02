import { Shop } from '../../types';
import './ShopCard.css';

interface ShopCardProps {
  shop: Shop;
}

export const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  return (
    <div className="shop-card">
      <div className="shop-card__image-container">
        <img 
          src={shop.image} 
          alt={shop.name}
          className="shop-card__image"
          loading="lazy"
        />
      </div>
      <div className="shop-card__content">
        <h3 className="shop-card__name">{shop.name}</h3>
        <p className="shop-card__description">{shop.description}</p>
      </div>
    </div>
  );
};

