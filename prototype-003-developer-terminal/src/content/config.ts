import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const videoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string(),
    youtube_id: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  article: articleCollection,
  video: videoCollection,
};
