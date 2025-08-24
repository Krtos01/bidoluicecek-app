# Vercel Edge Config Kurulum Rehberi

Bu rehber, Su App'inizde servis saatlerini ve mağaza durumunu Vercel Edge Config ile yönetmek için gerekli adımları açıklar.

## 🚀 Vercel Edge Config Nedir?

Vercel Edge Config, dünya çapında ultra-düşük gecikme ile veri okuma imkanı sunan global bir veri deposudur. Kod değişikliği yapmadan uygulama ayarlarınızı anlık olarak güncelleyebilirsiniz.

## 📋 Kurulum Adımları

### 1. Vercel Dashboard'da Edge Config Oluşturun

1. [Vercel Dashboard](https://vercel.com/dashboard)'a gidin
2. Projenizi seçin
3. **Storage** sekmesine tıklayın
4. **Create Database** > **Edge Config** seçin
5. Adını `suapp-config` yapın (ya da istediğiniz isim)

### 2. Edge Config İçeriğini Ayarlayın

Dashboard'dan **Edit Items** butonuna tıklayın ve aşağıdaki JSON yapısını ekleyin:

```json
{
  "service_hours": {
    "enabled": true,
    "startHour": 8,
    "startMinute": 30,
    "endHour": 22,
    "endMinute": 50,
    "weekdaysEnabled": true,
    "weekendsEnabled": true,
    "closedDates": [],
    "timezone": "Europe/Istanbul"
  },
  "store_status": {
    "isOpen": true,
    "temporarilyClosed": false,
    "maintenanceMode": false,
    "reason": ""
  },
  "emergency_message": {
    "enabled": false,
    "message": "",
    "priority": "normal"
  }
}
```

### 3. Environment Variable Ayarlayın

1. Vercel Dashboard'da **Settings** > **Environment Variables**
2. Yeni environment variable ekleyin:
   - **Name**: `EDGE_CONFIG`
   - **Value**: Edge Config connection string'inizi buraya yazın
   - **Environments**: Production, Preview, Development seçin

Connection string'i almak için:
1. Edge Config sayfasında **Tokens** sekmesine gidin
2. **Copy Connection String** tıklayın

### 4. Projeyi Yeniden Deploy Edin

```bash
# Değişiklikleri commit edin
git add .
git commit -m "Edge Config entegrasyonu"
git push origin main

# Vercel otomatik deploy edecek
```

## 🎛️ Edge Config Yönetimi

### Servis Saatlerini Değiştirme

Edge Config dashboard'dan `service_hours` objesini düzenleyin:

```json
{
  "service_hours": {
    "enabled": true,
    "startHour": 9,     // Sabah 9'da aç
    "startMinute": 0,
    "endHour": 18,      // Akşam 6'da kapat
    "endMinute": 0,
    "weekdaysEnabled": true,
    "weekendsEnabled": false,  // Hafta sonu kapalı
    "closedDates": ["2024-01-01", "2024-12-25"],
    "timezone": "Europe/Istanbul"
  }
}
```

### Mağazayı Geçici Kapatma

```json
{
  "store_status": {
    "isOpen": false,
    "temporarilyClosed": true,
    "maintenanceMode": false,
    "reason": "Teknik bakım nedeniyle geçici olarak kapalıyız. 2 saat sonra açılacağız."
  }
}
```

### Bakım Modu

```json
{
  "store_status": {
    "isOpen": false,
    "temporarilyClosed": false,
    "maintenanceMode": true,
    "reason": "Sistem güncellemesi yapılıyor. Lütfen daha sonra tekrar deneyin."
  }
}
```

### Acil Durum Mesajı

```json
{
  "emergency_message": {
    "enabled": true,
    "message": "Kargo teslimatlarında gecikmeler yaşanmaktadır.",
    "priority": "warning"
  }
}
```

## 🔧 API Kullanımı

### REST API ile Güncelleme

```bash
# Access token alın (Vercel Dashboard > Settings > Tokens)
TOKEN="your_vercel_api_token"
EDGE_CONFIG_ID="your_edge_config_id"

# Servis saatlerini güncelle
curl -X PATCH \
  "https://api.vercel.com/v1/edge-config/$EDGE_CONFIG_ID/items" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "operation": "upsert",
        "key": "service_hours",
        "value": {
          "enabled": true,
          "startHour": 10,
          "startMinute": 0,
          "endHour": 20,
          "endMinute": 0,
          "weekdaysEnabled": true,
          "weekendsEnabled": true,
          "closedDates": [],
          "timezone": "Europe/Istanbul"
        }
      }
    ]
  }'
```

### Mağazayı Anında Kapatma

```bash
curl -X PATCH \
  "https://api.vercel.com/v1/edge-config/$EDGE_CONFIG_ID/items" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "items": [
      {
        "operation": "upsert",
        "key": "store_status",
        "value": {
          "isOpen": false,
          "temporarilyClosed": true,
          "maintenanceMode": false,
          "reason": "Acil durum nedeniyle kapalı"
        }
      }
    ]
  }'
```

## 📱 Uygulama Davranışları

### Edge Config Durumları

| Durum | Sipariş Butonu | Görünen Mesaj |
|-------|---------------|---------------|
| Normal servis saatleri | 🛒 Yeşil | "Sipariş Ver" |
| Servis saatleri dışı | 🚫 Gri | "Servis Saatleri Dışındadır" |
| Geçici kapalı | 🚫 Gri | "Geçici Olarak Kapalı" |
| Bakım modu | 🚫 Gri | "Bakım Modunda" |

### Otomatik Güncelleme

- ✅ Edge Config değişiklikleri **2 dakika içinde** uygulamaya yansır
- ✅ Sayfa yenileme gerektirmez
- ✅ Dünya çapında tüm kullanıcılar aynı anda güncelleme alır
- ✅ Fallback: Edge Config erişilemezse yerel ayarlar kullanılır

## 🛡️ Güvenlik

- Edge Config read-only token kullanır
- Sadece belirtilen veriler okunabilir
- API rate limiting koruması
- HTTPS üzerinden şifreli iletişim

## 📊 Monitoring

### Vercel Analytics

Edge Config kullanımını Vercel Dashboard > Analytics'ten takip edebilirsiniz:

- Request sayısı
- Response süreleri
- Error oranları
- Global dağılım

### Console Logları

Uygulama Edge Config durumunu console'a yazdırır:

```javascript
// Başarılı yükleme
"Edge Config ayarları yüklendi: { serviceHours: {...}, storeStatus: {...} }"

// Hata durumu
"Edge Config yüklenemedi, varsayılan ayarlar kullanılıyor: [error]"
```

## 🔄 Backup ve Restore

Edge Config otomatik backup alır:

1. **Dashboard** > **Backups** sekmesine gidin
2. İstediğiniz backup'ı seçin
3. **Restore** butonuna tıklayın
4. Değişiklik anında tüm kullanıcılara yansır

## 💡 İpuçları

### Geliştirme

```javascript
// Test modu için
{
  "service_hours": {
    "testMode": true  // Her zaman açık
  }
}
```

### Production

```javascript
// Gerçek çalışma saatleri
{
  "service_hours": {
    "testMode": false,
    "startHour": 8,
    "endHour": 22
  }
}
```

### Özel Günler

```javascript
{
  "service_hours": {
    "closedDates": [
      "2024-01-01",  // Yılbaşı
      "2024-04-23",  // 23 Nisan
      "2024-05-01",  // 1 Mayıs
      "2024-05-19",  // 19 Mayıs
      "2024-07-15",  // 15 Temmuz
      "2024-08-30",  // 30 Ağustos
      "2024-10-29"   // 29 Ekim
    ]
  }
}
```

## ❓ Sorun Giderme

### Edge Config Çalışmıyor

1. **Environment Variable** kontrolü:
   ```bash
   echo $EDGE_CONFIG
   ```

2. **Connection String** formatı:
   ```
   https://edge-config.vercel.com/[CONFIG_ID]?token=[TOKEN]
   ```

3. **Token yetkileri** kontrolü:
   - Dashboard > Storage > Edge Config > Tokens
   - Read yetkisi olmalı

### Değişiklikler Yansımıyor

1. **2 dakika bekleyin** (cache süresi)
2. **Console logları** kontrol edin
3. **Backup'tan restore** deneyin
4. **Environment variable** yeniden deploy

### Local Development

```javascript
// .env.local dosyasına ekleyin
EDGE_CONFIG=https://edge-config.vercel.com/[CONFIG_ID]?token=[TOKEN]
```

## 📞 Destek

- [Vercel Discord](https://vercel.com/discord)
- [Vercel Docs](https://vercel.com/docs/edge-config)
- [GitHub Issues](https://github.com/vercel/vercel/issues)

---

Bu sistem sayesinde artık **kod değişikliği yapmadan** mağazanızı istediğiniz zaman kapatabilir, servis saatlerini değiştirebilir ve acil duyurular yapabilirsiniz! 🎉 