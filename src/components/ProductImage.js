import React, { useState } from 'react';

// Product Image Component with fallback and lazy loading
const ProductImage = ({ 
  src, 
  alt, 
  placeholder = "📷",
  className = "image-placeholder" 
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

  return (
    <div className={`${className} relative overflow-hidden`}>
      {/* Placeholder/Fallback */}
      {(!src || imageError || !imageLoaded) && (
        <div className="flex items-center justify-center h-full w-full text-6xl absolute inset-0">
          {placeholder}
        </div>
      )}
      
      {/* Actual Image */}
      {src && !imageError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleImageLoad}
          onError={handleImageError}
          className={`
            w-full h-full object-cover object-center
            transition-opacity duration-300
            ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            absolute inset-0
          `}
          loading="lazy"
        />
      )}
      
      {/* Loading Indicator */}
      {src && !imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400">
          <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
    </div>
  );
};

export default ProductImage; 