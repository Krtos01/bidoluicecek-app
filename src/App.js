import React, { useState, useEffect } from 'react';
import './App.css';
import { PRODUCTS } from './data/products';
import { SOCIAL_MEDIA_LINKS, handleSocialMediaClick } from './data/socialMedia';
import ProductImage from './components/ProductImage';
import SocialMediaIcon from './components/SocialMediaIcon';
import ProductModal from './components/ProductModal';
import VideoModal from './components/VideoModal';
import { CartProvider } from './context/CartContext';
import OrderButton from './components/OrderButton';
import WelcomeMessage from './components/WelcomeMessage';
import { toggleLanguage, getCurrentLanguageInfo, t } from './config/language';

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
          <div className="scroll-down-text">{t('scrollDown')}</div>
        </div>
    </div>
  );
};

// Header Component
const Header = ({ onVideoOpen, onLanguageChange }) => {
  const [currentLang, setCurrentLang] = useState(getCurrentLanguageInfo());
  
  const handleSocialClick = (socialMedia) => {
    if (socialMedia.type === "language") {
      toggleLanguage();
      setCurrentLang(getCurrentLanguageInfo());
      if (onLanguageChange) {
        onLanguageChange();
      }
    } else {
      handleSocialMediaClick(socialMedia, onVideoOpen);
    }
  };

  return (
    <header className="header">
      <ScrollIndicator />
      <div className="header-container">
        {/* Sol Taraf: Logo Alanı */}
        <div className="header-left">
          <div className="logo-area">
            {/* Logo buraya gelecek - şimdilik placeholder */}
            <img 
              src="/images/logo.png" 
              alt="Bİ DOLU İÇECEK Logo" 
              className="header-logo"
              onError={(e) => {
                // Logo yoksa text fallback
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <h1 className="logo-fallback">Bİ DOLU İÇECEK</h1>
          </div>
        </div>

        {/* Orta: Telefon Numarası */}
        <div className="header-center">
          <div className="contact-info">
            <span className="phone">📞 0530 309 98 87</span>
          </div>
        </div>

        {/* Sağ Taraf: Sosyal Medya Daireleri */}
        <div className="header-right">
          <div className="social-media">
            {SOCIAL_MEDIA_LINKS.map((socialMedia) => (
              <SocialMediaIcon
                key={socialMedia.id}
                socialMedia={socialMedia}
                onLinkClick={handleSocialClick}
                className="social-icon"
                currentLanguage={socialMedia.type === "language" ? currentLang : null}
              />
            ))}
          </div>
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
        
        <div className="product-price">
          {product.price === "Seçenekleri Görün" ? t('seeOptions') : product.price}
        </div>
        
        {/* Click to View Options hint */}
        <div className="mt-4 text-center">
          <div className="text-blue-600 font-semibold text-lg opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            
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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState({ url: null, title: "" });
  const [, setLanguageKey] = useState(0); // Force re-render on language change

  const handleVideoOpen = (videoUrl, videoTitle) => {
    setCurrentVideo({ url: videoUrl, title: videoTitle });
    setIsVideoModalOpen(true);
  };

  const handleVideoClose = () => {
    setIsVideoModalOpen(false);
    setCurrentVideo({ url: null, title: "" });
  };

  const handleLanguageChange = () => {
    setLanguageKey(prev => prev + 1); // Force re-render
  };

  return (
    <CartProvider>
      <div className="App">
        <Header onVideoOpen={handleVideoOpen} onLanguageChange={handleLanguageChange} />
        <ScrollDownIndicator />
        <main className="main-content">
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
        
        {/* Order Button */}
        <OrderButton />
        
        {/* Welcome Message */}
        <WelcomeMessage />

        {/* Video Modal */}
        <VideoModal 
          isOpen={isVideoModalOpen}
          onClose={handleVideoClose}
          videoUrl={currentVideo.url}
          videoTitle={currentVideo.title}
        />
      </div>
    </CartProvider>
  );
}

export default App;
