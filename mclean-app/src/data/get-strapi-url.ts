export function getStrapiURL(path: string): string {
    const baseUrl = process.env.STRAPI_API_URL ?? "http://127.0.0.1:1337";
    return `${baseUrl}${path}`;
  }