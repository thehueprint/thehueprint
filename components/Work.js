import Image from 'next/image';
import fwi from '../public/fwi.png';
import wi from '../public/wi.png';
import Link from 'next/link';

/* Things to work on  */
/* 1. create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */
/* 2. Research the size property for the Image component to figure out what are the best sizes for images loaded for responsiveness  */

export default function Work() {
  return (
    <section className="bg-white">
      {/* Maybe make into a grid */}
      {/* 1st part of the work Section */}

      <div className="relative flex flex-col md:h-[37.5rem] md:flex-row">
        {/*left side of work feature section*/}
        {/*summary of project*/}

        <div className="w-full md:w-1/2">
          {/* left box */}
          <div className="md:flex md:h-96 md:flex-row md:justify-end">
            {/* Boxes */}
            <div className="hidden md:flex md:flex-col">
              {/*could make with 320px */}
              <div className="bg-[#D8B800] md:h-[112px] md:w-[195px]"></div>
              <div className="bg-[#A98E00] md:h-24 md:w-40 md:self-end"></div>
            </div>

            {/* Project Article */}
            <article className="flex h-[300px] w-full flex-col justify-center space-y-3 bg-[#D8B800] p-6 md:h-[17rem] md:w-1/2 md:self-end">
              <h2 className="font-cuprum text-2xl font-bold leading-7 text-white md:text-3xl">
                Feature Project.
              </h2>

              <p className="text-medium font-maitree font-normal leading-6 text-white md:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                ex.
              </p>

              <div className="w-1/2 ">
                <Link href="/">
                  <span className="font-maitree text-lg font-normal text-white underline">
                    Learn More.
                  </span>
                </Link>
              </div>
            </article>
          </div>

          {/* Boxes */}
          <div className="blocks hidden h-40 md:flex md:h-[13.5rem]">
            <div className="h-full w-[160px] bg-[#D8B800]"></div>
            <div className="h-24 w-40 bg-[#A98E00]"></div>
          </div>
        </div>

        {/*Right side of work feature section*/}
        {/*feature image of project*/}
        <div className="relative h-60 w-full md:h-full md:w-1/2">
          <Image
            className="object-cover"
            src={fwi}
            alt="feature project"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>

      {/* 2nd part of the work Section */}
      {/* 3 preview images of other projects */}
      <div className="hidden md:flex md:w-auto">
        <div className="relative hidden h-80 w-2/4 md:block">
          <Image
            className="work_project-image object-cover"
            src={wi}
            alt="feature project"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
          />
        </div>

        <div className="relative hidden h-80 w-2/4 md:block">
          <Image
            className="object-cover"
            src={wi}
            alt="feature project"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
          />
        </div>

        <div className="relative hidden h-80 w-2/4 md:block">
          <Image
            className="work_project-image object-cover"
            src={wi}
            alt="feature project"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
      </div>
    </section>
  );
}
