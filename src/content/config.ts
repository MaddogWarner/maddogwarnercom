import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    draft: z.boolean().default(false),
    image: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    url: z.string().url(),
    tags: z.array(z.string()),
    language: z.string().optional(),
    stars: z.number().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
