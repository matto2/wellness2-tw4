import { defineCollection, z } from "astro:content";

const productsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    brand: z.string(),
    quantity: z.string(),
    price: z.number(),
    salePrice: z.number(),
    image: z.string().optional(), // Path to the product image
    description: z.string().optional(),
    category: z.string().optional(),
    inStock: z.boolean().default(true),
  }),
});

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    readTime: z.string(),
    image: z.string().optional(), // Path to the blog post image
    description: z.string().optional(),
  }),
});

export const collections = {
  products: productsCollection,
  blog: blogCollection,
};
