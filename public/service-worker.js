const cacheName = "whipple-cache-v1"

self.addEventListener("install", () => {
  console.log(`Service worker ${__filename} installed.`)
})

self.addEventListener("activate", (event) => {
  console.log(`Service worker ${__filename} activated.`)
  event.waitUntil(
    caches.keys().then((storedCachesNames) => {
      return Promise.all(
        storedCachesNames.map((storedCacheName) => {
          if (storedCacheName !== cacheName) {
            return caches.delete(storedCacheName)
          }
        })
      )
    })
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          let responseClone = response.clone()

          caches.open(cacheName).then((cache) => {
            cache.put(event.request, responseClone)
          })

          return response
        }
      })
      .catch(() => caches.match(event.request).then((response) => response))
  )
})
