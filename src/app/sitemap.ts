import type { MetadataRoute } from 'next'

const BASE_URL = 'https://portfolio.codeborges.com'

export default function sitemap(): MetadataRoute.Sitemap {
    const routes = ['', '/projects', '/curriculum', '/contact', '/app-ads.txt', '/gabriel.pdf']

    return routes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: route === '' ? 1 : 0.8,
    }))
}
