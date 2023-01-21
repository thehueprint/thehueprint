import Image from 'next/image';
import exampleImage from '../public/exampleImage.jpg';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Work() {
  return (
    <section className="work max-w-screen-2xl bg-white">
      <div className="work_projects relative flex">
        {/*summary of project*/}

        <div className="work_feature bg-[#EFEFEF]">
          <div className="work_feature-box flex">
            {/* <div className="blocks">
              <div className="box h-[64px] w-[168px] bg-slate-900">black</div>
              <div className="box h-[64px] w-[168px] bg-[#A98E00]">yellow</div>
            </div> */}

            <article className=" bg-[#4649C3]">
              <h2 className="work_project-title text-lg font-semibold text-black">
                Feature Project
              </h2>

              <p className="work_project-summary text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod, nisl vel tincidunt lacinia, nunc nisl aliquet nisl, vel
                aliquet nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt
                lacinia, nunc nisl aliquet nisl, vel aliquet nisl nisl sit amet
                nisl.
              </p>
            </article>
          </div>

          {/* <div className="blocks h-40">
            <div className="hero_box-2-2 h-[64px] w-[168px] bg-slate-900">
              black
            </div>
            <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#A98E00]">
              yellow
            </div>
          </div> */}
        </div>

        {/*Right side of work feature section*/}
        {/*feature image of project*/}

        <div className="work_project-card relative w-2/4">
          <Image
            className="work_project-image object-cover"
            src={exampleImage}
            alt="feature project"
            fill
          />
        </div>
      </div>

      {/* 3 preview images of other projects */}
      <div className="Work_Projects flex h-80 w-auto">
        <div className="work_project-card object-fit relative w-2/4">
          <Image
            className="work_project-image w-2/4"
            src={exampleImage}
            alt="feature project"
            fill
          />
        </div>
        <div className="work_project-card object-fit relative w-2/4">
          <Image
            className="work_project-image"
            src={exampleImage}
            alt="feature project"
            fill
          />
        </div>
        <div className="work_project-card object-fit relative w-2/4">
          <Image
            className="work_project-image"
            src={exampleImage}
            alt="feature project"
            fill
          />
        </div>
      </div>
    </section>
  );
}
