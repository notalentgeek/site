import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    cover_image: z.string().optional(),
  }),
});

const videoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    embed_url: z.string(),
    duration: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    thumbnail: z.string().optional(),
  }),
});

export const collections = {
  article: articleCollection,
  video: videoCollection,
};
