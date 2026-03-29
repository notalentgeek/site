import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    draft: z.boolean().optional().default(false),
  }),
});

const videoCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    embed_url: z.string(),
    platform: z.enum(["youtube", "tiktok"]).default("youtube"),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = {
  article: articleCollection,
  video: videoCollection,
};
