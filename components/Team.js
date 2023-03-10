import Image from 'next/image';
import exampleImage from '../public/exampleImage.jpg';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Team() {
  return (
    <section className=" mb-40 space-y-32 bg-white">
      <div className="pl-16 lg:pt-16">
        <h2 className="mb-2 font-cuprum text-lg font-bold leading-10 text-black lg:mt-4 lg:text-5xl">
          Meet The Team
        </h2>
      </div>

      {/* First Member*/}
      <div className="relative">
        <article className="relative ml-auto grid w-[76rem] grid-cols-2 space-y-3">
          {/* First Member image*/}
          <div className="relative z-10 h-72 w-72 lg:h-[36rem] lg:w-[36rem]">
            <Image
              className="rounded-full object-cover"
              src={exampleImage}
              alt="example image"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          {/* First Member article*/}
          <div>
            <h2 className="mt-4 mb-2 font-cuprum font-bold leading-9 text-black lg:text-3xl">
              Position
            </h2>
            <p className="w-3/4 font-maitree text-sm font-normal leading-10 text-black lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>

          {/*First Member Quote*/}
          <div className="absolute bottom-0 right-0 flex h-20 w-full flex-row justify-end border-y-8 border-l-8 border-solid border-[#DAB701] lg:h-[13.25rem] lg:w-[71.8125rem] ">
            <article className="relative my-auto w-[38rem] pt-6">
              <blockquote
                className="font-cuprum text-sm font-normal leading-10 text-black lg:text-xl"
                cite="http://www.worldwildlife.org/who/index.html"
              >
                <i>Lorem ipsum dolor sit amet. - </i>
                <cite>Glenn Law</cite>
              </blockquote>
            </article>
          </div>
        </article>
      </div>

      {/* Second Member*/}
      <div className="relative">
        <article className="relative ml-auto grid w-[76rem] grid-cols-2 space-y-3">
          {/* Second Member article*/}
          <div>
            <h2 className="mt-4 mb-2 font-cuprum font-bold leading-9 text-black lg:text-3xl">
              Position
            </h2>
            <p className="font-maitree text-sm font-normal leading-10 text-black lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Curabitur tempus urna at turpis condimentum
              lobortis.
            </p>
          </div>

          {/* Second Member image*/}
          <div className="relative z-10 h-72 w-72 lg:h-[36rem] lg:w-[36rem]">
            <Image
              className="rounded-full object-cover"
              src={exampleImage}
              alt="example image"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>

          {/* Second Member Quote*/}
          <div className="absolute bottom-0 right-0 flex h-20 w-full flex-row justify-start border-y-8 border-l-8 border-solid border-[#4649C3] lg:h-[13.25rem] lg:w-[76rem]">
            <article className="relative my-auto w-[38rem] pt-6 text-center">
              <blockquote
                className="text-center font-cuprum text-sm font-normal leading-10 text-black lg:w-2/3 lg:text-xl"
                cite="http://www.worldwildlife.org/who/index.html"
              >
                <i>Lorem ipsum dolor sit amet. - </i>
                <cite>Glenn Law</cite>
              </blockquote>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
}
