/**
 * Deploy root: `NEXT_PUBLIC_URL` (origin) + optional `NEXT_PUBLIC_BASE_PATH`
 * (e.g. GitHub Pages project site `/<repo>`).
 */
export function siteRoot(): string {
  const origin = (
    process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
  ).replace(/\/$/, '');
  const bp = (process.env.NEXT_PUBLIC_BASE_PATH || '').replace(/\/$/, '');
  return bp ? `${origin}${bp}` : origin;
}

/**
 * Prefix for `/public` assets and other root-absolute paths when the app is
 * served under a subpath (e.g. GitHub Pages `/<repo>/`).
 */
export function withBasePath(path: string): string {
  if (!path) return path;
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (!base) return normalized;
  return `${base.replace(/\/$/, '')}${normalized}`;
}

/** Absolute URL for a `/public` file (OG images, favicon) on subpath hosts. */
export function absolutePublicUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  const origin = (
    process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'
  ).replace(/\/$/, '');
  return `${origin}${withBasePath(path)}`;
}
