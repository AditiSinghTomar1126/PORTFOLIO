import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Aditi Singh Tomar - Full Stack  Developer Portfolio',
        short_name: 'Aditi Singh Tomar Portfolio',
        description: 'Full Stack  Developer from Uttar Pradesh, India specializing in  React, and Next.js. Building scalable, high-performance web applications.',
        start_url: '/',
        display: 'standalone',
        background_color: '#0a0a0a',
        theme_color: '#6366f1',
        icons: [
            {
                src: '/icon.png',
                sizes: 'any',
                type: 'image/png',
            },
        ],
    }
}
