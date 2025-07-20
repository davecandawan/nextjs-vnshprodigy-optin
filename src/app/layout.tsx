import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'VNSH Prodigy Giveaway',
  description: 'Enter Today And You May Take a Home a FREE Weapon',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'VNSH Prodigy Giveaway',
    description: 'Enter Today And You May Take a Home a FREE Weapon',
    type: 'website',
    images: [
      {
        url: '/favicon.png',
        width: 512,
        height: 512,
        alt: 'VNSH Prodigy Giveaway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VNSH Prodigy Giveaway',
    description: 'Enter Today And You May Take a Home a FREE Weapon',
    images: ['/favicon.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  );
}
