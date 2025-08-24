import React, { useState, useEffect } from 'react';
import './App.css';
import { PRODUCTS } from './data/products';
import { SOCIAL_MEDIA_LINKS, openSocialMediaLink } from './data/socialMedia';
import ProductImage from './components/ProductImage';
import SocialMediaIcon from './components/SocialMediaIcon';
import ProductModal from './components/ProductModal';

// Scroll Indicator Component
const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = (scrolled / maxHeight) * 100;
      setScrollTop(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div 
        className="scroll-indicator-bar" 
        style={{ width: `${scrollTop}%` }}
      ></div>
    </div>
  );
};

// Scroll Down Indicator Component
const ScrollDownIndicator = () => {
  const [opacity, setOpacity] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const startFade = 100; // 100px'den sonra fade başlasın
      const endFade = 500;   // 500px'de tamamen kaybolsun
      
      if (scrollY <= startFade) {
        setOpacity(1);
        setShouldAnimate(true);
      } else if (scrollY >= endFade) {
        setOpacity(0);
        setShouldAnimate(false);
        // Tamamen kaybolduğunda component'i kaldır
        setTimeout(() => setIsVisible(false), 100);
      } else {
        // startFade ile endFade arasında yumuşak geçiş
        const fadeRange = endFade - startFade;
        const currentScroll = scrollY - startFade;
        const newOpacity = 1 - (currentScroll / fadeRange);
        setOpacity(Math.max(0, Math.min(1, newOpacity)));
        setShouldAnimate(newOpacity > 0.3); // Opacity düşükken animasyonu durdur
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`scroll-down-indicator ${shouldAnimate ? 'animated' : 'static'}`}
      style={{ 
        opacity: opacity,
        '--custom-opacity': opacity 
      }}
    >
      <div className="scroll-down-content">
        <div className="scroll-down-arrow">▼</div>
        <div className="scroll-down-text">Kaydır</div>
      </div>
    </div>
  );
};

// Header Component
const Header = () => {
  const handleSocialMediaClick = (url, target) => {
    openSocialMediaLink(url, target);
  };

  return (
    <header className="header">
      <ScrollIndicator />
      <div className="header-container">
        <div className="logo">
          <h1>SU APP</h1>
        </div>
        <div className="contact-info">
          <span className="phone">📞 0555 123 45 67</span>
        </div>
        <div className="social-media">
          {SOCIAL_MEDIA_LINKS.map((socialMedia) => (
            <SocialMediaIcon
              key={socialMedia.id}
              socialMedia={socialMedia}
              onLinkClick={handleSocialMediaClick}
              className="social-icon"
            />
          ))}
        </div>
      </div>
    </header>
  );
};

// Product Card Component with Modal Integration
const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    // Modal'ı aç
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        onClick={handleCardClick}
        className="
          product-card group relative cursor-pointer
          transform transition-all duration-300
          hover:scale-105 hover:shadow-2xl
          active:scale-95
        "
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleCardClick();
          }
        }}
        aria-label={`${product.name} ürün seçeneklerini görüntüle`}
      >
        <div className="product-image">
          <ProductImage 
            src={product.image}
            alt={`${product.name} ürün resmi`}
            placeholder={product.imagePlaceholder}
            className="image-placeholder"
          />
        </div>
        
        <div className="product-name">{product.name}</div>
        
        <div className="product-price">{product.price}</div>
        
        {/* Click to View Options hint */}
        <div className="mt-4 text-center">
          <div className="text-blue-600 font-semibold text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            Tıklayın ve Seçenekleri Görün
          </div>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={product}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

// Main App Component
function App() {
  return (
    <div className="App">
      <Header />
      <ScrollDownIndicator />
      <main className="main-content">
        <div className="products-grid">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
