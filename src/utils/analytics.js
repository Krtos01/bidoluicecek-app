// Analytics ve Error Tracking Utilities

// WhatsApp tıklama olaylarını takip et
export const trackWhatsAppClick = (productName) => {
  // Google Analytics veya başka analytics servisi için
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: productName,
      value: 1
    });
  }
  
  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log(`WhatsApp clicked for product: ${productName}`);
  }
};

// Hata durumlarını takip et
export const trackError = (error, context = '') => {
  // Error tracking servisi için (Sentry, LogRocket vs.)
  console.error(`Error in ${context}:`, error);
  
  // Production'da external error tracking servisine gönder
  if (process.env.NODE_ENV === 'production') {
    // Buraya error tracking kodu eklenebilir
  }
};

// Sayfa görüntüleme takibi
export const trackPageView = (pageName) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_title: pageName,
      page_location: window.location.href
    });
  }
}; 