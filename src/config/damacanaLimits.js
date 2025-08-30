// Damacana Sipariş Sınırlamaları Konfigürasyonu
export const DAMACANA_LIMITS = {
  // Damacana siparişlerinin kabul edildiği son saat (24 saat formatında)
  cutoffHour: 19,
  cutoffMinute: 0,
  
  // Damacana siparişlerinin kabul edilmeye başladığı saat (ertesi gün)
  startHour: 8,
  startMinute: 30,
  
  // Damacana saat sınırı aktif mi?
  enabled: true,
  
  // Saat sınırı aşıldığında gösterilecek mesaj
  cutoffMessage: "Damacana siparişleri {cutoffTime}'dan sonra alınmamaktadır",
  
  // Test modu (true olursa saat sınırı devre dışı)
  testMode: false,
  
  // Damacana ürünlerini tanımlayan ID pattern'i
  // Damacana ID'leri: 11, 21, 31, 41, 51, 61, 71, 81 (x1 formatında)
  damacanaIdPattern: /1$/, // 1 ile biten tüm ID'ler (11, 21, 31, 81...)
  
  // Hafta sonu damacana sınırı farklı mı?
  weekendCutoffHour: 18, // Hafta sonu 1 saat erken
  weekendCutoffMinute: 0,
  weekendStartHour: 8, // Hafta sonu başlangıç saati
  weekendStartMinute: 30,
  weekendEnabled: false // false olursa hafta sonu aynı saat
};

// Bir ürünün damacana olup olmadığını kontrol eden fonksiyon
export const isDamacana = (productId) => {
  const result = DAMACANA_LIMITS.damacanaIdPattern.test(productId.toString());
  console.log(`Damacana Check: ID ${productId} -> ${result ? 'DAMAdaNA' : 'Normal ürün'}`);
  return result;
};

// Damacana siparişlerinin kabul edilip edilmediğini kontrol eden fonksiyon
export const isDamacanaOrderAllowed = () => {
  if (!DAMACANA_LIMITS.enabled || DAMACANA_LIMITS.testMode) {
    console.log('Damacana: Sistem kapalı veya test modunda - izin veriliyor');
    return { isAllowed: true, message: null };
  }

  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  const currentDay = now.getDay(); // 0=Pazar, 1=Pazartesi, ..., 6=Cumartesi
  const isWeekend = currentDay === 0 || currentDay === 6;
  
  console.log(`Damacana Debug: Şu an saat ${currentHour}:${currentMinute.toString().padStart(2, '0')} (${currentTime} dakika), ${isWeekend ? 'Hafta sonu' : 'Hafta içi'}`);
  
  // Hafta sonu farklı saat kullanılacak mı?
  let cutoffHour, cutoffMinute, startHour, startMinute;
  if (isWeekend && DAMACANA_LIMITS.weekendEnabled) {
    cutoffHour = DAMACANA_LIMITS.weekendCutoffHour;
    cutoffMinute = DAMACANA_LIMITS.weekendCutoffMinute;
    startHour = DAMACANA_LIMITS.weekendStartHour;
    startMinute = DAMACANA_LIMITS.weekendStartMinute;
  } else {
    cutoffHour = DAMACANA_LIMITS.cutoffHour;
    cutoffMinute = DAMACANA_LIMITS.cutoffMinute;
    startHour = DAMACANA_LIMITS.startHour;
    startMinute = DAMACANA_LIMITS.startMinute;
  }
  
  const cutoffTime = cutoffHour * 60 + cutoffMinute;
  const startTime = startHour * 60 + startMinute;
  
  console.log(`Damacana Debug: Cutoff ${cutoffHour}:${cutoffMinute.toString().padStart(2, '0')} (${cutoffTime}dk), Start ${startHour}:${startMinute.toString().padStart(2, '0')} (${startTime}dk)`);
  
  // Yasaklı saat aralığını kontrol et
  // Damacana için her zaman gece yarısını geçen logic kullan
  // Çünkü: cutoffHour (19) > startHour (8) her zaman
  let isInRestrictedPeriod = false;
  
  if (cutoffHour > startHour) {
    // Gece yarısı geçen durum: 19:00'dan sonra VE 08:30'dan önce
    isInRestrictedPeriod = (currentTime >= cutoffTime) || (currentTime < startTime);
    console.log(`Damacana Debug: Gece yarısı geçen aralık kontrolü - Yasaklı mı? ${isInRestrictedPeriod}`);
    console.log(`Damacana Debug: currentTime(${currentTime}) >= cutoffTime(${cutoffTime}) = ${currentTime >= cutoffTime}`);
    console.log(`Damacana Debug: currentTime(${currentTime}) < startTime(${startTime}) = ${currentTime < startTime}`);
  } else {
    // Aynı gün içinde: örneğin 08:00'dan 19:00'a kadar (normal çalışma saati)
    isInRestrictedPeriod = (currentTime < cutoffTime) || (currentTime >= startTime);
    console.log(`Damacana Debug: Normal çalışma saati kontrolü - Yasaklı mı? ${isInRestrictedPeriod}`);
  }
  
  if (isInRestrictedPeriod) {
    const cutoffTimeString = `${cutoffHour.toString().padStart(2, '0')}:${cutoffMinute.toString().padStart(2, '0')}`;
    const startTimeString = `${startHour.toString().padStart(2, '0')}:${startMinute.toString().padStart(2, '0')}`;
    
    console.log(`Damacana Debug: SİPARİŞ YASAKLI - ${cutoffTimeString} - ${startTimeString} arası`);
    return {
      isAllowed: false,
      message: DAMACANA_LIMITS.cutoffMessage
        .replace('{cutoffTime}', cutoffTimeString)
        .replace('{startTime}', startTimeString)
    };
  }
  
  console.log('Damacana Debug: SİPARİŞ İZİN VERİLDİ ✅');
  return { isAllowed: true, message: null };
};

// Damacana sipariş saatlerini formatlanmış string olarak döndürür
export const getDamacanaOrderHoursText = () => {
  const formatTime = (hour, minute) => {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  };
  
  const weekdayStart = formatTime(DAMACANA_LIMITS.startHour, DAMACANA_LIMITS.startMinute);
  const weekdayCutoff = formatTime(DAMACANA_LIMITS.cutoffHour, DAMACANA_LIMITS.cutoffMinute);
  
  if (DAMACANA_LIMITS.weekendEnabled) {
    const weekendStart = formatTime(DAMACANA_LIMITS.weekendStartHour, DAMACANA_LIMITS.weekendStartMinute);
    const weekendCutoff = formatTime(DAMACANA_LIMITS.weekendCutoffHour, DAMACANA_LIMITS.weekendCutoffMinute);
    return `Hafta içi: ${weekdayStart} - ${weekdayCutoff}, Hafta sonu: ${weekendStart} - ${weekendCutoff}`;
  }
  
  return `${weekdayStart} - ${weekdayCutoff}`;
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