import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { getAllShops } from '../../utils/shopUtils';
import './MapPage.css';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in react-leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export const MapPage: React.FC = () => {
  const navigate = useNavigate();
  const shops = getAllShops();
  
  // Filter shops that have coordinates
  const shopsWithCoordinates = shops.filter(
    (shop) => shop.coordinates?.latitude && shop.coordinates?.longitude
  );

  // Default center (Doha, Qatar - approximate center of Souq Waqif)
  const defaultCenter: LatLngExpression = [25.2854, 51.5310];
  
  // Calculate center from shops if available, otherwise use default
  const mapCenter: LatLngExpression = shopsWithCoordinates.length > 0
    ? [
        shopsWithCoordinates.reduce((sum, shop) => sum + (shop.coordinates?.latitude || 0), 0) / shopsWithCoordinates.length,
        shopsWithCoordinates.reduce((sum, shop) => sum + (shop.coordinates?.longitude || 0), 0) / shopsWithCoordinates.length
      ]
    : defaultCenter;

  const handleShopClick = (shopId: string) => {
    navigate(`/shop/${shopId}`);
  };

  useEffect(() => {
    // Ensure map container is properly initialized
    const mapContainer = document.querySelector('.map-page__map');
    if (mapContainer) {
      mapContainer.setAttribute('style', 'height: 100%; width: 100%;');
    }
  }, []);

  return (
    <div className="map-page">
      <div className="map-page__header">
        <button 
          onClick={() => navigate('/market')} 
          className="map-page__back-button"
        >
          ← Back to Market
        </button>
        <h1 className="map-page__title">Shop Locations</h1>
        <p className="map-page__subtitle">
          Click on any marker to view shop details
        </p>
      </div>

      <div className="map-page__container">
        {shopsWithCoordinates.length > 0 ? (
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: '100%', width: '100%', minHeight: '500px' }}
            className="map-page__map"
            key="map-container"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {shopsWithCoordinates.map((shop) => (
              <Marker
                key={shop.id}
                position={[
                  shop.coordinates!.latitude,
                  shop.coordinates!.longitude
                ]}
              >
                <Popup>
                  <div className="map-page__popup">
                    <h3 className="map-page__popup-title">{shop.name}</h3>
                    <p className="map-page__popup-description">
                      {shop.description}
                    </p>
                    <button
                      onClick={() => handleShopClick(shop.id)}
                      className="map-page__popup-button"
                    >
                      View Details
                    </button>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        ) : (
          <div className="map-page__no-shops">
            <p>No shops with coordinates available.</p>
          </div>
        )}
      </div>
    </div>
  );
};

