export const siteConfig = {
  name: 'shadcn/ui',
  description: 'Beautifully designed components built with Radix UI and Tailwind CSS.',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'Server Components', 'Radix UI'],
  authors: [
    {
      name: 'Khanh Lam',
      url: 'https://quockhanhdev.com',
    },
  ],
  creator: 'Khanh Lam',

  url: 'https://quockhanhdev.com',
  ogImage: '/og.jpg',

  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
  },
  favicons: [
    // android-chrome
    ...[192, 512].map((size) => ({
      url: `/favicon/android-chrome/android-chrome-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      rel: 'icon',
    })),

    // android-icon
    ...[36, 48, 72, 96, 144, 192].map((size) => ({
      url: `/favicon/android-icon/android-icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      rel: 'icon',
    })),

    // apple-touch-icon
    ...[57, 60, 72, 76, 114, 120, 144, 152, 180, 192].map((size) => ({
      url: `/favicon/apple-touch-icon/apple-icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      rel: 'apple-touch-icon',
    })),
    {
      url: '/favicon/apple-touch-icon/apple-touch-icon.png',
      rel: 'apple-touch-icon',
      sizes: '180x180',
    },

    {
      rel: 'icon',
      sizes: '32x32',
      url: '/favicon/favicon-32x32.png',
    },
    {
      rel: 'icon',
      sizes: '16x16',
      url: '/favicon/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      url: '/favicon/favicon.ico',
    },
  ],
};

export type SiteConfig = typeof siteConfig;
