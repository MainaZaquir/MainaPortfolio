import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maina Zaquir - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Next.js, and modern web technologies. Building digital experiences that run fast, scale easily, and feel like magic.',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'Web Development', 'JavaScript', 'TypeScript'],
  authors: [{ name: 'Maina Zaquir' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Maina Zaquir - Full Stack Developer',
    description: 'Building digital experiences that run fast, scale easily, and feel like magic.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maina Zaquir - Full Stack Developer',
    description: 'Building digital experiences that run fast, scale easily, and feel like magic.',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}