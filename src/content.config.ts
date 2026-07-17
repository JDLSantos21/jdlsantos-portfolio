import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z
      .object({
        // Core project information
        id: z.number(),
        title: z.string(),
        shortDescription: z.string().optional(),
        description: z.string(),

        // Visual assets - now with proper image support
        image: z.union([
          z.string(), // For backward compatibility with existing string paths
          image().refine((img) => img.width >= 200, {
            message: "Project image must be at least 200px wide",
          }),
        ]),

        // Technical details
        skills: z.array(z.string()).min(1, "At least one skill is required"),

        // Links and deployment
        url: z.string().url().optional(),
        demo: z.string().url().optional(),
        repository: z.string().url().optional(),
        playstore_url: z.string().url().optional(),

        // Project categorization
        type: z
          .enum(["web", "app", "api", "library", "other", "mobile", "desktop"])
          .default("web"),
        category: z
          .enum([
            "frontend",
            "backend",
            "fullstack",
            "mobile",
            "desktop",
            "devops",
            "data",
          ])
          .optional(),

        // Project lifecycle
        status: z
          .enum([
            "completed",
            "in-progress",
            "maintained",
            "archived",
            "planned",
          ])
          .default("completed"),

        // Metadata for display
        featured: z.boolean().default(false),
        priority: z.number().min(1).max(10).default(5),

        // Dates
        startDate: z.coerce.date().optional(),
        endDate: z.coerce.date().optional(),
        publishedAt: z.coerce.date().optional(),

        // SEO and organization
        tags: z.array(z.string()).default([]),
        slug: z.string().optional(), // Custom slug override

        // Team and collaboration
        team: z
          .array(
            z.object({
              name: z.string(),
              role: z.string(),
              url: z.string().url().optional(),
            })
          )
          .default([]),

        // Additional metadata
        difficulty: z.enum(["beginner", "intermediate", "advanced"]).optional(),
        platform: z.array(z.string()).default([]), // e.g., ["iOS", "Android", "Web"]

        // Draft support
        draft: z.boolean().default(false),
      })
      .refine(
        (data) => {
          // If endDate is provided, ensure it's after startDate
          if (data.startDate && data.endDate) {
            return data.endDate >= data.startDate;
          }
          return true;
        },
        {
          message: "End date must be after start date",
          path: ["endDate"],
        }
      ),
});

export const collections = {
  projects,
};
