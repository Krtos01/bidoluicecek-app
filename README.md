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

## 📞 İletişim

Sorular için: [iletişim bilgisi]
