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

      {/* First Member*/}
      <div className="team_content relative mx-auto flex w-4/5 justify-between">
        <div className="team_picture relative h-80 w-80">
          <Image
            className=" rounded-full object-cover"
            src={exampleImage}
            alt="example image"
            fill
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>

        {/* First Member article*/}
        <article className="team_text p-16">
          <h3 className="pt-16 text-lg font-semibold text-gray-600 ">Team</h3>
          <p className="pt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            iure earum sunt impedit dolore?
          </p>
        </article>
      </div>

      {/* Second Member*/}
    </section>
  );
}
