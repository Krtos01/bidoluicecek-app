import React, { useState } from 'react';

// Social Media Icon Component with image support
const SocialMediaIcon = ({ 
  socialMedia,
  onLinkClick,
  className = "social-icon" 
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  const handleClick = (e) => {
    e.stopPropagation(); // Prevent parent click events
    onLinkClick(socialMedia.url, socialMedia.target);
  };

  return (
    <div 
      className={`${className} relative cursor-pointer`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick(e);
        }
      }}
      aria-label={`${socialMedia.name} sayfasına git`}
    >
      {/* Placeholder/Fallback */}
      {(!socialMedia.icon || imageError || !imageLoaded) && (
        <span className="text-lg">
          {socialMedia.iconPlaceholder}
        </span>
      )}
      
      {/* Actual Image */}
      {socialMedia.icon && !imageError && (
        <img
          src={socialMedia.icon}
          alt={`${socialMedia.name} ikonu`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`
            w-6 h-6 object-contain
            transition-opacity duration-300
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
          `}
        />
      )}
      
      {/* Loading Indicator for images */}
      {socialMedia.icon && !imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcon; 