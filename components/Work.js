import Image from 'next/image';
import featureImage from '../public/featureImage.jpg';
import exampleImage from '../public/exampleImage.jpg';

/* Things to work on  */
/* 1. create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */
/* 2. Research the size property for the Image component to figure out what are the best sizes for images loaded for responsiveness  */

export default function Work() {
  return (
    <section className="work max-w-screen-2xl bg-white">
      {/* 1st part of the work Section */}

      <div className="work_projects relative flex flex-row">
        {/*Right side of work feature section*/}
        {/*summary of project*/}

        <div className="work_feature h-full w-2/4 bg-[#EFEFEF]">
          <div className="work_feature-box flex h-96 flex-row justify-end">
            <div className="blocks flex flex-col">
              <div className="box-work-1 h-[112px] w-[195px] bg-slate-900"></div>
              <div className="box-work-2 h-24 w-40 self-end bg-[#4B4EC5]">
                yellow
              </div>
            </div>

            <article className="h-[17rem] w-1/2 self-end bg-[#4649C3] p-11">
              <h2 className="work_project-title text-white">Feature Project</h2>

              <p className="work_project-summary text-sm text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel tincidunt lacinia, nunc nisl aliquet nisl, vel
                aliquet nisl nisl sit amet nisl.
              </p>
            </article>
          </div>

          <div className="blocks flex h-40">
            <div className="box-work-3 h-full w-[160px] bg-slate-900"></div>
            <div className="box-work-4 h-24 w-40 bg-[#4B4EC5]"></div>
          </div>
        </div>

        {/*Right side of work feature section*/}
        {/*feature image of project*/}

        <div className="work_project-card relative w-2/4">
          <Image
            className="work_project-image object-cover"
            src={featureImage}
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
      <div className="Work_Projects flex h-80 w-auto">
        <div className="work_project-card relative w-2/4">
          <Image
            className="work_project-image object-cover"
            src={exampleImage}
            alt="feature project"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
          />
        </div>
        <div className="work_project-card relative w-2/4">
          <Image
            className="work_project-image object-cover"
            src={exampleImage}
            alt="feature project"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1280px) 50vw,
              33vw"
          />
        </div>
        <div className="work_project-card relative w-2/4">
          <Image
            className="work_project-image object-cover"
            src={exampleImage}
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
