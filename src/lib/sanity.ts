import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { Image } from "sanity";

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || "96tssprd",
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2025-01-27",
  useCdn: true,
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (src: Image | any) => builder.image(src);
