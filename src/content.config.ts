import { defineCollection, z } from "astro:content"
import { file, glob } from "astro/loaders"

const project = defineCollection({
  loader: file("src/data/projects.json"),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    image: z.string(),
    slug: z.string(),
    liveSiteUrl: z.string().optional(),
    githubURL: z.string()
  })
})


const profile = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "src/data/profiles" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    image: z.string(),
  })
})

export const collections = { project, profile }

