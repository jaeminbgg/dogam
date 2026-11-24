// 도감검색cld: 앱 설치(WebAPK)가 되도록 하는 최소 서비스 워커. 페이지는 항상 최신 버전을 받아 옵니다.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') e.respondWith(fetch(e.request).catch(() => new Response('<p style="font:16px sans-serif;padding:20px">인터넷에 연결되면 다시 열어 주세요.</p>', {headers: {'Content-Type': 'text/html; charset=utf-8'}})));
});
