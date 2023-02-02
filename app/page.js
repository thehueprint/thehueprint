import { Hero, Social, Mission, Feature, Work, Team } from '../components';

const Page = () => (
  <main>
    <Hero />
    <Social classes="hidden md:block" />
    <Mission />
    <Feature />
    <Work />
    <Team />
    <Mission />
  </main>
);

export default Page;
