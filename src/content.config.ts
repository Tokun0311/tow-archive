import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const entries = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/writing' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), type: z.string().default('Essay'), language: z.string().default('EN'), description: z.string(), tags: z.array(z.string()).default([]), draft: z.boolean().default(false) })
});
const photographs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/photography' }),
  schema: z.object({ title: z.string(), date: z.coerce.date(), location: z.string().optional(), language: z.string().default('EN'), description: z.string(), tags: z.array(z.string()).default([]), images: z.array(z.object({src:z.string(), alt:z.string()})).default([]), draft: z.boolean().default(false) })
});
export const collections = { entries, photographs };
