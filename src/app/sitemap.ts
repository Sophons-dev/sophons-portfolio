import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://sophons.tech',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.sophons.tech',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  ];
}
