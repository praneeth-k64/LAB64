import type { Metadata } from 'next';
import { Rajdhani, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { AnimationProvider } from '@/components/providers/AnimationProvider';

// Option 2B: High Contrast - Rajdhani + IBM Plex Sans
const rajdhani = Rajdhani({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-rajdhani'
});
const ibmPlexSans = IBM_Plex_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-sans'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lab64.ai'),
  title: {
    default: 'LAB64 - Visionary AI & Drone Technology Innovation',
    template: '%s | LAB64',
  },
  description:
    'LAB64 is a visionary group company pioneering artificial intelligence, agentic systems, and drone communications technology.',
  keywords: [
    'LAB64',
    'AI innovation',
    'drone technology',
    'agentic systems',
    'artificial intelligence companies',
  ],
  authors: [{ name: 'LAB64' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lab64.ai',
    siteName: 'LAB64',
    title: 'LAB64 - Visionary AI & Drone Technology Innovation',
    description: 'Pioneering the future with cutting-edge AI and drone technology solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LAB64 - AI Innovation Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LAB64 - AI & Drone Innovation',
    description: 'Pioneering the future with cutting-edge technology',
    images: ['/twitter-image.jpg'],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}
