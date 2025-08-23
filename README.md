# SU APP - WhatsApp Entegrasyonlu Su Satış Uygulaması

Modern ve responsive bir su satış uygulaması. Her ürün için özelleştirilmiş WhatsApp mesajlaşma sistemi ile donatılmıştır.

## 🚀 Özellikler

- **Modern UI/UX**: Gradient arkaplan, smooth animasyonlar
- **WhatsApp Entegrasyonu**: Her ürün için özelleştirilmiş mesajlar
- **Responsive Tasarım**: Mobil ve desktop uyumlu
- **Smooth Scrolling**: Kaydırma indikatörleri ve animasyonlar
- **Production Ready**: Error handling, analytics, loading states
- **Tailwind CSS**: Modern stil sistemi

## 📱 WhatsApp Entegrasyonu

### Konfigürasyon
`src/config/whatsapp.js` dosyasından ayarlanabilir:

```javascript
export const WHATSAPP_CONFIG = {
  phoneNumber: "905551234567", // Telefon numaranızı buraya yazın
  defaultMessage: "Merhaba! {productName} hakkında bilgi almak istiyorum.",
  productMessages: {
    "abc su": "Özel mesaj buraya...",
    // Daha fazla ürün eklenebilir
  }
};
```

### Ürün Yönetimi
`src/data/products.js` dosyasından ürünler yönetilebilir:

```javascript
export const PRODUCTS = [
  {
    id: 1,
    name: "abc su",
    price: "xyz TL",
    image: "📷",
    whatsappMessage: "Özelleştirilmiş mesaj..."
  }
  // Daha fazla ürün eklenebilir
];
```

## 🛠️ Kurulum

1. **Dependencies kurulumu:**
```bash
npm install
```

2. **Development server:**
```bash
npm start
```

3. **Production build:**
```bash
npm run build
```

## 📂 Proje Yapısı

```
src/
├── components/          # React componentleri
├── config/             # Konfigürasyon dosyaları
│   └── whatsapp.js     # WhatsApp ayarları
├── data/               # Veri dosyaları
│   └── products.js     # Ürün verileri
├── utils/              # Yardımcı fonksiyonlar
│   └── analytics.js    # Analytics ve tracking
├── App.js              # Ana component
├── App.css             # Custom CSS stilleri
└── index.css           # Tailwind CSS imports
```

## 🎨 Özelleştirme

### Telefon Numarası Değiştirme
`src/config/whatsapp.js` dosyasında `phoneNumber` değerini güncelleyin:
```javascript
phoneNumber: "905551234567" // Kendi numaranız
```

### Mesaj Şablonları
Her ürün için farklı mesaj eklemek için `products.js` dosyasında `whatsappMessage` alanını düzenleyin.

### Renk Teması
- Ana arkaplan: `src/App.css` → `body` gradient'i
- Header renkleri: `.header` class'ı
- Buton renkleri: Tailwind class'ları ile

### Yeni Ürün Ekleme
`src/data/products.js` dosyasına yeni ürün objesi ekleyin:
```javascript
{
  id: 8,
  name: "yeni su",
  price: "xyz TL",
  image: "📷",
  whatsappMessage: "Bu ürün hakkında bilgi almak istiyorum."
}
```

## 📈 Analytics

Uygulama Google Analytics desteği ile gelir. `src/utils/analytics.js` dosyasından:
- WhatsApp tıklama takibi
- Error tracking
- Sayfa görüntüleme takibi

## 🔧 Production Hazırlık

1. **Telefon numarasını ayarlayın**
2. **Ürün verilerini güncelleyin**
3. **Analytics kodlarını ekleyin**
4. **Domain'e özel ayarlar yapın**

## 🌐 Browser Desteği

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📱 Mobil Uyumluluk

- iOS Safari
- Android Chrome
- Responsive tasarım
- Touch-friendly UI

## 🤝 Katkı

1. Fork edin
2. Feature branch oluşturun
3. Commit edin
4. Push edin
5. Pull request açın

## 📄 Lisans

MIT Lisansı ile lisanslanmıştır.

---

**Not**: WhatsApp Business API kullanımı için WhatsApp'ın kullanım şartlarını inceleyin.
