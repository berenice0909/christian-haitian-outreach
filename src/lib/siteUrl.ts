// The site's public address, used for link previews, the sitemap and search info.
// On Vercel this follows the production domain automatically (vercel.app now,
// christianhaitianoutreach.org once the domain is pointed). Locally it's localhost.
export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";
