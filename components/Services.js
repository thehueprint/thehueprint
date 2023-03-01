import Card from './Card';

export default function Services() {
  return (
    <section className="bg-[#082331] p-[172px] lg:h-[90.5rem]">
      <div className="">
        <h2 className="font-cuprum text-3xl font-bold leading-10 text-white lg:text-5xl">
          How We Can Help
        </h2>

        <div className="mt-16 inline-grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-8">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
