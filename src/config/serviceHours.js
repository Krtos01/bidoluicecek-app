import { getEdgeConfigServiceSettings } from './edgeConfig';

// Varsayılan Servis Saatleri Konfigürasyonu (Edge Config yoksa kullanılır)
export const DEFAULT_SERVICE_HOURS = {
  // Servis başlangıç saati (24 saat formatında)
  startHour: 8,
  startMinute: 30,
  
  // Servis bitiş saati (24 saat formatında)
  endHour: 20,
  endMinute: 30,
  
  // Hafta içi servis var mı? (Pazartesi-Cuma)
  weekdaysEnabled: true,
  
  // Hafta sonu servis var mı? (Cumartesi-Pazar)
  weekendsEnabled: true,
  
  // Özel kapalı günler (YYYY-MM-DD formatında)
  closedDates: [
    // Örnek: '2024-01-01', // Yılbaşı
    // Örnek: '2024-12-25', // Noel
  ],
  
  // Test modu (true olursa her zaman açık)
  testMode: false
};

// Edge Config'den gelen ayarlarla birleştirilen aktif ayarlar
let ACTIVE_SERVICE_HOURS = { ...DEFAULT_SERVICE_HOURS };
let STORE_STATUS = {
  isOpen: true,
  temporarilyClosed: false,
  maintenanceMode: false,
  reason: ""
};

// Edge Config ayarlarını yükle
export const loadEdgeConfigSettings = async () => {
  try {
    const edgeSettings = await getEdgeConfigServiceSettings();
    
    if (edgeSettings) {
      // Servis saatleri ayarları
      if (edgeSettings.serviceHours) {
        ACTIVE_SERVICE_HOURS = {
          ...DEFAULT_SERVICE_HOURS,
          ...edgeSettings.serviceHours
        };
      }
      
      // Mağaza durumu
      if (edgeSettings.storeStatus) {
        STORE_STATUS = edgeSettings.storeStatus;
      }
      
      console.log('Edge Config ayarları yüklendi:', {
        serviceHours: ACTIVE_SERVICE_HOURS,
        storeStatus: STORE_STATUS
      });
    }
  } catch (error) {
    console.warn('Edge Config ayarları yüklenemedi, varsayılan ayarlar kullanılıyor:', error);
  }
};

// Aktif servis saatlerini döndür
export const getActiveServiceHours = () => ACTIVE_SERVICE_HOURS;

// Mağaza durumunu döndür
export const getStoreStatus = () => STORE_STATUS;

// Servis saatlerini kontrol eden ana fonksiyon
export const isServiceOpen = async () => {
  // Edge Config ayarlarını yükle (eğer yüklenmemişse)
  await loadEdgeConfigSettings();
  
  const serviceHours = getActiveServiceHours();
  const storeStatus = getStoreStatus();
  
  // Mağaza manuel olarak kapatılmışsa
  if (!storeStatus.isOpen || storeStatus.temporarilyClosed || storeStatus.maintenanceMode) {
    return false;
  }
  
  // Test modu açıksa
  if (serviceHours.testMode) {
    return true;
  }

  const now = new Date();
  const currentDay = now.getDay(); // 0=Pazar, 1=Pazartesi, ..., 6=Cumartesi
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const currentTime = currentHour * 60 + currentMinute;
  
  // Bugünün tarihini kontrol et (kapalı günler)
  const today = now.toISOString().split('T')[0];
  if (serviceHours.closedDates.includes(today)) {
    return false;
  }
  
  // Hafta içi/hafta sonu kontrolü
  const isWeekend = currentDay === 0 || currentDay === 6; // Pazar veya Cumartesi
  if (isWeekend && !serviceHours.weekendsEnabled) {
    return false;
  }
  if (!isWeekend && !serviceHours.weekdaysEnabled) {
    return false;
  }
  
  // Saat kontrolü
  const startTime = serviceHours.startHour * 60 + serviceHours.startMinute;
  const endTime = serviceHours.endHour * 60 + serviceHours.endMinute;
  
  return currentTime >= startTime && currentTime <= endTime;
};

// Servis saatlerini formatlanmış string olarak döndürür
export const getServiceHoursText = () => {
  const serviceHours = getActiveServiceHours();
  
  const formatTime = (hour, minute) => {
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  };
  
  const startTime = formatTime(serviceHours.startHour, serviceHours.startMinute);
  const endTime = formatTime(serviceHours.endHour, serviceHours.endMinute);
  
  return `${startTime} - ${endTime}`;
};

// Bir sonraki servis açılış zamanını hesaplar
export const getNextServiceTime = () => {
  const serviceHours = getActiveServiceHours();
  
  if (serviceHours.testMode) {
    return null;
  }

  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(serviceHours.startHour, serviceHours.startMinute, 0, 0);
  
  return tomorrow;
}; 