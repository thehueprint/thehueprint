import Card from './Card'

export default function Feature() {
  const addHover = `border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90`
  return (
    <section className="feature container h-[45.375rem] max-w-full bg-slate-900 p-16">
      <div className="h-[38.25rem] overflow-hidden border-4 border-solid border-[#DAB701] bg-gray-50 py-16">
        <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12">
          <div>
            <span className="text-lg font-semibold text-gray-600">Features</span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900 md:text-4xl">
              Lorem ipsum dolor sit amet. <br className="lg:block" hidden /> Lorem, ipsum.
            </h2>
          </div>
          <div className="mt-16 grid divide-x divide-y overflow-hidden border sm:grid-cols-2 lg:grid-cols-3 lg:divide-y-0 xl:grid-cols-4">
            <Card />
            <Card />
            <Card />
            {/*Last Card Component needs different classes for hover state */}
            <Card addHover={addHover} />
            {/**/}
          </div>
        </div>
      </div>
    </section>
  )
}
