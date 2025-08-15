import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content", // 'content' es para archivos Markdown/MDX
  schema: z.object({
    id: z.number(),
    title: z.string(),
    shortDescription: z.string().optional(),
    image: z.string(),
    description: z.string(),
    skills: z.array(z.string()),
    url: z.string().optional(),
    demo: z.string().optional(),
    repository: z.string().optional(),
    playstore_url: z.string().optional(),
    type: z
      .enum(["web", "app", "api", "library", "other", "mobile"])
      .default("web"),
    status: z
      .enum(["completed", "in-progress", "maintained", "archived"])
      .default("completed"),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };
