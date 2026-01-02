import { Logo } from '../Logo/Logo';
import './LandingPage.css';

interface LandingPageProps {
  onEnter: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="landing-page">
      <img 
        src="/images/Doha-Souq-Waqif-Interior.jpg"
        alt="Traditional Souq"
        className="landing-page__background-image"
        onError={(e) => {
          // Fallback to a publicly accessible souq image if local fails
          const target = e.target as HTMLImageElement;
          target.src = 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80';
        }}
      />
      <div className="landing-page__overlay"></div>
      <div className="landing-page__content">
        <div className="landing-page__logo">
          <Logo size="large" />
        </div>

        <h1 className="landing-page__title">Welcome to Soukify</h1>

        <div className="landing-page__poetry">
          <p className="poetry-line">In ancient alleys where stories unfold,</p>
          <p className="poetry-line">Where spices dance and treasures are sold,</p>
          <p className="poetry-line">A digital souq, timeless and grand,</p>
          <p className="poetry-line">Where tradition meets the modern hand.</p>
        </div>

        <button className="landing-page__button" onClick={onEnter}>
          <span className="button-text">Enter the Market</span>
          <span className="button-icon">→</span>
        </button>
      </div>
    </div>
  );
};

