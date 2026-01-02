import { useParams, useNavigate } from 'react-router-dom';
import { findShopById } from '../../utils/shopUtils';
import { Shop } from '../../types';
import './ShopDetails.css';

export const ShopDetails: React.FC = () => {
  const { shopId } = useParams<{ shopId: string }>();
  const navigate = useNavigate();

  const shop = findShopById(shopId || '');

  if (!shop) {
    return (
      <div className="shop-details">
        <div className="shop-details__not-found">
          <h2>Shop not found</h2>
          <button onClick={() => navigate('/')} className="shop-details__back-button">
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shop-details">
      <button onClick={() => navigate(-1)} className="shop-details__back-button">
        ← Back
      </button>
      
      <div className="shop-details__container">
        <div className="shop-details__image-container">
          <img 
            src={shop.imageUrl || shop.image} 
            alt={shop.name}
            className="shop-details__image"
          />
        </div>

        <div className="shop-details__content">
          <h1 className="shop-details__name">{shop.name}</h1>
          
          {shop.price && (
            <div className="shop-details__price">
              <span className="shop-details__price-label">Price:</span>
              <span className="shop-details__price-value">{shop.price}</span>
            </div>
          )}

          {shop.rating && (
            <div className="shop-details__rating">
              <span className="shop-details__rating-stars">
                {'★'.repeat(Math.floor(shop.rating))}
                {'☆'.repeat(5 - Math.floor(shop.rating))}
              </span>
              <span className="shop-details__rating-value">{shop.rating.toFixed(1)}</span>
            </div>
          )}

          <p className="shop-details__description">{shop.description}</p>

          {(shop.location || shop.hours || shop.contact) && (
            <div className="shop-details__info">
              {shop.location && (
                <div className="shop-details__info-item">
                  <span className="shop-details__info-label">Location:</span>
                  <span className="shop-details__info-value">{shop.location}</span>
                </div>
              )}

              {shop.hours && (
                <div className="shop-details__info-item">
                  <span className="shop-details__info-label">Opening Hours:</span>
                  <span className="shop-details__info-value">{shop.hours}</span>
                </div>
              )}

              {shop.contact && (
                <div className="shop-details__info-item">
                  <span className="shop-details__info-label">Contact:</span>
                  <span className="shop-details__info-value">{shop.contact}</span>
                </div>
              )}
            </div>
          )}

          {shop.additionalInfo && (
            <div className="shop-details__additional">
              <h3 className="shop-details__additional-title">Additional Information</h3>
              <p className="shop-details__additional-text">{shop.additionalInfo}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

