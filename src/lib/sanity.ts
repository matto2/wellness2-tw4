import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

export const sanity = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || "production",
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || "2024-10-01", // pin to a stable date
  useCdn: true, // fast & fine for public content
});

const builder = imageUrlBuilder(sanity);
export const urlFor = (src: SanityImageSource) => builder.image(src);
