import React from 'react';
import { useCart } from '../context/CartContext';
import { isDamacana, isDamacanaOrderAllowed } from '../config/damacanaLimits';
import ProductImage from './ProductImage';
import { t } from '../config/language';

// Sub Product Card Component - Cart System
const SubProductCard = ({ subProduct }) => {
  const { addItem, removeItem, getItemQuantity } = useCart();
  const quantity = getItemQuantity(subProduct.id);
  const isDamacanaProduct = isDamacana(subProduct.id);
  const damacanaCheck = isDamacanaProduct ? isDamacanaOrderAllowed() : { isAllowed: true };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    // Damacana saat sınırı kontrolü
    if (isDamacanaProduct && !damacanaCheck.isAllowed) {
      return;
    }
    addItem(subProduct);
  };

  const handleRemoveFromCart = (e) => {
    e.stopPropagation();
    removeItem(subProduct);
  };

  const handleCardClick = () => {
    // Damacana saat sınırı kontrolü
    if (isDamacanaProduct && !damacanaCheck.isAllowed) {
      return;
    }
    addItem(subProduct);
  };

  // Damacana saat sınırı nedeniyle disabled mi?
  const isDamacanaDisabled = isDamacanaProduct && !damacanaCheck.isAllowed;

  return (
    <div 
      className={`sub-product-card ${isDamacanaDisabled ? 'sub-product-card-disabled' : ''}`}
      onClick={isDamacanaDisabled ? undefined : handleCardClick}
      role="button"
      tabIndex={isDamacanaDisabled ? -1 : 0}
      onKeyDown={isDamacanaDisabled ? undefined : (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={
        isDamacanaDisabled 
          ? `${subProduct.name} - ${damacanaCheck.message}`
          : `${subProduct.name} ${t('addToCart')}`
      }
    >
      {/* Sub Product Image */}
      <div className="sub-product-image">
        <ProductImage 
          src={subProduct.image}
          alt={`${subProduct.name} resmi`}
          placeholder={subProduct.imagePlaceholder}
          className="sub-product-image-placeholder"
        />
      </div>
      
      {/* Sub Product Name */}
      <h4 className="sub-product-name">
        {subProduct.name}
      </h4>
      
      {/* Sub Product Price */}
      <div className="sub-product-price">
        {subProduct.price}
      </div>
      
      {/* Quantity Controls */}
      {quantity > 0 && (
        <div className="quantity-controls">
          <button 
            onClick={handleRemoveFromCart}
            className="quantity-btn minus-btn"
            aria-label="Azalt"
          >
            −
          </button>
          <span className="quantity-display">{quantity}</span>
          <button 
            onClick={handleAddToCart}
            className="quantity-btn plus-btn"
            aria-label="Arttır"
          >
            +
          </button>
        </div>
      )}
      
      {/* Add to Cart Button */}
      {quantity === 0 && !isDamacanaDisabled && (
        <button 
          onClick={handleAddToCart}
          className="add-to-cart-btn"
        >
          {t('addToCart')}
        </button>
      )}
      
      {/* Damacana Saat Uyarısı */}
      {isDamacanaDisabled && (
        <div className="damacana-warning">
          🕐 {damacanaCheck.message}
        </div>
      )}
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
                  {t('productDescription')}
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