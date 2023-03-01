import {
  Hero,
  Social,
  Mission,
  Services,
  Work,
  Team,
  News,
} from '../components';

export const metadata = {
  title: 'The Hue Print',
  href: '/favicon.ico',
  charset: 'UTF-8',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'HTML, CSS, JavaScript, NextJS',
};

const Page = () => (
  <main>
    <Hero />
    <Social classes="hidden lg:block" />
    <Mission />
    <Services />
    <Work />
    <Team />
    <Mission />
    <News />
  </main>
);

export default Page;
