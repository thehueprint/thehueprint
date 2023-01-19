import Image from 'next/image'
import exampleImage from '../public/exampleImage.jpg'

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Work() {
  return (
    <section className="Work container max-w-full bg-white">
      <div className="flex max-w-full">
        <div className="Work_FeatureProject h-[34.3125rem] w-[41.0625rem] bg-[#EFEFEF]">
          <h2 className="Work_FeatureProject_Title">Feature Project</h2>
          <p className="Work_FeatureProject_Description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel tincidunt lacinia, nunc nisl
            aliquet nisl, vel aliquet nisl nisl sit amet nisl. Sed euismod, nisl vel tincidunt lacinia, nunc nisl
            aliquet nisl, vel aliquet nisl nisl sit amet nisl.
          </p>
        </div>
        <Image
          className="h-[34.3125rem] w-[41.0625rem] object-cover"
          src={exampleImage}
          width={623}
          height={550}
          placeholder="blur"
          alt="feature project"
        />
      </div>
      <div className="Work_Projects flex max-w-full">
        <Image src={exampleImage} width={426.67} height={347} placeholder="blur" alt="feature project" />
        <Image src={exampleImage} width={426.67} height={347} placeholder="blur" alt="feature project" />
        <Image src={exampleImage} width={426.67} height={347} placeholder="blur" alt="feature project" />
      </div>
    </section>
  )
}
