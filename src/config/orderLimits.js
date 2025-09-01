// Sipariş Limitleri Konfigürasyonu
export const ORDER_LIMITS = {
  // Minimum sipariş tutarı (TL)
  minimumOrderAmount: 400,
  
  // Minimum tutar kontrolü aktif mi?
  minimumOrderEnabled: true,
  
  // Minimum tutara ulaşmadığında gösterilecek mesaj
  minimumOrderMessage: "Minimum sepet tutarı {minimumOrderAmount} TL'dir",
  
  // Maksimum sipariş tutarı (isteğe bağlı)
  maximumOrderAmount: null, // null = sınır yok
  
  // Maksimum tutar aşıldığında gösterilecek mesaj
  maximumOrderMessage: "Maksimum sipariş tutarı {amount} TL'dir"
};

// Minimum sipariş tutarını kontrol eden fonksiyon
export const checkMinimumOrder = (totalPrice) => {
  if (!ORDER_LIMITS.minimumOrderEnabled) {
    return { isValid: true, message: null };
  }
  
  if (totalPrice < ORDER_LIMITS.minimumOrderAmount) {
    return {
      isValid: false,
      message: ORDER_LIMITS.minimumOrderMessage.replace('{amount}', ORDER_LIMITS.minimumOrderAmount)
    };
  }
  
  return { isValid: true, message: null };
};

// Maksimum sipariş tutarını kontrol eden fonksiyon
export const checkMaximumOrder = (totalPrice) => {
  if (!ORDER_LIMITS.maximumOrderAmount) {
    return { isValid: true, message: null };
  }
  
  if (totalPrice > ORDER_LIMITS.maximumOrderAmount) {
    return {
      isValid: false,
      message: ORDER_LIMITS.maximumOrderMessage.replace('{amount}', ORDER_LIMITS.maximumOrderAmount)
    };
  }
  
  return { isValid: true, message: null };
};

// Sipariş tutarının geçerli olup olmadığını kontrol eden ana fonksiyon
export const validateOrderAmount = (totalPrice) => {
  const minCheck = checkMinimumOrder(totalPrice);
  if (!minCheck.isValid) {
    return minCheck;
  }
  
  const maxCheck = checkMaximumOrder(totalPrice);
  if (!maxCheck.isValid) {
    return maxCheck;
  }
  
  return { isValid: true, message: null };
}; 