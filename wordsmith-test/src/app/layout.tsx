import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wordsmith test',
  description: 'Wordsmith test',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <main className='w-full h-dvh max-h-dvh flex gap-20 pt-10 px-20 overflow-hidden'>
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
