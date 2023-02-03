export default function Mission() {
  return (
    <section className="relative flex h-80 flex-col justify-center bg-[#4649C3] md:block md:h-[34.3125rem] md:bg-[#EFEFEF]">
      {/*bordered boxes*/}

      <div className="relative hidden md:block md:h-[24.0625rem] md:w-[39rem] md:border-x-[20px] md:border-b-[20px] md:border-solid md:border-[#4649c5]">
        <div className="relative mx-auto hidden md:z-20 md:block md:h-64 md:w-[28.375rem] md:border-x-[15px] md:border-b-[15px] md:border-solid md:border-[#DAB701]"></div>
      </div>

      <div className="relative h-56 w-full border-y-8 border-l-8 border-solid border-black md:absolute md:top-[5.8125rem] md:right-0 md:z-10 md:flex md:h-[26.3125rem] md:w-[63.5625rem] md:justify-end md:border-y-[15px] md:border-l-[15px] md:border-[#FD0505]">
        {/*text inside*/}
        <article className="flex flex-col items-center justify-center space-y-3 self-center p-6 md:mr-36 md:block md:h-72 md:w-[28.25rem] md:flex-row md:p-0">
          <h2 className="font-cuprum text-lg font-bold leading-7 text-white md:text-4xl md:text-black">
            Creative Digital Solutions for Business Growth.
          </h2>

          <p className=" font-maitree text-sm font-normal leading-6 text-white md:text-lg md:text-black">
            Our mission at The Hueprint is to empower businesses by providing
            innovative digital solutions that drive growth and achieve their
            objectives through expert guidance and creative design.
          </p>
        </article>
      </div>
    </section>
  );
}
