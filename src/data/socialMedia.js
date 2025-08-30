// Sosyal Medya Konfigürasyonu
export const SOCIAL_MEDIA_LINKS = [
  {
    id: 1,
    name: "Tanıtım Videosu",
    type: "video", // Video tipi
    videoUrl: null, // Video path'i buraya gelecek: "/videos/tanitim-video.mp4"
    icon: null, // Resim path'i buraya gelecek: "/images/video-icon.png"
    iconPlaceholder: "🎥", // Video ikonu
    target: "modal" // Modal'da açılacak
  },
  {
    id: 2,
    name: "Instagram",
    type: "link", // Link tipi
    url: "https://x.com/fkeremv",
    icon: null, // "/images/instagram-icon.png"
    iconPlaceholder: "📷",
    target: "_blank"
  },
  {
    id: 3,
    name: "Dil Değiştir",
    type: "language", // Dil değiştirme tipi
    url: null,
    icon: null, // "/images/language-icon.png"
    iconPlaceholder: "🇹🇷", // Türkçe bayrağı (varsayılan)
    target: "toggle"
  }
];

// Sosyal medya/video/dil açma fonksiyonu
export const handleSocialMediaClick = (socialMedia, onVideoOpen = null, onLanguageToggle = null) => {
  if (socialMedia.type === "video") {
    // Video modal'ı aç
    if (onVideoOpen && socialMedia.videoUrl) {
      onVideoOpen(socialMedia.videoUrl, socialMedia.name);
    } else {
      // Video henüz eklenmemiş
      alert("Tanıtım videosu yakında eklenecek!");
    }
  } else if (socialMedia.type === "link") {
    // Normal link aç
    window.open(socialMedia.url, socialMedia.target, 'noopener,noreferrer');
  } else if (socialMedia.type === "language") {
    // Dil değiştirme
    if (onLanguageToggle) {
      onLanguageToggle();
    }
  }
}; 