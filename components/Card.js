import Link from 'next/link';

export default function Card() {
  return (
    <div className="card relative space-y-8 bg-white p-8 lg:h-[31.1875rem] lg:w-[28rem]">
      <article className="space-y-8">
        <div className="flex flex-row items-center">
          <h2 className="font-cuprum text-lg font-bold leading-9 text-black lg:text-4xl">
            Design
          </h2>
        </div>

        <p className="font-maitree text-base font-normal leading-10 text-black lg:text-2xl">
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
