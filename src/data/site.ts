// Public URL of the deployed site, used for SEO metadata, sitemap and robots.txt.
// Set NEXT_PUBLIC_SITE_URL in your hosting provider (e.g. https://thang-vo-dinh.vercel.app).
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://thang-vo-dinh.vercel.app").replace(/\/$/, "");

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a public asset path with the base path (needed for GitHub Pages sub-paths). */
export const asset = (path: string) => `${basePath}${path}`;
