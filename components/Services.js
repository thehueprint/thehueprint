import Card from './Card';

export default function Services() {
  return (
    <section className="bg-[#082331] md:h-[90.5rem] md:p-16">
      <div className="py-16">
        <h2 className="mt-4 mb-2 font-cuprum text-lg font-bold leading-10 text-white md:text-5xl">
          How We Can Help
        </h2>

        <div className="gap-x- mt-16 grid grid-cols-1 gap-y-4 md:w-full md:grid-cols-2 md:gap-y-2 md:gap-x-2">
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
