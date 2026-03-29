import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
  }),
});

const videoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    youtube_id: z.string(),
    duration: z.string().optional(),
  }),
});

export const collections = {
  article: articleCollection,
  video: videoCollection,
};
