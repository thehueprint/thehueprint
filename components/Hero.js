import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../public/heroImage.png';
import Button from './Button';

export default function Hero() {
  return (
    // Section is 42rem tall
    <section className="hero">
      <div className="hero_content flex">
        {/* Hero Image */}
        <div className="hero_image relative h-[42rem] w-[39rem]">
          <Image
            className="logo"
            src={heroImage}
            alt="hero image"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            priority
          />
        </div>

        <div className="hero_content-text h-[42rem] w-[41rem]">
          <div className="hero_box-1 h-[26.125rem] pt-[64px] pl-[32px] pr-[64px]">
            <div className="hero_box-sub flex h-[20.875rem] w-[35rem] flex-col items-start gap-8">
              <h1 className="hero_h1 -order-none flex-grow-0">
                Unleash vibrant digital solutions with The Hueprint.
              </h1>
              <p className="hero_subtitle order-1 flex-grow-0 self-stretch">
                The Hueprint is a creative consulting agency that provides
                innovative solutions for businesses through digital media,
                assisting clients in achieving their business objectives.
              </p>
              <Button text={'Learn More'} />
            </div>
          </div>

          <div className="hero_box-2 flex h-[15.875rem]">
            <article className="hero_box-2-1 h-[11.875rem] w-[26.5rem] self-end bg-[#DAB701] p-9">
              <h2 className="hero_h2">Have a creative idea?</h2>
              <p className="hero_subtitle">
                Grow your business with creative solutions. Contact The Hueprint
                today.
              </p>
              <Link href="/about">Contact Us.</Link>
            </article>

            <div className="blocks self-start">
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-slate-900"></div>
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#A98E00]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
