import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  metadataBase: new URL('https://devritik.com'),
  title: {
    default: 'Ritik Kumar',
    template: '%s | Ritik Kumar',
  },
  description: 'Portfolio of Ritik, a passionate software engineer specializing in full-stack development, system design, and scalable solutions.',
  keywords: ['Software Engineer', 'Full Stack Developer', 'System Design', 'React', 'Next.js', 'Node.js', 'Portfolio', 'Ritik'],
  authors: [{ name: 'Ritik Kumar' }],
  creator: 'Ritik',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://devritik.com',
    title: 'Ritik Kumar',
    description: 'Portfolio of Ritik, a passionate software engineer specializing in full-stack development and system design.',
    siteName: 'Ritik Kumar Portfolio',
    images: [
      {
        url: '/icon.png',
        width: 1200,
        height: 630,
        alt: 'Ritik Kumar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ritik Kumar',
    description: 'Portfolio of Ritik, a passionate software engineer specializing in full-stack development and system design.',
    images: ['/icon.png'],
    creator: '@itsr_kumar',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import { Background } from '@/components/ui/background';
import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <Background />
        {children}
        <Toaster theme="dark" position="bottom-right" />
      </body>
    </html>
  );
}
