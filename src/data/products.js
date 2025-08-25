// Ürün verileri
export const PRODUCTS = [
  {
    id: 1,
    name: "Fuska Su",
    price: "Seçenekleri Görün",
    image: null, // Resim path'i buraya gelecek: "/images/abc-su.jpg"
    imagePlaceholder: "💧", // Resim yüklenene kadar gösterilecek emoji
    whatsappMessage: "Merhaba Sultan Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 11,
        name: "Fuska Su 15L Cam Damacana",
        price: "25 TL",
        image: null,
        imagePlaceholder: "🏺",
        whatsappMessage: "Merhaba Sultan Su 19L damacana sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 12,
        name: "Fuska Su 5L Bidon",
        price: "15 TL",
        image: null,
        imagePlaceholder: "🪣",
        whatsappMessage: "Merhaba Sultan Su 5L bidon sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 13,
        name: "Fuska Su 1.5L Şişe",
        price: "3 TL",
        image: null,
        imagePlaceholder: "🍼",
        whatsappMessage: "Merhaba Sultan Su 1.5L şişe sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 14,
        name: "Fuska Su 0.5L Şişe",
        price: "2 TL",
        image: null,
        imagePlaceholder: "🥤",
        whatsappMessage: "Merhaba Sultan Su 500ml şişe sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 15,
        name: "Fuska Su 0.75L Cam Şişe",
        price: "200 TL",
        image: null,
        imagePlaceholder: "📦",
        whatsappMessage: "Merhaba Sultan Su aylık paket sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 16,
        name: "Fuska Su 0.33L CamŞişe",
        price: "1 TL",
        image: null,
        imagePlaceholder: "🥛",
        whatsappMessage: "Merhaba Sultan Su bardak su sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 17,
        name: "Fuska Su 0.33L Şişe",
        price: "5 TL",
        image: null,
        imagePlaceholder: "☕",
        whatsappMessage: "Merhaba Sultan Su sıcak içecek sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 18,
        name: "Fuska Su 1L Şişe",
        price: "8 TL",
        image: null,
        imagePlaceholder: "🧪",
        whatsappMessage: "Merhaba Sultan Su özel karışım sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 2,
    name: "premium su",
    price: "Seçenekleri Görün",
    image: null, // "/images/premium-su.jpg"
    imagePlaceholder: "⭐",
    whatsappMessage: "Merhaba Fuska Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 21,
        name: "Pınar Su 15L Cam Damacana",
        price: "35 TL",
        image: null,
        imagePlaceholder: "🌟",
        whatsappMessage: "Merhaba Fuska Su Premium 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 22,
        name: "Pınar Su 5L Bidon",
        price: "20 TL",
        image: null,
        imagePlaceholder: "💎",
        whatsappMessage: "Merhaba Fuska Su Premium 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 23,
        name: "Pınar Su 1.5L Şişe",
        price: "8 TL",
        image: null,
        imagePlaceholder: "✨",
        whatsappMessage: "Merhaba Fuska Su Premium 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 24,
        name: "Pınar Su 0.5L Şişe",
        price: "5 TL",
        image: null,
        imagePlaceholder: "🥇",
        whatsappMessage: "Merhaba Fuska Su Premium 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 25,
        name: "Pınar Su 0.75L Cam Şişe",
        price: "280 TL",
        image: null,
        imagePlaceholder: "🎁",
        whatsappMessage: "Merhaba Fuska Su Premium paket sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 26,
        name: "Pınar Su 0.33L CamŞişe",
        price: "3 TL",
        image: null,
        imagePlaceholder: "🧊",
        whatsappMessage: "Merhaba Fuska Su Premium mini sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 27,
        name: "Pınar Su 0.33L Şişe",
        price: "12 TL",
        image: null,
        imagePlaceholder: "🔥",
        whatsappMessage: "Merhaba Fuska Su Premium sıcak sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 28,
        name: "Pınar Su 1L Şişe",
        price: "15 TL",
        image: null,
        imagePlaceholder: "👑",
        whatsappMessage: "Merhaba Fuska Su Premium özel sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 3,
    name: "kaynak suyu",
    price: "Seçenekleri Görün", 
    image: null, // "/images/kaynak-suyu.jpg"
    imagePlaceholder: "🏔️",
    whatsappMessage: "Merhaba Pınar Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 31,
        name: "Munzur Su Damacana",
        price: "30 TL",
        image: null,
        imagePlaceholder: "⛰️",
        whatsappMessage: "Merhaba Pınar Su Doğal 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 32,
        name: "Munzur Su Bidon",
        price: "18 TL",
        image: null,
        imagePlaceholder: "🌊",
        whatsappMessage: "Merhaba Pınar Su Doğal 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 33,
        name: "Munzur Su 1.5L Şişe",
        price: "6 TL",
        image: null,
        imagePlaceholder: "🏞️",
        whatsappMessage: "Merhaba Pınar Su Doğal 1.5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 34,
        name: "Munzur Su 0.5L Şişe",
        price: "4 TL",
        image: null,
        imagePlaceholder: "🗻",
        whatsappMessage: "Merhaba Pınar Su Doğal 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 35,
        name: "Munzur Su 0.75L Cam Şişe",
        price: "240 TL",
        image: null,
        imagePlaceholder: "🏔️",
        whatsappMessage: "Merhaba Pınar Su kaynak paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 36,
        name: "Munzur Su 0.33L CamŞişe",
        price: "7 TL",
        image: null,
        imagePlaceholder: "❄️",
        whatsappMessage: "Merhaba Pınar Su soğuk sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 37,
        name: "Munzur Su 0.33L Şişe",
        price: "9 TL",
        image: null,
        imagePlaceholder: "💠",
        whatsappMessage: "Merhaba Pınar Su mineralli sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 38,
        name: "Munzur Su 1L Şişe",
        price: "12 TL",
        image: null,
        imagePlaceholder: "🌀",
        whatsappMessage: "Merhaba Pınar Su özel kaynak sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 4,
    name: "mineralli su",
    price: "Seçenekleri Görün",
    image: null, // "/images/mineralli-su.jpg"
    imagePlaceholder: "💎", 
    whatsappMessage: "Merhaba Bahar Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 41,
        name: "Taşkesti Su 15L Cam Damacana",
        price: "40 TL",
        image: null,
        imagePlaceholder: "💍",
        whatsappMessage: "Merhaba Bahar Su Mineralli 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 42,
        name: "Taşkesti Su 5L Bidon",
        price: "25 TL",
        image: null,
        imagePlaceholder: "💠",
        whatsappMessage: "Merhaba Bahar Su Mineralli 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 43,
        name: "Taşkesti Su 1.5L Şişe",
        price: "10 TL",
        image: null,
        imagePlaceholder: "💎",
        whatsappMessage: "Merhaba Bahar Su Mineralli 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 44,
      name: "Taşkesti Su 0.5L Şişe",
        price: "7 TL",
        image: null,
        imagePlaceholder: "🔷",
        whatsappMessage: "Merhaba Bahar Su Mineralli 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 45,
        name: "Taşkesti Su 0.75L Cam Şişe",
        price: "320 TL",
        image: null,
        imagePlaceholder: "📿",
        whatsappMessage: "Merhaba Bahar Su mineral paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 46,
        name: "Taşkesti Su 0.33L CamŞişe",
        price: "12 TL",
        image: null,
        imagePlaceholder: "🦴",
        whatsappMessage: "Merhaba Bahar Su kalsiyum sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 47,
        name: "Taşkesti Su 0.33L Şişe",
        price: "13 TL",
        image: null,
        imagePlaceholder: "⚡",
        whatsappMessage: "Merhaba Bahar Su magnezyum sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 48,
        name: "Taşkesti Su 1L Şişe",
        price: "18 TL",
        image: null,
        imagePlaceholder: "🧬",
        whatsappMessage: "Merhaba Bahar Su özel mineral sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 5,
    name: "bebek suyu",
    price: "Seçenekleri Görün",
    image: null, // "/images/bebek-suyu.jpg"
    imagePlaceholder: "👶",
    whatsappMessage: "Merhaba Taşkesti Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 51,
        name: "Bahar Su 15L Damacana",
        price: "45 TL",
        image: null,
        imagePlaceholder: "🍼",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 52,
        name: "Bahar Su 5L Bidon",
        price: "28 TL",
        image: null,
        imagePlaceholder: "👶",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 53,
        name: "Bahar Su 1.5L Şişe",
        price: "12 TL",
        image: null,
        imagePlaceholder: "🧸",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 54,
        name: "Bahar Su 0.5L Şişe",
        price: "8 TL",
        image: null,
        imagePlaceholder: "🎀",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 55,
        name: "Bahar Su 0.75L Cam Şişe",
        price: "360 TL",
        image: null,
        imagePlaceholder: "👼",
        whatsappMessage: "Merhaba Taşkesti Bebek paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 56,
        name: "Bahar Su 0.33L CamŞişe",
        price: "5 TL",
        image: null,
        imagePlaceholder: "🐣",
        whatsappMessage: "Merhaba Taşkesti Bebek mini sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 57,
        name: "Bahar Su 0.33L Şişe",
        price: "15 TL",
        image: null,
        imagePlaceholder: "💝",
        whatsappMessage: "Merhaba Taşkesti Bebek özel sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 58,
        name: "Bahar Su 1L Şişe",
        price: "20 TL",
        image: null,
        imagePlaceholder: "🧼",
        whatsappMessage: "Merhaba Taşkesti Bebek steril sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 6,
    name: "alkalin su",
    price: "Seçenekleri Görün", 
    image: null, // "/images/alkalin-su.jpg"
    imagePlaceholder: "⚖️",
    whatsappMessage: "Merhaba Munzur Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 61,
        name: "Buzdağı Su 15L Damacana",
        price: "50 TL",
        image: null,
        imagePlaceholder: "⚗️",
        whatsappMessage: "Merhaba Munzur Su Alkalin 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 62,
        name: "Buzdağı Su 5L Bidon",
        price: "30 TL",
        image: null,
        imagePlaceholder: "🧪",
        whatsappMessage: "Merhaba Munzur Su Alkalin 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 63,
        name: "Buzdağı Su 1.5L Şişe",
        price: "15 TL",
        image: null,
        imagePlaceholder: "⚖️",
        whatsappMessage: "Merhaba Munzur Su Alkalin 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 64,
        name: "Buzdağı Su 0.5L Şişe",
        price: "10 TL",
        image: null,
        imagePlaceholder: "🔬",
        whatsappMessage: "Merhaba Munzur Su Alkalin 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 65,
        name: "Buzdağı Su 0.75L Cam Şişe",
        price: "400 TL",
        image: null,
        imagePlaceholder: "📊",
        whatsappMessage: "Merhaba Munzur Su pH paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 66,
        name: "Buzdağı Su 0.33L CamŞişe",
        price: "18 TL",
        image: null,
        imagePlaceholder: "🌿",
        whatsappMessage: "Merhaba Munzur Su pH 9.5 sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 67,
        name: "Buzdağı Su 0.33L Şişe",
        price: "22 TL",
        image: null,
        imagePlaceholder: "🍀",
        whatsappMessage: "Merhaba Munzur Su pH 10 sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 68,
        name: "Buzdağı Su 1L Şişe",
        price: "25 TL",
        image: null,
        imagePlaceholder: "🌱",
        whatsappMessage: "Merhaba Munzur Su özel pH sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 7,
    name: "sporcu suyu",
    price: "Seçenekleri Görün",
    image: null, // "/images/sporcu-suyu.jpg"
    imagePlaceholder: "💪",
    whatsappMessage: "Merhaba Buzdağı Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 71,
        name: "Bahar Su 15L Damacana",
        price: "35 TL",
        image: null,
        imagePlaceholder: "🏋️",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 72,
        name: "Bahar Su 5L Bidon",
        price: "22 TL",
        image: null,
        imagePlaceholder: "🏃",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 73,
        name: "Bahar Su 1.5L Şişe",
        price: "8 TL",
        image: null,
        imagePlaceholder: "💪",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 74,
        name: "Bahar Su 0.5L Şişe",
        price: "6 TL",
        image: null,
        imagePlaceholder: "🥤",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 75,
        name: "Bahar Su 0.75L Cam Şişe",
        price: "280 TL",
        image: null,
        imagePlaceholder: "🏆",
        whatsappMessage: "Merhaba Buzdağı Sporcu paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 76,
        name: "Bahar Su 0.33L CamŞişe",
        price: "12 TL",
        image: null,
        imagePlaceholder: "⚡",
        whatsappMessage: "Merhaba Buzdağı Elektrolit sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 77,
        name: "Bahar Su 0.33L Şişe",
        price: "15 TL",
        image: null,
        imagePlaceholder: "🥛",
        whatsappMessage: "Merhaba Buzdağı Protein Su sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 78,
        name: "Bahar Su 1L Şişe",
        price: "18 TL",
        image: null,
        imagePlaceholder: "🎯",
        whatsappMessage: "Merhaba Buzdağı Özel Sporcu sipariş etmek istiyorum. Adresim: "
      }
    ]
  }
];

// Resim import helper fonksiyonu
export const getProductImagePath = (imageName) => {
  // Resim dosya adını normalize et
  const normalizedName = imageName
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
  
  return `/images/${normalizedName}.jpg`;
};

// Gelecekte kullanım için: resim import sistemi
// import abcSuImage from '../assets/images/abc-su.jpg';
// import premiumSuImage from '../assets/images/premium-su.jpg';

/*
Resim ekleme örneği:
1. Resmi src/assets/images/ klasörüne koyun
2. Ürün objesinde image field'ını güncelleyin:
   image: "/images/abc-su.jpg"
*/ 