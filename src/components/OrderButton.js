import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { openWhatsApp } from '../config/whatsapp';
import { trackWhatsAppClick, trackError } from '../utils/analytics';
import { isServiceOpen, getServiceHoursText, getStoreStatus } from '../config/serviceHours';

const OrderButton = () => {
  const { getTotalItems, getCartMessage, clearCart } = useCart();
  const [serviceOpen, setServiceOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState(null);
  const totalItems = getTotalItems();

  // Servis durumunu her dakika kontrol et
  useEffect(() => {
    const checkServiceStatus = async () => {
      const isOpen = await isServiceOpen();
      const status = getStoreStatus();
      setServiceOpen(isOpen);
      setStoreStatus(status);
    };

    // İlk kontrol
    checkServiceStatus();

    // Her dakika kontrol et
    const interval = setInterval(checkServiceStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  if (totalItems === 0) return null;

  const handleOrderClick = async () => {
    // Servis kapalıysa çalışma
    if (!serviceOpen) {
      return;
    }

    try {
      const message = getCartMessage();
      
      // Analytics tracking
      trackWhatsAppClick('Sepet Siparişi');
      
      // WhatsApp'ı aç
      openWhatsApp('Sepet Siparişi', message);
      
      // Sepeti temizle
      clearCart();
    } catch (error) {
      trackError(error, 'Order Button Click Handler');
      
      // Fallback: Direct WhatsApp link
      const message = getCartMessage();
      const fallbackUrl = `https://wa.me/905551234567?text=${encodeURIComponent(message)}`;
      window.open(fallbackUrl, '_blank', 'noopener,noreferrer');
      
      // Sepeti temizle
      clearCart();
    }
  };

  return (
    <div className="order-button-container">
      <button 
        onClick={handleOrderClick}
        className={`order-button ${!serviceOpen ? 'order-button-disabled' : ''}`}
        disabled={!serviceOpen}
        aria-label={serviceOpen ? `${totalItems} ürün ile sipariş ver` : `Servis saatleri dışında, ${getServiceHoursText()}`}
      >
        <div className="order-button-content">
          <span className="order-button-icon">
            {serviceOpen ? '🛒' : '🚫'}
          </span>
          <span className="order-button-text">
            {serviceOpen 
              ? 'Sipariş Ver' 
              : storeStatus?.temporarilyClosed 
                ? 'Geçici Olarak Kapalı'
                : storeStatus?.maintenanceMode
                  ? 'Bakım Modunda'
                  : 'Servis Saatleri Dışındadır'
            }
          </span>
          {serviceOpen && (
            <span className="order-button-count">{totalItems}</span>
          )}
        </div>
        {!serviceOpen && (
          <div className="order-button-hours">
            {storeStatus?.reason 
              ? storeStatus.reason
              : `Servis Saatleri: ${getServiceHoursText()}`
            }
          </div>
        )}
      </button>
    </div>
  );
};

export default OrderButton; 