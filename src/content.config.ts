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

const exhibitions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/exhibitions' }),
  schema: z.object({
    title: z.string(), visitedOn: z.coerce.date(), dateLabel: z.string(),
    region: z.string(), location: z.string(), kind: z.string(),
    artists: z.array(z.string()).default([]),
    concepts: z.array(z.string()).default([]),
    institution: z.string().optional(),
    exhibitionEnd: z.coerce.date().optional(),
    verification: z.enum(['recorded','needs-review']).default('needs-review')
  })
});
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/people' }),
  schema: z.object({ name: z.string(), kind: z.string().default('artist') })
});
const institutions = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/institutions' }),
  schema: z.object({ name: z.string() })
});
const concepts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/data/concepts' }),
  schema: z.object({ title: z.string() })
});
export const collections = { entries, photographs, exhibitions, people, institutions, concepts };
