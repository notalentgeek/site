import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).default([]),
    category: z.string().default("general"),
    coverColor: z.string().default("#d4a574"),
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
    category: z.string().default("general"),
    videoUrl: z.string(),
    thumbnailColor: z.string().default("#7cb5a0"),
    duration: z.string().optional(),
  }),
});

export const collections = {
  article: articleCollection,
  video: videoCollection,
};
