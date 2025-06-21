import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: 'data',
      source: 'blog.json',
      schema: z.object({
        id: z.number(),
        slug: z.string(),
        excerpt: z.string(),
        image: z.string(),
        category: z.string(),
        date: z.string(),
        author: z.object({
            name: z.string(),
            avatar: z.string().optional(),
            role: z.string().optional(),
        })
      })
    })
  }
})
