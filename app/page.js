import {
  Hero,
  Social,
  Mission,
  Services,
  Work,
  Team,
  News,
} from '../components';

const Page = () => (
  <main>
    <Hero />
    <Social classes="hidden md:block" />
    <Mission />
    <Services />
    <Work />
    <Team />
    <News />
  </main>
);

export default Page;
