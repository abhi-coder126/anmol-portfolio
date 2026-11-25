import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const commonFields = {
  title: z.string(),
  description: z.string().optional(),
  meta_title: z.string().optional(),
  date: z.coerce.date().optional(),
  image: z.string().optional(),
  draft: z.boolean().optional(),
};

const caseStudyCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "src/content/case-study" }),
  schema: z.object({
    ...commonFields,
    page_header: z.object({
      badge: z.string().optional(),
      title: z.string(),
      content: z.string(),
    }).optional(),
    thumbnail: z.string().optional(),
    logo: z.string().optional(),
    company: z.string().optional(),
    badge: z.string().optional(),
    stats: z.array(z.object({ value: z.string(), label: z.string() })).optional(),
    client_info: z.array(z.object({ label: z.string(), value: z.string(), icon: z.string() })).optional(),
    overview: z.object({ image: z.string(), title: z.string(), content: z.string() }).optional(),
    challenges: z.object({
      title: z.string(),
      content: z.string(),
      quote: z.string(),
      quote_author: z.object({ name: z.string(), designation: z.string(), avatar: z.string() }),
    }).optional(),
    solution: z.object({ image: z.string(), title: z.string(), content: z.string(), items: z.array(z.string()) }).optional(),
    results: z.object({ title: z.string(), content: z.string(), metrics: z.array(z.object({ value: z.string(), label: z.string() })) }).optional(),
  }),
});

export const collections = { caseStudy: caseStudyCollection };
