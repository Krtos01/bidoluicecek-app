// Dil Konfigürasyonu
export const LANGUAGES = {
  tr: {
    code: 'tr',
    name: 'Türkçe',
    flag: '🇹🇷',
    translations: {
      // Ürün sayfası
      seeOptions: "Seçenekleri Görün",
      addToCart: "Sepete Ekle",
      productDescription: "Ürün seçeneklerini inceleyin ve sipariş verin.",
      clickToOrder: "Ürüne tıklayarak WhatsApp ile sipariş verebilirsiniz",
      
      // Damacana mesajları
      damacanaRestricted: "Damacana siparişleri {cutoffTime}'dan sonra alınmamaktadır",
      
      // Sipariş butonu
      orderButton: "Sipariş Ver",
      orderUnavailable: "Servis Saatleri Dışındadır",
      
      // Minimum tutar
      minimumOrder: "Minimum sepet tutarı 40 TL'dir",
      currentCart: "Şu anki sepet: {amount} TL",
      
      // Hoş geldin mesajı
      welcomeMessage: "Lütfen ilk siparişinizde adresinizi eklemeyi unutmayın, Teşekkürler.",
      understood: "Anladım",
      
      // Scroll indicator
      scrollDown: "Kaydır"
    }
  },
  ar: {
    code: 'ar',
    name: 'العربية',
    flag: '🇸🇦',
    translations: {
      // Ürün sayfası
      seeOptions: "انظر الخيارات",
      addToCart: "أضف إلى السلة",
      productDescription: "تعرف على خيارات المنتج واطلبه.",
      clickToOrder: "يمكنكم الطلب عبر الواتساب بالضغط على المنتج.",
      
      // Damacana mesajları
      damacanaRestricted: "لا يتم قبول طلبات Demijohn بعد {cutoffTime}",
      
      // Sipariş butonu
      orderButton: "اطلب",
      orderUnavailable: "خارج ساعات الخدمة",
      
      // Minimum tutar
      minimumOrder: "الحد الأدنى للسلة 40 ليرة تركية",
      currentCart: "السلة الحالية: {amount} ليرة تركية",
      
      // Hoş geldin mesajı
      welcomeMessage: "يرجى عدم نسيان إضافة عنوانكم في طلبكم الأول، شكراً.",
      understood: "فهمت",
      
      // Scroll indicator
      scrollDown: "تمرر"
    }
  }
};

// Varsayılan dil
export const DEFAULT_LANGUAGE = 'tr';

// Mevcut dil state'i
let currentLanguage = DEFAULT_LANGUAGE;

// Dil değiştirme fonksiyonu
export const toggleLanguage = () => {
  currentLanguage = currentLanguage === 'tr' ? 'ar' : 'tr';
  
  // LocalStorage'a kaydet
  if (typeof window !== 'undefined') {
    localStorage.setItem('suapp-language', currentLanguage);
  }
  
  return currentLanguage;
};

// Mevcut dili alma
export const getCurrentLanguage = () => {
  // İlk yüklemede localStorage'dan kontrol et
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('suapp-language');
    if (saved && LANGUAGES[saved]) {
      currentLanguage = saved;
    }
  }
  return currentLanguage;
};

// Çeviri alma fonksiyonu
export const t = (key, params = {}) => {
  const lang = getCurrentLanguage();
  const translation = LANGUAGES[lang]?.translations[key] || LANGUAGES[DEFAULT_LANGUAGE]?.translations[key] || key;
  
  // Parametreleri replace et
  let result = translation;
  Object.keys(params).forEach(param => {
    result = result.replace(`{${param}}`, params[param]);
  });
  
  return result;
};

// Mevcut dil bilgisini alma
export const getCurrentLanguageInfo = () => {
  const lang = getCurrentLanguage();
  return LANGUAGES[lang];
}; 