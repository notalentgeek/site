import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("architecture"),
    location: z.string().optional(),
    year: z.string().optional(),
    coverGradient: z.string().default("from-stone-300 to-stone-500"),
    featured: z.boolean().default(false),
  }),
});

const videoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("architecture"),
    videoUrl: z.string(),
    thumbnailGradient: z.string().default("from-stone-300 to-stone-500"),
    duration: z.string().optional(),
  }),
});

export const collections = {
  article: articleCollection,
  video: videoCollection,
};
