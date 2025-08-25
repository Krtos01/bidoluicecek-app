// Damacana Sipariş Sınırlamaları Konfigürasyonu
export const DAMACANA_LIMITS = {
  // Damacana siparişlerinin kabul edildiği son saat (24 saat formatında)
  cutoffHour: 19,
  cutoffMinute: 0,
  
  // Damacana saat sınırı aktif mi?
  enabled: true,
  
  // Saat sınırı aşıldığında gösterilecek mesaj
  cutoffMessage: "Damacana siparişleri saat {time}'dan sonra alınmamaktadır",
  
  // Test modu (true olursa saat sınırı devre dışı)
  testMode: false,
  
  // Damacana ürünlerini tanımlayan ID pattern'i
  damacanaIdPattern: /1$/, // ID'si 1 ile bitenler (11, 21, 31...)
  
  // Hafta sonu damacana sınırı farklı mı?
  weekendCutoffHour: 18, // Hafta sonu 1 saat erken
  weekendCutoffMinute: 0,
  weekendEnabled: true // false olursa hafta sonu aynı saat
};

// Bir ürünün damacana olup olmadığını kontrol eden fonksiyon
export const isDamacana = (productId) => {
  return DAMACANA_LIMITS.damacanaIdPattern.test(productId.toString());
};

// Damacana siparişlerinin kabul edilip edilmediğini kontrol eden fonksiyon
export const isDamacanaOrderAllowed = () => {
  if (!DAMACANA_LIMITS.enabled || DAMACANA_LIMITS.testMode) {
    return { isAllowed: true, message: null };
  }

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  const currentDay = now.getDay(); // 0=Pazar, 1=Pazartesi, ..., 6=Cumartesi
  const isWeekend = currentDay === 0 || currentDay === 6;
  
  // Hafta sonu farklı saat kullanılacak mı?
  let cutoffHour, cutoffMinute;
  if (isWeekend && DAMACANA_LIMITS.weekendEnabled) {
    cutoffHour = DAMACANA_LIMITS.weekendCutoffHour;
    cutoffMinute = DAMACANA_LIMITS.weekendCutoffMinute;
  } else {
    cutoffHour = DAMACANA_LIMITS.cutoffHour;
    cutoffMinute = DAMACANA_LIMITS.cutoffMinute;
  }
  
  const cutoffTime = cutoffHour * 60 + cutoffMinute;
  
  if (currentTime >= cutoffTime) {
    const timeString = `${cutoffHour.toString().padStart(2, '0')}:${cutoffMinute.toString().padStart(2, '0')}`;
    return {
      isAllowed: false,
      message: DAMACANA_LIMITS.cutoffMessage.replace('{time}', timeString)
    };
  }
  
  return { isAllowed: true, message: null };
};

// Damacana sipariş saatlerini formatlanmış string olarak döndürür
export const getDamacanaOrderHoursText = () => {
  const formatTime = (hour, minute) => {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  };
  
  const weekdayTime = formatTime(DAMACANA_LIMITS.cutoffHour, DAMACANA_LIMITS.cutoffMinute);
  
  if (DAMACANA_LIMITS.weekendEnabled) {
    const weekendTime = formatTime(DAMACANA_LIMITS.weekendCutoffHour, DAMACANA_LIMITS.weekendCutoffMinute);
    return `Hafta içi: ${weekdayTime}'a kadar, Hafta sonu: ${weekendTime}'a kadar`;
  }
  
  return `${weekdayTime}'a kadar`;
};

// Sepetteki damacana ürünlerini kontrol eden fonksiyon
export const checkCartForDamacana = (cartItems) => {
  const damacanaItems = cartItems.filter(item => isDamacana(item.id));
  
  if (damacanaItems.length === 0) {
    return { hasDamacana: false, isAllowed: true, message: null };
  }
  
  const orderCheck = isDamacanaOrderAllowed();
  
  return {
    hasDamacana: true,
    damacanaItems,
    isAllowed: orderCheck.isAllowed,
    message: orderCheck.message
  };
}; 