import './globals.css';
import { Header, Footer } from '../components';
import { Cuprum, Maitree } from 'next/font/google';

const cuprum = Cuprum({
  subsets: ['latin'],
  variable: '--font-cuprum',
  display: 'optional',
});

const maitree = Maitree({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-maitree',
  display: 'optional',
});

export const metadata = {
  title: 'The Hue Print',
  description:
    'The Hue Print is a full-service creative agency based in the heart of Brooklyn, New York. We specialize in branding, web design, and digital marketing.',
  href: '/favicon.ico',
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'HTML, CSS, JavaScript, NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={'${cuprum.variable} ${maitree.variable}'}>
      <body className="container mx-auto max-w-7xl">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
