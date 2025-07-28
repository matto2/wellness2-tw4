import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    author: z.string(),
    readTime: z.string(),
    image: z.string(), // Path to the blog post image
    description: z.string().optional(),
  }),
});

const productsCollection = defineCollection({
  type: "content",
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
