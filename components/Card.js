import Image from 'next/image';
import exampleImage from '../public/exampleImage.jpg';
import Link from 'next/link';

export default function Card() {
  return (
    <div className="card relative space-y-8 bg-white p-8 md:h-[31.1875rem]">
      <article className="space-y-8">
        <div className="flex flex-row items-center">
          <div className="relative">
            <Image
              src={exampleImage}
              className="w-10"
              width={512}
              height={512}
              alt="Feature icon"
            />
          </div>
          <h2 className="font-cuprum text-4xl font-bold leading-9 text-black">
            Design
          </h2>
        </div>

        <p className="font-maitree text-2xl font-normal leading-10 text-black md:font-light">
          We create immersive digital experiences by using user-centered design
          practices to understand and solve business challenges through
          intuitive and engaging solutions.
        </p>

        <div className="w-1/2 ">
          <Link href="/">
            <span className="font-maitree text-lg font-normal text-black underline">
              Learn More.
            </span>
          </Link>
        </div>
      </article>
    </div>
  );
}
