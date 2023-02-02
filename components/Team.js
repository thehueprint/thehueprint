import Employee from './Employee';

/* create a carousel that has two main divs, One holding the summary of project, one holding the image of project, and 3 divs of preview images of additional projects  */

export default function Team() {
  return (
    <section className="space-y-16 bg-white p-6">
      <div className="py-16">
        <h2 className="mt-4 mb-2 font-cuprum text-5xl font-bold leading-10 text-black">
          Meet The Team
        </h2>

        <div className="mt-16 space-y-16">
          <Employee />
          <Employee />
        </div>
      </div>
    </section>
  );
}
