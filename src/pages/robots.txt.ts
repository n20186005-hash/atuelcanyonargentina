import type { APIRoute } from 'astro';

const site = (import.meta.env.SITE as string) || 'https://atuelcanyonargentina.com';

export const GET: APIRoute = () => {
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap-index.xml\n`;
  return new Response(body, {
    headers: { 'Content-Type': 'text/plain' },
  });
};
