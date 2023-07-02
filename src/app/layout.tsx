import { Metadata } from 'next';
import { ThemeProvider } from '~/components/theme-provider';
import { allFontsVariable } from '~/styles/fonts';
import { cn } from '~/styles/utils';

import '~/styles/globals.css';

const favicons = [
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
];

export const metadata: Metadata = {
  title: 'QK NextJs Starter Template',
  description: 'QK NextJs Starter Template',

  icons: favicons,
  manifest: '/manifest.json',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn('font-sans antialiased', allFontsVariable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
