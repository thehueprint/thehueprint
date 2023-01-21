import Image from 'next/image';
import exampleImage from '../public/exampleImage.jpg';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Team() {
  return (
    <section className="team relative space-y-8 bg-white px-6 text-gray-500">
      <h3 className="pt-16 text-lg font-semibold text-gray-600 ">Team</h3>
      <h2 className="mt-4 pb-44 text-2xl font-bold text-gray-900 md:text-4xl">
        Lorem ipsum dolor sit amet. <br className="lg:block" hidden /> Lorem,
        ipsum.
      </h2>
      <div className="team_content relative mx-auto flex w-4/5 justify-between">
        <Image
          className="h-80 w-80 rounded-full object-cover"
          src={exampleImage}
          alt="example image"
          width={500}
          height={500}
        />
        <div className="team_text">
          <h3 className="pt-16 text-lg font-semibold text-gray-600 ">Team</h3>
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iure earum sunt impedit dolore?
          </p>
        </div>
      </div>

      {/* Second Member*/}
    </section>
  );
}
