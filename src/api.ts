/**
 * Backend API base URL. Empty = same origin (local `npm run dev` with Express).
 * For GitHub Pages, set VITE_API_BASE_URL to your deployed API (e.g. Railway) if you use Drive/Share/Google export.
 */
export function apiUrl(path: string): string {
  const base = import.meta.env.VITE_API_BASE_URL ?? '';
  const p = path.startsWith('/') ? path : `/${path}`;
  if (!base) return p;
  return `${base.replace(/\/$/, '')}${p}`;
}
