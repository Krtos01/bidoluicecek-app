import React, { useState, useEffect } from 'react';

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // localStorage'dan kontrol et
    const hasVisited = localStorage.getItem('suapp-visited');
    
    if (!hasVisited) {
      // İlk ziyaret - mesajı göster
      setIsVisible(true);
      // localStorage'a işaretle
      localStorage.setItem('suapp-visited', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="welcome-message-overlay">
      <div className="welcome-message-container">
        <div className="welcome-message-header">
          <button 
            onClick={handleClose}
            className="welcome-message-close"
            aria-label="Mesajı kapat"
          >
            ×
          </button>
        </div>
        
        <div className="welcome-message-content">
          <div className="welcome-message-icon">!</div>
          <p>Hoşgeldiniz!Lütfen ilk siparişinizde adresinizi eklemeyi unutmayın, Teşekkürler.</p>
        </div>
        
        <div className="welcome-message-footer">
          <button 
            onClick={handleClose}
            className="welcome-message-button"
          >
            Anladım
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage; 