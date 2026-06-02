import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    readTime: z.string(),
    image: z.string(),
    description: z.string().optional(),
  }),
});

const productsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/products" }),
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    quantity: z.string(),
    price: z.number(),
    salePrice: z.number().optional(),
    image: z.string(),
    description: z.string(),
    category: z.string(),
    inStock: z.boolean(),
    shopUrl: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  products: productsCollection,
};
