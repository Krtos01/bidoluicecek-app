import { get } from '@vercel/edge-config';

// Edge Config anahtarları
const EDGE_CONFIG_KEYS = {
  SERVICE_HOURS: 'service_hours',
  STORE_STATUS: 'store_status',
  EMERGENCY_MESSAGE: 'emergency_message'
};

// Edge Config'den servis ayarlarını çeken fonksiyon
export const getEdgeConfigServiceSettings = async () => {
  try {
    // Tüm ayarları paralel olarak çek
    const [serviceHours, storeStatus, emergencyMessage] = await Promise.all([
      get(EDGE_CONFIG_KEYS.SERVICE_HOURS),
      get(EDGE_CONFIG_KEYS.STORE_STATUS),
      get(EDGE_CONFIG_KEYS.EMERGENCY_MESSAGE)
    ]);

    return {
      serviceHours,
      storeStatus,
      emergencyMessage
    };
  } catch (error) {
    console.warn('Edge Config yüklenemedi, varsayılan ayarlar kullanılıyor:', error);
    return null;
  }
};

// Edge Config'den tek bir değer çeken yardımcı fonksiyon
export const getEdgeConfigValue = async (key) => {
  try {
    return await get(key);
  } catch (error) {
    console.warn(`Edge Config değeri alınamadı (${key}):`, error);
    return null;
  }
};

// Varsayılan Edge Config yapısı (referans için)
export const DEFAULT_EDGE_CONFIG_STRUCTURE = {
  service_hours: {
    enabled: true,
    startHour: 8,
    startMinute: 30,
    endHour: 22,
    endMinute: 50,
    weekdaysEnabled: true,
    weekendsEnabled: true,
    closedDates: [], // ["2024-01-01", "2024-12-25"]
    timezone: "Europe/Istanbul"
  },
  store_status: {
    isOpen: true,
    temporarilyClosed: false,
    maintenanceMode: false,
    reason: "" // Kapatılma sebebi
  },
  emergency_message: {
    enabled: false,
    message: "",
    priority: "normal" // "normal", "warning", "urgent"
  }
};

// Edge Config ayarlarını yerel ayarlarla birleştiren fonksiyon
export const mergeWithEdgeConfig = (localSettings, edgeSettings) => {
  if (!edgeSettings) {
    return localSettings;
  }

  const merged = { ...localSettings };

  // Servis saatleri ayarları
  if (edgeSettings.serviceHours) {
    merged.serviceHours = {
      ...merged.serviceHours,
      ...edgeSettings.serviceHours
    };
  }

  // Mağaza durumu
  if (edgeSettings.storeStatus) {
    merged.storeStatus = edgeSettings.storeStatus;
  }

  // Acil mesaj
  if (edgeSettings.emergencyMessage) {
    merged.emergencyMessage = edgeSettings.emergencyMessage;
  }

  return merged;
}; 