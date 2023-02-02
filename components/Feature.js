import Card from './Card';

export default function Feature() {
  return (
    <section className="bg-slate-900 md:h-[90.5rem] md:p-16">
      <div className="py-16">
        <h2 className="mt-4 mb-2 font-cuprum text-5xl font-bold leading-10 text-white">
          How We Can Help
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-y-4 md:w-full md:grid-cols-2 md:gap-y-2 md:gap-x-2">
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
