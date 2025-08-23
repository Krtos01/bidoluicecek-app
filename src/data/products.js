// Ürün verileri
export const PRODUCTS = [
  {
    id: 1,
    name: "Sultan Su 19Lt",
    price: "145 TL",
    image: "/images/abc-su.png", // Resim path'i buraya gelecek: "/images/abc-su.jpg"
    imagePlaceholder: "💧", // Resim yüklenene kadar gösterilecek emoji
    whatsappMessage: "Merhaba Sultan Su sipariş etmek istiyorum. Adresim: "
  },
  {
    id: 2,
    name: "premium su",
    price: "35 TL",
    image: null, // "/images/premium-su.jpg"
    imagePlaceholder: "⭐",
    whatsappMessage: "Merhaba Fuska Su sipariş etmek istiyorum. Adresim: "
  },
  {
    id: 3,
    name: "kaynak suyu",
    price: "30 TL", 
    image: null, // "/images/kaynak-suyu.jpg"
    imagePlaceholder: "🏔️",
    whatsappMessage: "Merhaba Pınar Su sipariş etmek istiyorum. Adresim: "
  },
  {
    id: 4,
    name: "mineralli su",
    price: "40 TL",
    image: null, // "/images/mineralli-su.jpg"
    imagePlaceholder: "💎", 
    whatsappMessage: "Merhaba Bahar Su sipariş etmek istiyorum. Adresim: "
  },
  {
    id: 5,
    name: "bebek suyu",
    price: "45 TL",
    image: null, // "/images/bebek-suyu.jpg"
    imagePlaceholder: "👶",
    whatsappMessage: "Merhaba Taşkesti Su sipariş etmek istiyorum. Adresim: "
  },
  {
    id: 6,
    name: "alkalin su",
    price: "50 TL", 
    image: null, // "/images/alkalin-su.jpg"
    imagePlaceholder: "⚖️",
    whatsappMessage: "Merhaba Munzur Su sipariş etmek istiyorum. Adresim: "
  },
  {
    id: 7,
    name: "sporcu suyu",
    price: "35 TL",
    image: null, // "/images/sporcu-suyu.jpg"
    imagePlaceholder: "💪",
    whatsappMessage: "Merhaba Buzdağı Su sipariş etmek istiyorum. Adresim: "
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