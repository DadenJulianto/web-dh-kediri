import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.darulhijrahkediri.com',
      changeFrequency: 'yearly',
      priority: 1,
    },
  ]
}
