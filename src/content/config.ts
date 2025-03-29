import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  // type: "content", 'content' es para archivos Markdown/MDX
  schema: z.object({
    id: z.number(),
    title: z.string(),
    shortDescription: z.string().optional(),
    image: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    url: z.string().optional(),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };
