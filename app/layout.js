import './globals.css';
import { Header, Footer } from '../components';
import { Cuprum, Maitree } from '@next/font/google';

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
