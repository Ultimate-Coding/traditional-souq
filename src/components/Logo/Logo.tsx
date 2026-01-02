import './Logo.css';

interface LogoProps {
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({ size = 'medium', className = '', onClick }) => {
  return (
    <div 
      className={`logo logo--${size} ${className} ${onClick ? 'logo--clickable' : ''}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      } : undefined}
    >
      <svg
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo__svg"
      >
        {/* Traditional Magic Lantern (Fanos) - Souq Market Symbol */}
        
        {/* Lantern Handle/Chain */}
        <path
          d="M100 20 Q100 15 105 12 Q110 10 115 12 Q120 15 120 20"
          stroke="#8b4513"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="100" cy="25" r="3" fill="#d4a574" />
        
        {/* Lantern Top/Crown - Circular */}
        <ellipse
          cx="100"
          cy="50"
          rx="45"
          ry="12"
          fill="#8b4513"
        />
        <ellipse
          cx="100"
          cy="50"
          rx="42"
          ry="10"
          fill="#a0522d"
        />
        
        {/* Lantern Body - Circular Main Structure */}
        <ellipse
          cx="100"
          cy="120"
          rx="55"
          ry="65"
          fill="#a0522d"
        />
        <ellipse
          cx="100"
          cy="120"
          rx="50"
          ry="60"
          fill="#8b4513"
        />
        
        {/* Traditional Geometric Cutouts - Front */}
        {/* Top Row */}
        <circle cx="70" cy="80" r="8" fill="#d4a574" opacity="0.9" />
        <circle cx="100" cy="75" r="10" fill="#d4a574" opacity="0.9" />
        <circle cx="130" cy="80" r="8" fill="#d4a574" opacity="0.9" />
        
        {/* Middle Row - Star Pattern */}
        <path
          d="M70 120 L72 115 L77 115 L73 111 L75 106 L70 109 L65 106 L67 111 L63 115 L68 115 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        <path
          d="M100 115 L102 110 L107 110 L103 106 L105 101 L100 104 L95 101 L97 106 L93 110 L98 110 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        <path
          d="M130 120 L132 115 L137 115 L133 111 L135 106 L130 109 L125 106 L127 111 L123 115 L128 115 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        
        {/* Lower Row - Diamond Pattern */}
        <path
          d="M70 150 L75 145 L80 150 L75 155 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        <path
          d="M100 145 L105 140 L110 145 L105 150 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        <path
          d="M130 150 L135 145 L140 150 L135 155 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        
        {/* Bottom Row - Hexagon Pattern */}
        <path
          d="M70 175 L75 170 L85 170 L90 175 L85 180 L75 180 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        <path
          d="M100 170 L105 165 L115 165 L120 170 L115 175 L105 175 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        <path
          d="M130 175 L135 170 L145 170 L150 175 L145 180 L135 180 Z"
          fill="#d4a574"
          opacity="0.9"
        />
        
        {/* Lantern Base - Circular */}
        <ellipse
          cx="100"
          cy="200"
          rx="50"
          ry="15"
          fill="#654321"
        />
        <ellipse
          cx="100"
          cy="200"
          rx="47"
          ry="12"
          fill="#8b4513"
        />
        
        {/* Inner Glow - Representing Light (Circular) */}
        <circle
          cx="100"
          cy="120"
          r="40"
          fill="#d4a574"
          opacity="0.2"
        />
        <circle
          cx="100"
          cy="120"
          r="30"
          fill="#d4a574"
          opacity="0.15"
        />
        
        {/* Decorative Side Elements - Circular Arrangement */}
        <circle cx="70" cy="100" r="2.5" fill="#d4a574" />
        <circle cx="130" cy="100" r="2.5" fill="#d4a574" />
        <circle cx="70" cy="140" r="2.5" fill="#d4a574" />
        <circle cx="130" cy="140" r="2.5" fill="#d4a574" />
      </svg>
    </div>
  );
};

