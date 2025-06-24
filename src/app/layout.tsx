import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

// 1. Import Inter and assign to a CSS variable
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// 2. Editable metadata block
const siteTitle = 'Ekkolyth';
const siteDescription =
  "Hey! I'm Ekko. I stream and stuff, and you're welcome here <3";
const siteURL = 'https://ekkolyth.com';
const siteImage = `${siteURL}/og-image.png`;

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  viewport:
    'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteURL,
    siteName: siteTitle,
    images: [{ url: siteImage }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [siteImage],
    creator: '@ekkolyth',
  },
  metadataBase: new URL(siteURL),
};

// 3. Apply font to <body>
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className='h-full w-full overflow-x-hidden'
      >
      <body
        className={`${inter.variable} font-sans antialiased h-full w-full overflow-x-hidden m-0 p-0`}
      >
      <Analytics />
        {children}
      </body>
    </html>
  );
}
