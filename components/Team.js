import Image from 'next/image'
import exampleImage from '../public/exampleImage.jpg'

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Team() {
  return (
    <section className="team container m-auto space-y-8 bg-white px-6 text-gray-500 md:px-12">
      <div className="relative min-w-full">
        <span className="text-lg font-semibold text-gray-600">Team</span>
        <h2 className="mt-4 pt-16 pb-44 text-2xl font-bold text-gray-900 md:text-4xl">
          Lorem ipsum dolor sit amet. <br className="lg:block" hidden /> Lorem, ipsum.
        </h2>

        <Image
          className="absolute top-0 left-0 rounded-full object-cover"
          src={exampleImage}
          alt="example image"
          height={648}
          width={611}
        />
        <div className="absolute top-[5.8125rem] left-[6rem] h-[13.25rem] w-[71.8125rem] border-y-4 border-l-4 border-solid border-[#000000] "></div>
      </div>
    </section>
  )
}
