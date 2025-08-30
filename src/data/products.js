// Ürün verileri
export const PRODUCTS = [
  {
    id: 1,
    name: "Fuska Su",
    price: "Seçenekleri Görün",
    image: "/images/fuska.jpeg", // Resim path'i buraya gelecek: "/images/abc-su.jpg"
    imagePlaceholder: "🍓", // Resim yüklenene kadar gösterilecek emoji
    whatsappMessage: "Merhaba Sultan Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 11,
        name: "Fuska Su 19Lt Damacana",
        price: "25 TL",
        image: "/images/f19.png",
        imagePlaceholder: "🏺",
        whatsappMessage: "Merhaba Sultan Su 19L damacana sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 81,
        name: "Fuska Su 15Lt Cam Damacana",
        price: "15 TL",
        image: "/images/f15c-new.png",
        imagePlaceholder: "🪣",
        whatsappMessage: "Merhaba Sultan Su 5L bidon sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 13,
        name: "Fuska Su 24x0.5L Şişe",
        price: "3 TL",
        image: "/images/f1204.jpeg",
        imagePlaceholder: "🍼",
        whatsappMessage: "Merhaba Sultan Su 1.5L şişe sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 14,
        name: "Fuska Su 12x1Lt Şişe",
        price: "2 TL",
        image: "/images/f121.jpeg",
        imagePlaceholder: "🥤",
        whatsappMessage: "Merhaba Sultan Su 500ml şişe sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 15,
        name: "Fuska Su 12x1.5Lt Şişe",
        price: "200 TL",
        image: "/images/f1215.jpeg",
        imagePlaceholder: "📦",
        whatsappMessage: "Merhaba Sultan Su aylık paket sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 16,
        name: "Fuska Su 24x0.33Lt Şişe",
        price: "1 TL",
        image: "/images/f2433.jpeg",
        imagePlaceholder: "🥛",
        whatsappMessage: "Merhaba Sultan Su bardak su sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 17,
        name: "Fuska Su 24x0.33Lt Cam Şişe",
        price: "5 TL",
        image: "/images/f2403c.jpeg",
        imagePlaceholder: "☕",
        whatsappMessage: "Merhaba Sultan Su sıcak içecek sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 18,
        name: "Fuska Su 4x5Lt Şişe",
        price: "8 TL",
        image: "/images/f45.jpeg",
        imagePlaceholder: "🧪",
        whatsappMessage: "Merhaba Sultan Su özel karışım sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 19,
        name: "Fuska Su 24x0.4Lt Sert Pet Şişe",
        price: "8 TL",
        image: "/images/f2404.jpeg",
        imagePlaceholder: "🧪",
        whatsappMessage: "Merhaba Sultan Su özel karışım sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 2,
    name: "Pınar su",
    price: "Seçenekleri Görün",
    image: "/images/pinar.jpeg",
    imagePlaceholder: "💧",
    whatsappMessage: "Merhaba Fuska Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 21,
        name: "Pınar Su 19Lt Damacana",
        price: "35 TL",
        image: "/images/p19d.png",
        imagePlaceholder: "🌟",
        whatsappMessage: "Merhaba Fuska Su Premium 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 91,
        name: "Pınar Su 15Lt Cam Damacana",
        price: "20 TL",
        image: "/images/p15c.png",
        imagePlaceholder: "💎",
        whatsappMessage: "Merhaba Fuska Su Premium 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 23,
        name: "Pınar Su 24x0.5L Şişe",
        price: "8 TL",
        image: "/images/p05.png",
        imagePlaceholder: "✨",
        whatsappMessage: "Merhaba Fuska Su Premium 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 24,
        name: "Pınar Su 12x1Lt Şişe",
        price: "5 TL",
        image: "/images/p1.png",
        imagePlaceholder: "🥇",
        whatsappMessage: "Merhaba Fuska Su Premium 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 25,
        name: "Pınar Su 12x1.5Lt Şişe",
        price: "280 TL",
        image: "/images/p15.png",
        imagePlaceholder: "🎁",
        whatsappMessage: "Merhaba Fuska Su Premium paket sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 26,
        name: "Pınar Su 24x0.33Lt Şişe",
        price: "3 TL",
        image: "/images/p03.png",
        imagePlaceholder: "🧊",
        whatsappMessage: "Merhaba Fuska Su Premium mini sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 27,
        name: "Pınar Su 24x0.33Lt Cam Şişe",
        price: "12 TL",
        image: "/images/p03c.jpeg",
        imagePlaceholder: "🔥",
        whatsappMessage: "Merhaba Fuska Su Premium sıcak sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 28,
        name: "Pınar Su 4x5Lt Şişe",
        price: "15 TL",
        image: "/images/p5.png",
        imagePlaceholder: "👑",
        whatsappMessage: "Merhaba Fuska Su Premium özel sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 29,
        name: "Pınar Su 24x0.4Lt Sert Pet Şişe",
        price: "15 TL",
        image: "/images/p04.png",
        imagePlaceholder: "👑",
        whatsappMessage: "Merhaba Fuska Su Premium özel sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 3,
    name: "Buzdağı Su",
    price: "Seçenekleri Görün", 
    image: "/images/buzdagi.png", // "/images/kaynak-suyu.jpg"
    imagePlaceholder: "🏔️",
    whatsappMessage: "Merhaba Pınar Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 31,
        name: "Buzdağı Su 19Lt Tek Kullanımlık Damacana",
        price: "30 TL",
        image: "/images/b19t.png",
        imagePlaceholder: "⛰️",
        whatsappMessage: "Merhaba Pınar Su Doğal 19L sipariş etmek istiyorum. Adresim: "
      },

      {
        id: 32,
        name: "Buzdağı Su 24x0.5L Şişe",
        price: "6 TL",
        image: "/images/b05.jpg",
        imagePlaceholder: "🏞️",
        whatsappMessage: "Merhaba Pınar Su Doğal 1.5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 33,
        name: "Buzdağı Su 12x1Lt Şişe",
        price: "4 TL",
        image: "/images/b1.jpeg",
        imagePlaceholder: "🗻",
        whatsappMessage: "Merhaba Pınar Su Doğal 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 34,
        name: "Buzdağı Su 12x1.5Lt Şişe",
        price: "240 TL",
        image: "/images/b15.jpg",
        imagePlaceholder: "🏔️",
        whatsappMessage: "Merhaba Pınar Su kaynak paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 35,
        name: "Buzdağı Su 24x0.33Lt Şişe",
        price: "7 TL",
        image: "/images/b03.jpg",
        imagePlaceholder: "❄️",
        whatsappMessage: "Merhaba Pınar Su soğuk sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 36,
        name: "Buzdağı Su 24x0.33Lt Cam Şişe",
        price: "9 TL",
        image: "/images/b03c.png",
        imagePlaceholder: "💠",
        whatsappMessage: "Merhaba Pınar Su mineralli sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 37,
        name: "Buzdağı Su 4x5Lt Şişe",
        price: "12 TL",
        image: "/images/b5.jpg",
        imagePlaceholder: "🌀",
        whatsappMessage: "Merhaba Pınar Su özel kaynak sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 38,
        name: "Buzdağı Su 24x0.4Lt Sert Pet Şişe",
        price: "18 TL",
        image: null,
        imagePlaceholder: "🌊",
        whatsappMessage: "Merhaba Pınar Su Doğal 5L sipariş etmek istiyorum. Adresim: "
      },
    ]
  },
  {
    id: 4,
    name: "Sultan Su",
    price: "Seçenekleri Görün",
    image: "/images/abc-su.png", // "/images/mineralli-su.jpg"
    imagePlaceholder: "👑", 
    whatsappMessage: "Merhaba Bahar Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 41,
        name: "Sultan Su 19Lt Tek Kullanımlık Damacana",
        price: "40 TL",
        image: "/images/s19t.png",
        imagePlaceholder: "💍",
        whatsappMessage: "Merhaba Bahar Su Mineralli 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 44,
      name: "Sultan Su 12x1Lt Şişe",
        price: "7 TL",
        image: "/images/s1.png",
        imagePlaceholder: "🔷",
        whatsappMessage: "Merhaba Bahar Su Mineralli 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 45,
        name: "Sultan Su 12x1.5Lt Şişe",
        price: "320 TL",
        image: "/images/s15.png",
        imagePlaceholder: "📿",
        whatsappMessage: "Merhaba Bahar Su mineral paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 46,
        name: "Sultan Su 24x0.5L Şişe",
        price: "10 TL",
        image: "/images/s05.png",
        imagePlaceholder: "💎",
        whatsappMessage: "Merhaba Bahar Su Mineralli 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 47,
        name: "Sultan Su 24x0.80Lt Sert Pet Şişe",
        price: "13 TL",
        image: "/images/s08.png",
        imagePlaceholder: "⚡",
        whatsappMessage: "Merhaba Bahar Su magnezyum sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 48,
        name: "Sultan Su 24x0.4Lt Sert Pet Şişe",
        price: "18 TL",
        image: "/images/s04.png",
        imagePlaceholder: "🧬",
        whatsappMessage: "Merhaba Bahar Su özel mineral sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 5,
    name: "Uludağ İçecek",
    price: "Seçenekleri Görün",
    image: "/images/uludag.png", // "/images/bebek-suyu.jpg"
    imagePlaceholder: "🏞️",
    whatsappMessage: "Merhaba Taşkesti Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 51,
        name: "Uludağ İçecek 24x0.4Lt Sert Pet Şişe",
        price: "45 TL",
        image: "/images/u04.png",
        imagePlaceholder: "🍼",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 19L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 52,
        name: "Uludağ İçecek 12x1Lt Pet Şişe",
        price: "28 TL",
        image: "/images/u1.jpg",
        imagePlaceholder: "👶",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 53,
        name: "Uludağ İçecek 24x0.25Lt Premium Soda",
        price: "12 TL",
        image: "/images/u02.jpg",
        imagePlaceholder: "🧸",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 54,
        name: "Uludağ İçecek 12x0.75Lt Premium Soda",
        price: "8 TL",
        image: "/images/u07.jpg",
        imagePlaceholder: "🎀",
        whatsappMessage: "Merhaba Taşkesti Bebek Suyu 500ml sipariş etmek istiyorum. Adresim: "
      }
    ]
  },
  {
    id: 6,
    name: "Erikli Su",
    price: "Seçenekleri Görün", 
    image: "/images/erikli.png", // "/images/alkalin-su.jpg"
    imagePlaceholder: "🌊",
    whatsappMessage: "Merhaba Munzur Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 62,
        name: "Erikli Su 24x0.5Lt Şişe",
        price: "30 TL",
        image: "/images/e05.jpg",
        imagePlaceholder: "🧪",
        whatsappMessage: "Merhaba Munzur Su Alkalin 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 63,
        name: "Erikli Su 24x0.33Lt Şişe",
        price: "15 TL",
        image: "/images/e03.png",
        imagePlaceholder: "⚖️",
        whatsappMessage: "Merhaba Munzur Su Alkalin 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 64,
        name: "Erikli Su 12x1Lt Şişe",
        price: "10 TL",
        image: "/images/e1.jpeg",
        imagePlaceholder: "🔬",
        whatsappMessage: "Merhaba Munzur Su Alkalin 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 65,
        name: "Erikli Su 12x1.5Lt Şişe",
        price: "400 TL",
        image: "/images/e15.jpg",
        imagePlaceholder: "📊",
        whatsappMessage: "Merhaba Munzur Su pH paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 66,
        name: "Erikli Su 4x5Lt Şişe",
        price: "18 TL",
        image: "/images/e5.jpg",
        imagePlaceholder: "🌿",
        whatsappMessage: "Merhaba Munzur Su pH 9.5 sipariş etmek istiyorum. Adresim: "
      },
    ]
  },
  {
    id: 7,
    name: "Bardak Su",
    price: "Seçenekleri Görün",
    image: "/images/bardak.png", // "/images/sporcu-suyu.jpg"
    imagePlaceholder: "🥤",
    whatsappMessage: "Merhaba Buzdağı Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 72,
        name: "Buzdağı Su 60x160mL Su",
        price: "22 TL",
        image: "/images/bbar.png",
        imagePlaceholder: "🏃",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 73,
        name: "Taşkesti Su 60x200mL Su",
        price: "8 TL",
        image: "/images/tbar.png",
        imagePlaceholder: "💪",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 74,
        name: "Pınar Su 60x200mL Su",
        price: "6 TL",
        image: "/images/pbar.png",
        imagePlaceholder: "🥤",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 75,
        name: "Hamidiye Su 60x200mL Su",
        price: "280 TL",
        image: "/images/hbar.png",
        imagePlaceholder: "🏆",
        whatsappMessage: "Merhaba Buzdağı Sporcu paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 76,
        name: "Munzur Su 60x200mL Su",
        price: "280 TL",
        image: "/images/mbar.png",
        imagePlaceholder: "🏆",
        whatsappMessage: "Merhaba Buzdağı Sporcu paketi sipariş etmek istiyorum. Adresim: "
      },
    ]
  },
    {
    id: 8,
    name: "Munzur Su",
    price: "Seçenekleri Görün",
    image: "/images/munzur.png", // "/images/sporcu-suyu.jpg"
    imagePlaceholder: "🗡️",
    whatsappMessage: "Merhaba Buzdağı Su sipariş etmek istiyorum. Adresim: ",
    subProducts: [
      {
        id: 91,
        name: "Munzur Su 19Lt Tek Kullanımlık Damacana",
        price: "22 TL",
        image: "/images/m19t.png",
        imagePlaceholder: "🏃",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 5L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 82,
        name: "Munzur Su 12x1.5Lt Şişe",
        price: "8 TL",
        image: "/images/m15.jpg",
        imagePlaceholder: "💪",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 1L sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 83,
        name: "Munzur Su 24x0.5Lt Şişe",
        price: "6 TL",
        image: "/images/m2405.jpg",
        imagePlaceholder: "🥤",
        whatsappMessage: "Merhaba Buzdağı Sporcu Suyu 500ml sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 84,
        name: "Munzur Su 4x5Lt Şişe",
        price: "280 TL",
        image: "/images/m45.jpg",
        imagePlaceholder: "🏆",
        whatsappMessage: "Merhaba Buzdağı Sporcu paketi sipariş etmek istiyorum. Adresim: "
      },
      {
        id: 85,
        name: "Munzur Su 24x0.33Lt Şişe",
        price: "280 TL",
        image: "/images/m2403.jpg",
        imagePlaceholder: "🏆",
        whatsappMessage: "Merhaba Buzdağı Sporcu paketi sipariş etmek istiyorum. Adresim: "
      },
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