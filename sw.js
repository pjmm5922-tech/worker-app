// 앱 설치를 가능하게 해주는 최소한의 서비스 워커
// (데이터는 항상 실시간 조회 — 캐시하지 않음)
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(clients.claim()); });
self.addEventListener('fetch', function (e) {
  // 네트워크 우선 (오프라인 지원 없음 — 개인정보를 폰에 저장하지 않기 위함)
});
