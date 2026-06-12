// Candid service worker — enables home-screen install.
// Push notifications get added here in a later step.
self.addEventListener('install', (e) => self.skipWaiting());
self.addEventListener('activate', (e) => self.clients.claim());
self.addEventListener('fetch', (e) => { /* network passthrough */ });
