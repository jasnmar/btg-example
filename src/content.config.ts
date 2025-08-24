import { defineCollection, z } from "astro:content"
import { file, glob } from "astro/loaders"


const services = defineCollection({
  loader: file("src/data/services.json"),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string()
  })
})


export const collections = { services }
