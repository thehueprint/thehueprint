import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/heroImage.png';
import Button from './Button';

export default function Hero() {
  return (
    <section className="hero">
      <div className=" flex flex-col md:flex-row">
        {/* Hero Image */}
        <div className="relative h-72 w-full md:h-[42rem] md:w-[39rem]">
          <Image
            className="object-fill"
            src={heroImage}
            alt="image displaying a colored objects with a mobile phone in the middle"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Hero Content */}
        <div className="flex flex-col md:h-[42rem] md:w-[41rem]">
          {/* Hero Box 1 */}

          <div className="px-5 pt-6  md:h-[26.125rem] md:w-[35rem] md:pt-[64px] md:pl-[32px] md:pr-[64px]">
            <h1 className="mb-6 font-cuprum text-2xl font-bold leading-7">
              Design Growth with The Hueprint&#39;s Creativity.
            </h1>
            <p className="mb-6 font-maitree text-sm font-normal leading-6">
              The Hueprint is a creative consulting agency that provides
              innovative solutions for businesses through digital media,
              assisting clients in achieving their business objectives.
            </p>
            {/* Maybe use a UI component instead*/}
            <Button text={'Learn More'} />
          </div>

          {/* Hero Box 2 */}
          <div className="flex h-72  md:h-[15.875rem]">
            {/* Hero Box 2 Text */}
            <article className="flex h-56 w-3/4 flex-col justify-center space-y-3 self-end bg-[#DAB701] p-6 md:h-[11.875rem] md:w-[26.5rem] md:p-9">
              <h2 className=" font-cuprum text-lg font-bold leading-7 text-white md:text-3xl">
                Have a creative idea?
              </h2>

              <p className="font-maitree text-sm font-normal leading-6 text-white md:text-2xl">
                Grow your business with creative solutions.
              </p>

              {/* Contact Us Link - Learn how to apply active styling and hover in the future */}
              <div className="w-1/2 ">
                <Link href="/">
                  <span className="font-maitree text-lg font-normal text-white underline">
                    Contact Us.
                  </span>
                </Link>
              </div>
            </article>

            {/* Hero Box 2 Blocks */}
            <div className="blocks w-1/4 self-start">
              <div className="h-16 w-full bg-[#D8B800] md:h-[64px] md:w-[168px]"></div>
              <div className="h-16 w-full bg-[#A98E00] md:h-[64px] md:w-[168px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
