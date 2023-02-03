import Image from 'next/image';
import exampleImage from '../public/exampleImage.jpg';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Employee() {
  return (
    <article className="ml-auto grid w-[76rem] grid-cols-2 space-y-8 bg-zinc-400">
      <div className="relative h-72 w-72 md:h-[36rem] md:w-[36rem]">
        <Image
          className="rounded-full"
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
        <h2 className="mt-4 mb-2 font-cuprum text-3xl font-bold leading-9 text-black">
          Position
        </h2>
        <p className="font-maituree mb-2 text-sm font-normal leading-10 text-black md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Curabitur tempus urna at turpis condimentum
          lobortis.
        </p>
      </div>

      {/* Quote*/}
      <div className="mb-4 h-20 w-full border-y-8 border-l-8 border-solid border-[#DAB701] md:w-[74rem]">
        <article className="p-6 md:h-[11.875rem] md:w-[26.5rem]">
          <blockquote
            className="text-sm font-light text-black"
            cite="http://www.worldwildlife.org/who/index.html"
          >
            <i>Lorem ipsum dolor sit amet. - </i>
            <cite>Glenn Law</cite>
          </blockquote>
        </article>
      </div>
    </article>
  );
}
