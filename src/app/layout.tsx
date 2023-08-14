import type { Metadata } from 'next';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { allFontsVariable } from '@/styles/fonts';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  creator: siteConfig.creator,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: siteConfig.favicons,
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', allFontsVariable)}>{children}</body>
    </html>
  );
}
