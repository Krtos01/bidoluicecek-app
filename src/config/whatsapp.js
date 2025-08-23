// WhatsApp Configuration

export const WHATSAPP_CONFIG = {
  // WhatsApp telefon numarası (ülke kodu ile birlikte, + işareti olmadan)
  phoneNumber: "905334336907", // Örnek: Türkiye için 90 + telefon numarası
  
  // Default mesaj şablonu
  defaultMessage: "Merhaba, {productName} sipariş etmek istiyorum.",
  
  // Her ürün için özel mesajlar
  productMessages: {
    "abc su": "Merhaba! ABC Su ürününüz hakkında detaylı bilgi alabilir miyim? Fiyat ve teslimat koşulları nelerdir?",
    // Daha fazla ürün mesajı buraya eklenebilir
  }
};

// WhatsApp URL oluşturucu fonksiyonu
export const createWhatsAppURL = (productName, customMessage = null) => {
  const message = customMessage || 
    WHATSAPP_CONFIG.productMessages[productName] || 
    WHATSAPP_CONFIG.defaultMessage.replace('{productName}', productName);
  
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

// WhatsApp'ı yeni sekmede açma fonksiyonu
export const openWhatsApp = (productName, customMessage = null) => {
  const url = createWhatsAppURL(productName, customMessage);
  window.open(url, '_blank', 'noopener,noreferrer');
}; 