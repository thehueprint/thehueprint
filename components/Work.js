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

      <div className="work_projects relative flex">
        {/*Right side of work feature section*/}
        {/*summary of project*/}

        <div className="work_feature h-full w-2/4 bg-[#EFEFEF]">
          <div className="work_feature-box flex h-96">
            <div className="blocks">
              <div className="box h-16 w-48 bg-slate-900"></div>
              <div className="box h-24 w-40 bg-[#A98E00]">yellow</div>
            </div>

            <article className=" h-64 self-end bg-[#4649C3] p-16">
              <h2 className="work_project-titl">Feature Project</h2>

              <p className="work_project-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel tincidunt lacinia, nunc nisl aliquet nisl, vel
                aliquet nisl nisl sit amet nisl.
              </p>
            </article>
          </div>

          <div className="blocks flex h-40">
            <div className=" h-2/4 w-3/12 bg-slate-900">black</div>
            <div className=" h-2/4 w-40 bg-[#A98E00]">yellow</div>
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
