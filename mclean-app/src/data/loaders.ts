import { fetchAPI } from "../utils/fetch-api";
import { getStrapiURL } from "./get-strapi-url";


export async function getHomePage() {
  const path = "/api/homepage";
  const url = getStrapiURL(path);
  const res = await fetch(url, { method: "GET" });
  return await res.json();
}
