# Su App - React E-commerce Application

Modern ve responsive bir su sipariş uygulaması. React ile geliştirilmiş, sepet sistemi ve servis saatleri özelliklerine sahiptir.

## 🚀 Özellikler

- **Responsive Design**: Mobil-first yaklaşımla tasarlanmış
- **Sepet Sistemi**: Ürünleri sepete ekleme, miktar ayarlama
- **Modal Menü**: Ana ürünler için alt kategoriler
- **WhatsApp Entegrasyonu**: Direkt WhatsApp üzerinden sipariş
- **Servis Saatleri**: Belirli saatlerde sipariş alma
- **İlk Ziyaret Mesajı**: localStorage ile takip edilen karşılama
- **Scroll İndikatörleri**: Sayfa kaydırma yönlendirmesi

## 📦 Kurulum

```bash
# Repoyu klonlayın
git clone [repo-url]

# Proje dizinine gidin
cd suapp

# Bağımlılıkları yükleyin
npm install

# Geliştirme sunucusunu başlatın
npm start
```

## ⏰ Servis Saatleri Konfigürasyonu

Uygulamanın servis saatleri `src/config/serviceHours.js` dosyasından yönetilir.

## 💰 Minimum Sipariş Tutarı Konfigürasyonu

Uygulamanın minimum sipariş tutarı `src/config/orderLimits.js` dosyasından yönetilir.

## 🏺 Damacana Sipariş Saat Sınırlaması

Damacana ürünlerinin sipariş saatleri `src/config/damacanaLimits.js` dosyasından yönetilir.

### Temel Ayarlar

```javascript
export const SERVICE_HOURS = {
  // Servis başlangıç saati (24 saat formatında)
  startHour: 9,
  startMinute: 0,
  
  // Servis bitiş saati (24 saat formatında)
  endHour: 22,
  endMinute: 0,
  
  // Hafta içi servis (Pazartesi-Cuma)
  weekdaysEnabled: true,
  
  // Hafta sonu servis (Cumartesi-Pazar)
  weekendsEnabled: true,
  
  // Özel kapalı günler
  closedDates: [
    '2024-01-01', // Yılbaşı
    '2024-12-25', // Noel
  ],
  
  // Test modu (geliştirme için)
  testMode: false
};
```

### Servis Saatleri Nasıl Çalışır?

1. **Otomatik Kontrol**: Sistem her dakika servis durumunu kontrol eder
2. **Sipariş Butonu**: Servis saatleri dışında gri olur ve 🚫 emojisi gösterir
3. **Gerçek Zamanlı**: Sayfa yenilenmeden otomatik güncellenir
4. **Esnek Konfigürasyon**: Saat, gün ve özel tarih ayarları

### Yaygın Konfigürasyonlar

#### 1. Sadece Hafta İçi Çalışma (9:00-18:00)
```javascript
export const SERVICE_HOURS = {
  startHour: 9,
  startMinute: 0,
  endHour: 18,
  endMinute: 0,
  weekdaysEnabled: true,
  weekendsEnabled: false,
  closedDates: [],
  testMode: false
};
```

#### 2. 24/7 Servis
```javascript
export const SERVICE_HOURS = {
  startHour: 0,
  startMinute: 0,
  endHour: 23,
  endMinute: 59,
  weekdaysEnabled: true,
  weekendsEnabled: true,
  closedDates: [],
  testMode: false
};
```

#### 3. Test Modu (Her Zaman Açık)
```javascript
export const SERVICE_HOURS = {
  // ... diğer ayarlar
  testMode: true // Bu ayar diğer tüm kontrolleri devre dışı bırakır
};
```

### Özel Tarihler

Belirli günlerde servisi kapatmak için `closedDates` dizisini kullanın:

```javascript
closedDates: [
  '2024-01-01', // Yılbaşı
  '2024-04-23', // 23 Nisan
  '2024-05-01', // İşçi Bayramı
  '2024-05-19', // 19 Mayıs
  '2024-07-15', // Demokrasi Bayramı
  '2024-08-30', // Zafer Bayramı
  '2024-10-29', // Cumhuriyet Bayramı
]
```

### Minimum Sipariş Tutarı Ayarları

`src/config/orderLimits.js` dosyasından minimum sipariş tutarını ayarlayabilirsiniz:

```javascript
export const ORDER_LIMITS = {
  // Minimum sipariş tutarı (TL)
  minimumOrderAmount: 40,
  
  // Minimum tutar kontrolü aktif mi?
  minimumOrderEnabled: true,
  
  // Minimum tutara ulaşmadığında gösterilecek mesaj
  minimumOrderMessage: "Minimum sepet tutarı {amount} TL'dir",
  
  // Maksimum sipariş tutarı (isteğe bağlı - null = sınır yok)
  maximumOrderAmount: null,
  
  // Maksimum tutar aşıldığında gösterilecek mesaj
  maximumOrderMessage: "Maksimum sipariş tutarı {amount} TL'dir"
};
```

#### Minimum Tutarı Değiştirme

```javascript
// 50 TL minimum yapmak için
export const ORDER_LIMITS = {
  minimumOrderAmount: 50,
  minimumOrderEnabled: true,
  // ...
};

// Minimum tutarı tamamen kapatmak için
export const ORDER_LIMITS = {
  minimumOrderEnabled: false,
  // ...
};
```

#### Maksimum Tutar Eklemek

```javascript
// 500 TL maksimum sipariş için
export const ORDER_LIMITS = {
  minimumOrderAmount: 40,
  maximumOrderAmount: 500,
  // ...
};
```

### Damacana Saat Sınırı Ayarları

`src/config/damacanaLimits.js` dosyasından damacana sipariş saatlerini ayarlayabilirsiniz:

```javascript
export const DAMACANA_LIMITS = {
  // Damacana siparişlerinin kabul edildiği son saat (24 saat formatında)
  cutoffHour: 19,
  cutoffMinute: 0,
  
  // Damacana siparişlerinin kabul edilmeye başladığı saat (ertesi gün)
  startHour: 13,
  startMinute: 0,
  
  // Damacana saat sınırı aktif mi?
  enabled: true,
  
  // Saat sınırı aşıldığında gösterilecek mesaj
  cutoffMessage: "Damacana siparişleri saat {cutoffTime}'dan sonra ve {startTime}'a kadar alınmamaktadır",
  
  // Test modu (true olursa saat sınırı devre dışı)
  testMode: false,
  
  // Damacana ürünlerini tanımlayan ID pattern'i (1 ile bitenler: 11, 21, 31...)
  damacanaIdPattern: /1$/,
  
  // Hafta sonu farklı saat (isteğe bağlı)
  weekendCutoffHour: 18, // Hafta sonu 1 saat erken
  weekendCutoffMinute: 0,
  weekendStartHour: 13, // Hafta sonu başlangıç saati
  weekendStartMinute: 0,
  weekendEnabled: false // false olursa hafta sonu aynı saat
};
```

#### Damacana Saatlerini Değiştirme

```javascript
// 20:00'a kadar damacana siparişi için
export const DAMACANA_LIMITS = {
  cutoffHour: 20,
  cutoffMinute: 0,
  enabled: true
};

// Damacana saat sınırını kapatmak için
export const DAMACANA_LIMITS = {
  enabled: false
};

// Test modunda (saat sınırı yok)
export const DAMACANA_LIMITS = {
  testMode: true
};
```

#### Hafta Sonu Farklı Saat

```javascript
// Hafta içi 19:00, hafta sonu 18:00
export const DAMACANA_LIMITS = {
  cutoffHour: 19,        // Hafta içi
  weekendCutoffHour: 18, // Hafta sonu
  weekendEnabled: true
};

// Hafta sonu aynı saat
export const DAMACANA_LIMITS = {
  weekendEnabled: false // Hafta sonu da 19:00
};
```

### Damacana Saat Sınırı Nasıl Çalışır?

1. **ID kontrolü**: 1 ile biten ürünler (11, 21, 31...) damacana olarak tanınır
2. **Sipariş saatleri**: 13:00 - 19:00 arası (gece yarısını geçen kısıtlama)
3. **19:00'dan sonra ve 13:00'a kadar**: 
   - Damacana kartları gri olur ve tıklanamaz
   - "Damacana siparişleri saat 19:00'dan sonra ve 13:00'a kadar alınmamaktadır" mesajı
   - Sepette damacana varsa sipariş butonu gri olur
   - **GECEYARISINDAN SONRA DA** sınırlama devam eder
4. **13:00'dan 19:00'a kadar**: Normal sipariş, kartlar tıklanabilir
5. **Diğer ürünler**: Saat sınırından etkilenmez

#### ⚠️ Önemli Not
- **Gece yarısı geçişi**: Sistem saat 19:00'dan sonra başlayan kısıtlamayı ertesi günün 13:00'ına kadar sürdürür
- **Sürekli denetim**: Sayfa yenilenmeden gerçek zamanlı kontrol yapar

### Minimum Tutar Nasıl Çalışır?

1. **Sepet tutarı kontrol edilir**: Her ürün ekleme/çıkarma işleminde
2. **40 TL altındaysa**: Sipariş butonu gri olur ve "Minimum sepet tutarı 40 TL'dir" yazar
3. **Alt bilgi gösterilir**: "Şu anki sepet: 25.00 TL" 
4. **40 TL ve üstündeyse**: Normal yeşil sipariş butonu görünür

### API Fonksiyonları

#### `isServiceOpen()`
Şu anki servis durumunu kontrol eder.
```javascript
import { isServiceOpen } from './config/serviceHours';
const isOpen = isServiceOpen(); // true/false
```

#### `getServiceHoursText()`
Servis saatlerini formatlanmış string olarak döndürür.
```javascript
import { getServiceHoursText } from './config/serviceHours';
const hours = getServiceHoursText(); // "09:00 - 22:00"
```

#### `validateOrderAmount(totalPrice)`
Sipariş tutarının geçerli olup olmadığını kontrol eder.
```javascript
import { validateOrderAmount } from './config/orderLimits';
const result = validateOrderAmount(35); 
// { isValid: false, message: "Minimum sepet tutarı 40 TL'dir" }
```

#### `getNextServiceTime()`
Bir sonraki açılış zamanını hesaplar.
```javascript
import { getNextServiceTime } from './config/serviceHours';
const nextOpen = getNextServiceTime(); // Date objesi
```

## 🛍️ Ürün Yönetimi

Ürünler `src/data/products.js` dosyasında tanımlanır:

```javascript
export const PRODUCTS = [
  {
    id: 1,
    name: "Ana Ürün",
    price: "25 TL",
    image: null, // Resim yolu
    imagePlaceholder: "💧", // Emoji placeholder
    whatsappMessage: "Mesaj şablonu",
    subProducts: [
      {
        id: 11,
        name: "Alt Ürün 1",
        price: "15 TL",
        // ...
      }
    ]
  }
];
```

## 📱 WhatsApp Entegrasyonu

WhatsApp ayarları `src/config/whatsapp.js` dosyasından yönetilir:

```javascript
export const WHATSAPP_CONFIG = {
  phoneNumber: "905551234567", // WhatsApp numarası
  defaultMessage: "Merhaba, sipariş vermek istiyorum"
};
```

## 🎨 Özelleştirme

### Renkler ve Tema
Ana CSS dosyası: `src/App.css`

### Responsive Tasarım
- Mobile-first yaklaşım
- 768px breakpoint
- Touch-friendly butonlar

## 🔧 Geliştirme

### Build
```bash
npm run build
```

### Deploy
```bash
# Build dosyalarını oluştur
npm run build

# Statik sunucu ile test et
npx serve -s build
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork edin
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 🖼️ Logo Ekleme Rehberi

Header'ın sol tarafında görünecek logo için:

### Logo Dosyası Ekleme

1. **Logo dosyasını ekleyin**: `public/images/logo.png` olarak kaydedin
2. **Desteklenen formatlar**: PNG, JPG, SVG (PNG önerilen)
3. **Boyut önerileri**: 
   - **Genişlik**: 150-250px
   - **Yükseklik**: 40-60px
   - **Şeffaf arkaplan** (PNG) önerilen

### Logo Dosya Yapısı

```
public/
├── images/
│   ├── logo.png         ← Ana logo dosyası
│   ├── logo@2x.png      ← Retina ekranlar için (opsiyonel)
│   └── logo.svg         ← SVG format (opsiyonel)
```

### Logo Yoksa Ne Olur?

Logo henüz eklenmemişse:
- **Text fallback**: "Bİ DOLU İÇECEK" yazısı görünür
- **Otomatik geçiş**: Logo yüklenemezse text'e geçer
- **Responsive**: Mobilde küçük, desktop'ta büyük

### Logo Konfigürasyonu

Logo path'ini değiştirmek için `src/App.js` dosyasında:

```javascript
<img 
  src="/images/logo.png"  // Logo path'ini buradan değiştirin
  alt="Bİ DOLU İÇECEK Logo" 
  className="header-logo"
/>
```

## 🎥 Video Ekleme Rehberi

Header'daki sol daireye (🎥) tıklandığında açılacak tanıtım videosu için:

### Video Dosyası Ekleme

1. **Video klasörü oluşturun**: `public/videos/` klasörünü oluşturun
2. **Video dosyasını ekleyin**: `public/videos/tanitim-video.mp4` olarak kaydedin
3. **Video konfigürasyonu**: `src/data/socialMedia.js` dosyasında:

```javascript
{
  id: 1,
  name: "Tanıtım Videosu",
  type: "video",
  videoUrl: "/videos/tanitim-video.mp4", // Video path'ini buraya ekleyin
  icon: "/images/video-icon.png", // Video ikonu (opsiyonel)
  iconPlaceholder: "🎥",
  target: "modal"
}
```

### Desteklenen Video Formatları

- **MP4** (önerilen): En yaygın desteklenen format
- **WebM**: Modern tarayıcılar için alternatif
- **OGV**: Eski tarayıcı desteği için

### Video Özellikleri

- **Otomatik oynatma**: Video modal açıldığında başlar
- **Kontroller**: Oynat/durdur, ses, tam ekran
- **Responsive**: Mobil ve desktop uyumlu
- **Poster resmi**: `public/images/video-poster.jpg` (opsiyonel)

### Video Boyutları

- **Maksimum boyut**: 50MB (performans için)
- **Çözünürlük**: 1920x1080 (Full HD) önerilen
- **Aspect ratio**: 16:9 (video modal otomatik ayarlar)

### Örnek Video Klasör Yapısı

```
public/
├── videos/
│   ├── tanitim-video.mp4
│   ├── tanitim-video.webm (opsiyonel)
│   └── ...
├── images/
│   ├── video-poster.jpg (opsiyonel)
│   ├── video-icon.png (opsiyonel)
│   └── ...
```

### Video Yoksa Ne Olur?

Video henüz eklenmemişse:
- **Placeholder görünümü**: "Video Yakında Eklenecek" mesajı
- **Mavi gradient arkaplan**: Profesyonel görünüm
- **Video ikonu**: 🎥 emojisi ile görsel ipucu

## 📞 İletişim

Sorular için: [iletişim bilgisi]
