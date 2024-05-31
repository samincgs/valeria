import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/Navbar';
import Providers from '../providers/providers';
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Valeria',
  description:
    'Discover your perfect getaway with Valeria. From cozy cabins to urban lofts, explore a world of unique accommodations curated for every traveler. Start planning your next escape today!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en' suppressHydrationWarning>
        <body className={inter.className}>
          <Providers>
            <Navbar />
            <main className='container py-10'>{children}</main>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
