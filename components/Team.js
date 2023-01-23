import Employee from './Employee';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Team() {
  return (
    <section className="team h-[110.4375rem] flex-col space-y-16 bg-white pl-16">
      <header className="my-16 space-y-16">
        <h3 className="text-lg font-semibold text-black ">Team</h3>
        <h2 className="text-2xl font-bold text-gray-900 md:text-4xl">
          Lorem ipsum dolor sit amet. <br className="lg:block" hidden /> Lorem,
          ipsum.
        </h2>
      </header>

      <Employee />
      <Employee />
    </section>
  );
}
