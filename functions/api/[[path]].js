// Прокси к бэкенду на Railway (Cloudflare Pages Function).
// Из части российских сетей Railway недоступен, Cloudflare — доступен,
// поэтому формы обращаются к API через этот домен, а не к Railway напрямую.
// Запрос пересылается как есть (метод, заголовки, тело, query);
// заголовок Origin доходит до бэкенда, CORS решает сам бэкенд.
const BACKEND = 'https://adin-ni-backend-production.up.railway.app';

export async function onRequest({ request }) {
  const url = new URL(request.url);
  const target = new Request(BACKEND + url.pathname + url.search, request);
  return fetch(target);
}
