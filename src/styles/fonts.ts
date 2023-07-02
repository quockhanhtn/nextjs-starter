import { JetBrains_Mono as JetBrainsMono, Roboto } from 'next/font/google';

export const fontSans = Roboto({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const fontMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const allFontsVariable = `${fontSans.variable} ${fontMono.variable}`;
