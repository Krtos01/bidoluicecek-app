// Sosyal Medya Konfigürasyonu
export const SOCIAL_MEDIA_LINKS = [
  {
    id: 1,
    name: "Twitter/X",
    url: "https://x.com/fkeremv",
    icon: null, // Resim path'i buraya gelecek: "/images/twitter-icon.png"
    iconPlaceholder: "🐦", // Resim yüklenene kadar gösterilecek emoji
    target: "_blank" // Yeni sekmede açılsın
  },
  {
    id: 2,
    name: "Instagram",
    url: "https://x.com/fkeremv", // Şimdilik aynı link, sonra değiştirilecek
    icon: null, // "/images/instagram-icon.png"
    iconPlaceholder: "📷",
    target: "_blank"
  }
];

// Sosyal medya link'i açma fonksiyonu
export const openSocialMediaLink = (url, target = "_blank") => {
  window.open(url, target, 'noopener,noreferrer');
}; 