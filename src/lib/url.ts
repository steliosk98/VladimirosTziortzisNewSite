const BASE = import.meta.env.BASE_URL;

export function withBase(path: string): string {
  if (!path) return BASE;
  if (/^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith('//')) return path;
  if (path.startsWith('#')) return path;
  const clean = path.replace(/^\/+/, '');
  return BASE.endsWith('/') ? BASE + clean : `${BASE}/${clean}`;
}
