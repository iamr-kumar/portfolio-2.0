import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Ritik - Software Engineer',
  description: 'Portfolio of Ritik, a passionate software engineer specializing in full-stack development and system design.',
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
