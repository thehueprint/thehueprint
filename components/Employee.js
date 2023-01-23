import Image from 'next/image';
import exampleImage from '../public/exampleImage.jpg';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Employee() {
  return (
    <article className="team_frame relative mb-16 flex w-full space-x-9 overflow-hidden">
      <div className="team_picture relative z-10 h-[37.5rem] w-[37.5rem] overflow-hidden rounded-full">
        <Image
          src={exampleImage}
          alt="example image"
          fill
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </div>

      {/* First Member article*/}
      <div className="team text w-[500px] flex-col">
        <article className="team_text h-2/4 pt-16">
          <h3 className=" text-lg font-semibold text-black ">Position</h3>
          <p className="pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
        </article>

        <blockquote
          className="team_quote flex text-lg font-semibold text-black"
          cite="http://www.worldwildlife.org/who/index.html"
        >
          <i>Lorem ipsum dolor sit amet. - </i>
          <cite>Glenn Law</cite>
        </blockquote>
      </div>

      <div className="absolute bottom-0 h-[13.75rem] w-[74rem] border-y-4 border-l-4 border-solid border-[#000000] text-right"></div>
    </article>
  );
}
