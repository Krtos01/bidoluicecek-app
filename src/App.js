import React, { useState, useEffect } from 'react';
import './App.css';
import { PRODUCTS } from './data/products';
import { openWhatsApp } from './config/whatsapp';
import { trackWhatsAppClick, trackError } from './utils/analytics';
import { SOCIAL_MEDIA_LINKS, openSocialMediaLink } from './data/socialMedia';
import ProductImage from './components/ProductImage';
import SocialMediaIcon from './components/SocialMediaIcon';

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

// Product Card Component with WhatsApp Integration
const ProductCard = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleCardClick = async () => {
    try {
      setIsLoading(true);
      
      // Analytics tracking
      trackWhatsAppClick(product.name);
      
      // Biraz loading efekti için
      setTimeout(() => {
        openWhatsApp(product.name, product.whatsappMessage);
        setIsLoading(false);
      }, 300);
    } catch (error) {
      trackError(error, 'WhatsApp Card Click Handler');
      setIsLoading(false);
      
      // Fallback: Direct WhatsApp link
      const fallbackUrl = `https://wa.me/905551234567?text=${encodeURIComponent(product.whatsappMessage)}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
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
      aria-label={`${product.name} için WhatsApp ile iletişime geç`}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded-[24px]">
          <div className="flex flex-col items-center gap-3 text-green-600">
            <div className="w-8 h-8 border-3 border-green-600 border-t-transparent rounded-full animate-spin"></div>
            <span className="font-medium text-lg">WhatsApp açılıyor...</span>
          </div>
        </div>
      )}

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
      
      {/* Click to Contact hint */}
      <div className="mt-4 text-center">
        <div className="text-green-600 font-semibold text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          Tıklayın ve Sipariş Edin
        </div>
      </div>
    </div>
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
