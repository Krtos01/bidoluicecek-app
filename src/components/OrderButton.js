import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import { openWhatsApp } from '../config/whatsapp';
import { trackWhatsAppClick, trackError } from '../utils/analytics';
import { isServiceOpen, getServiceHoursText, getStoreStatus } from '../config/serviceHours';
import { validateOrderAmount, ORDER_LIMITS } from '../config/orderLimits';
import { checkCartForDamacana } from '../config/damacanaLimits';
import { t } from '../config/language';

const OrderButton = () => {
  const { getTotalItems, getTotalPrice, getCartMessage, clearCart, items } = useCart();
  const [serviceOpen, setServiceOpen] = useState(false);
  const [storeStatus, setStoreStatus] = useState(null);
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const orderValidation = validateOrderAmount(totalPrice);
  const damacanaValidation = checkCartForDamacana(items);

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
    // Servis kapalıysa veya minimum tutar kontrolü geçmezse veya damacana saat sınırı varsa çalışma
    if (!serviceOpen || !orderValidation.isValid || !damacanaValidation.isAllowed) {
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

  // Buton durumunu belirle
  const isButtonDisabled = !serviceOpen || !orderValidation.isValid || !damacanaValidation.isAllowed;
  const buttonClass = isButtonDisabled ? 'order-button-disabled' : '';

  return (
    <div className="order-button-container">
      <button 
        onClick={handleOrderClick}
        className={`order-button ${buttonClass}`}
        disabled={isButtonDisabled}
        aria-label={
          !serviceOpen 
            ? `Servis saatleri dışında, ${getServiceHoursText()}`
            : !orderValidation.isValid
              ? orderValidation.message
              : !damacanaValidation.isAllowed
                ? damacanaValidation.message
                : `${totalItems} ürün ile sipariş ver`
        }
      >
        <div className="order-button-content">
          <span className="order-button-icon">
            {serviceOpen ? '🛒' : '🚫'}
          </span>
          <span className="order-button-text">
            {!serviceOpen
              ? storeStatus?.temporarilyClosed 
                ? 'Geçici Olarak Kapalı'
                : storeStatus?.maintenanceMode
                  ? 'Bakım Modunda'
                  : t('orderUnavailable')
              : !orderValidation.isValid
                ? t('minimumOrder', { minimumAmount: ORDER_LIMITS.minimumOrderAmount })
                : !damacanaValidation.isAllowed
                  ? t('damacanaRestricted', { cutoffTime: '19:00' })
                  : `${t('orderButton')} - ${totalPrice.toFixed(2)} TL`
            }
          </span>
          {serviceOpen && orderValidation.isValid && damacanaValidation.isAllowed && (
            <span className="order-button-count">{totalItems} ürün</span>
          )}
        </div>
        {isButtonDisabled && (
          <div className="order-button-hours">
            {!serviceOpen
              ? storeStatus?.reason 
                ? storeStatus.reason
                : `Servis Saatleri: ${getServiceHoursText()}`
              : !orderValidation.isValid && totalPrice > 0
                ? t('currentCart', { amount: totalPrice.toFixed(2) })
                : !damacanaValidation.isAllowed && damacanaValidation.hasDamacana
                  ? `Damacana siparişleri saat 19:00'dan sonra alınmaz`
                  : ''
            }
          </div>
        )}
      </button>
    </div>
  );
};

export default OrderButton; 