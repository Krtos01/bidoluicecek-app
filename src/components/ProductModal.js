import React from 'react';
import { openWhatsApp } from '../config/whatsapp';
import { trackWhatsAppClick, trackError } from '../utils/analytics';

// Sub Product Card Component - Custom CSS
const SubProductCard = ({ subProduct }) => {
  const handleSubProductClick = async () => {
    try {
      // Analytics tracking
      trackWhatsAppClick(subProduct.name);
      
      // WhatsApp'ı aç
      openWhatsApp(subProduct.name, subProduct.whatsappMessage);
    } catch (error) {
      trackError(error, 'Sub Product WhatsApp Click Handler');
      
      // Fallback: Direct WhatsApp link
      const fallbackUrl = `https://wa.me/905551234567?text=${encodeURIComponent(subProduct.whatsappMessage)}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      onClick={handleSubProductClick}
      className="sub-product-card"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleSubProductClick();
        }
      }}
      aria-label={`${subProduct.name} için WhatsApp ile sipariş ver`}
    >
      {/* Sub Product Image */}
      <div className="sub-product-image">
        <div className="sub-product-image-placeholder">
          {subProduct.image ? (
            <img
              src={subProduct.image}
              alt={`${subProduct.name} resmi`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '16px'
              }}
            />
          ) : (
            <span>
              {subProduct.imagePlaceholder}
            </span>
          )}
        </div>
      </div>
      
      {/* Sub Product Name */}
      <h4 className="sub-product-name">
        {subProduct.name}
      </h4>
      
      {/* Sub Product Price */}
      <div className="sub-product-price">
        {subProduct.price}
      </div>
      
      {/* WhatsApp hint */}
      <div className="sub-product-hint">
        <div className="sub-product-hint-text">
          Tıklayın ve Sipariş Edin
        </div>
      </div>
    </div>
  );
};

// Product Modal Component - Custom CSS tam ekran
const ProductModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleCloseClick = () => {
    onClose();
  };

  return (
    <div 
      className="modal-overlay"
      onClick={handleBackdropClick}
    >
      {/* Opak gri backdrop */}
      <div className="modal-backdrop"></div>
      
      {/* Modal Content - Tam ekran */}
      <div className="modal-content">
        {/* Header */}
        <div className="modal-header">
          <div className="modal-header-container">
            <div className="modal-header-info">
              <div className="modal-header-icon">
                <span>
                  {product.imagePlaceholder}
                </span>
              </div>
              <div className="modal-header-text">
                <h2>
                  {product.name}
                </h2>
                <p>
                  Ürün seçeneklerini inceleyin ve sipariş verin
                </p>
              </div>
            </div>
            
            {/* Close Button */}
            <button
              onClick={handleCloseClick}
              className="modal-close-btn"
              aria-label="Geri dön"
            >
              <span>‹</span>
            </button>
          </div>
        </div>

        {/* Sub Products Grid */}
        <div className="modal-body">
          <div className="modal-body-container">
            <div className="modal-grid">
              {product.subProducts?.map((subProduct) => (
                <SubProductCard 
                  key={subProduct.id} 
                  subProduct={subProduct} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <div className="modal-footer-container">
            <p>
              💬 Ürüne tıklayarak WhatsApp ile sipariş verebilirsiniz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal; 