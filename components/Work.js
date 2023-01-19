import Image from 'next/image'
import exampleImage from '../public/exampleImage.jpg'

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Work() {
  return (
    <section className="work bg-white">
      <div className="work_projects relative flex">
        {/*summary of project*/}

        <div className="work_feature w-2/4 bg-[#EFEFEF]">
          <div className="work_feature-box flex">
            <div className="blocks">
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-slate-900">black</div>
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#A98E00]">yellow</div>
            </div>

            <article className="h-72 w-1/2 bg-[#4649C3]">
              <h2 className="work_project-title text-lg font-semibold text-black">Feature Project</h2>
              <p className="work_project-summary text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc
                nisl aliquet nisl, vel aliquet nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt lacinia, nunc
                nisl aliquet nisl, vel aliquet nisl nisl sit amet nisl.
              </p>
            </article>
          </div>

          <div className="blocks">
            <div className="hero_box-2-2 h-[64px] w-[168px] bg-slate-900">black</div>
            <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#A98E00]">yellow</div>
          </div>
        </div>

        {/*feature image of project*/}

        <div className="work_project-image w-2/4">
          <Image src={exampleImage} placeholder="blur" alt="feature project" />
        </div>
      </div>

      {/* 3 preview images of other projects */}
      <div className="Work_Projects flex w-2/6">
        <Image src={exampleImage} placeholder="blur" alt="feature project" />
        <Image src={exampleImage} placeholder="blur" alt="feature project" />
        <Image src={exampleImage} placeholder="blur" alt="feature project" />
      </div>
    </section>
  )
}
