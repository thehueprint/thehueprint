import Card from './Card';

export default function Services() {
  return (
    <section className="bg-[#082331] p-8 lg:h-[90.5rem] lg:p-16">
      <div className="py-16">
        <h2 className="mt-4 mb-2 font-cuprum text-3xl font-bold leading-10 text-white lg:text-5xl">
          How We Can Help
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-y-2 md:gap-x-2 lg:w-full">
          <Card />
          <Card />
          <Card />
          {/*Last Card Component needs different classes for hover state */}
          <Card />
          {/**/}
        </div>
      </div>
    </section>
  );
}
