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

export const collections = {
  blog: blogCollection,
};
