const CACHE_NAME = 'briefly-healthcare-v2';
const STATIC_CACHE = 'briefly-static-v2';
const DYNAMIC_CACHE = 'briefly-dynamic-v2';

const urlsToCache = [
  '/',
  '/about',
  '/for-patients',
  '/for-practitioners',
  '/community',
  '/contact',
  '/manifest.webmanifest',
  '/icon-192x192.png',
  '/icon-512x512.png',
  '/offline.html'
];

const FALLBACK_URL = '/offline.html';

// Install event
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Caching static assets');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - Network First strategy for HTML, Cache First for assets
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;
  
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
        const isNavigateRequest = event.request.mode === 'navigate';
        const isAssetRequest = event.request.destination === 'image' || 
                              event.request.destination === 'style' ||
                              event.request.destination === 'script';

        if (isAssetRequest && cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then(fetchResponse => {
            // Clone the response before caching
            const responseClone = fetchResponse.clone();
            
            // Cache successful responses
            if (fetchResponse.status === 200) {
              caches.open(isAssetRequest ? STATIC_CACHE : DYNAMIC_CACHE)
                .then(cache => {
                  cache.put(event.request, responseClone);
                });
            }
            
            return fetchResponse;
          })
          .catch(() => {
            // Return cached version if available
            if (cachedResponse) {
              return cachedResponse;
            }
            
            // Offline fallback for navigation requests
            if (isNavigateRequest) {
              return caches.match(FALLBACK_URL);
            }
            
            // Return empty response for other requests
            return new Response('', { status: 408, statusText: 'Offline' });
          });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'contact-form-sync') {
    event.waitUntil(syncContactForm());
  }
  if (event.tag === 'booking-form-sync') {
    event.waitUntil(syncBookingForm());
  }
});

// IndexedDB helpers
function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('BrieflyHealthcareDB', 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('pendingForms')) {
        db.createObjectStore('pendingForms', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

async function getStoredFormData() {
  try {
    const db = await openDB();
    const transaction = db.transaction(['pendingForms'], 'readonly');
    const store = transaction.objectStore('pendingForms');
    
    return new Promise((resolve, reject) => {
      const request = store.getAll();
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });
  } catch (error) {
    console.log('Error getting stored form data:', error);
    return [];
  }
}

async function clearStoredFormData(id) {
  try {
    const db = await openDB();
    const transaction = db.transaction(['pendingForms'], 'readwrite');
    const store = transaction.objectStore('pendingForms');
    
    if (id) {
      store.delete(id);
    } else {
      store.clear();
    }
  } catch (error) {
    console.log('Error clearing stored form data:', error);
  }
}

async function syncContactForm() {
  try {
    const pendingForms = await getStoredFormData();
    
    for (const formData of pendingForms) {
      if (formData.type === 'contact') {
        try {
          // Simulate form submission - replace with actual endpoint
          console.log('Syncing contact form:', formData);
          await clearStoredFormData(formData.id);
        } catch (error) {
          console.log('Failed to sync contact form:', error);
        }
      }
    }
  } catch (error) {
    console.log('Background sync failed:', error);
  }
}

async function syncBookingForm() {
  try {
    const pendingForms = await getStoredFormData();
    
    for (const formData of pendingForms) {
      if (formData.type === 'booking') {
        try {
          // Simulate form submission - replace with actual endpoint
          console.log('Syncing booking form:', formData);
          await clearStoredFormData(formData.id);
        } catch (error) {
          console.log('Failed to sync booking form:', error);
        }
      }
    }
  } catch (error) {
    console.log('Background booking sync failed:', error);
  }
}

// Activate event
self.addEventListener('activate', event => {
  self.clients.claim();
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && 
              cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Push notification handling
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New notification from Briefly Healthcare',
    icon: '/icon-192x192.png',
    badge: '/icon-192x192.png',
    vibrate: [200, 100, 200],
    data: {
      url: '/'
    },
    actions: [
      {
        action: 'open',
        title: 'Open App',
        icon: '/icon-192x192.png'
      },
      {
        action: 'whatsapp',
        title: 'Chat on WhatsApp',
        icon: '/icon-192x192.png'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification('Briefly Healthcare', options)
  );
});

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'whatsapp') {
    event.waitUntil(
      clients.openWindow('https://wa.me/27723692658?text=Hi,%20I%20saw%20your%20notification')
    );
  } else {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Periodic background sync
self.addEventListener('periodicsync', event => {
  if (event.tag === 'health-check') {
    event.waitUntil(performHealthCheck());
  }
});

async function performHealthCheck() {
  try {
    // Periodic health check and cache cleanup
    console.log('Performing periodic health check');
    
    // Clean old cache entries
    const dynamicCache = await caches.open(DYNAMIC_CACHE);
    const keys = await dynamicCache.keys();
    
    if (keys.length > 50) {
      // Remove oldest entries
      const sortedKeys = keys.sort((a, b) => a.url.localeCompare(b.url));
      for (let i = 0; i < 10; i++) {
        await dynamicCache.delete(sortedKeys[i]);
      }
    }
  } catch (error) {
    console.log('Health check failed:', error);
  }
}