export default function Mission() {
  return (
    <section className="relative flex h-80 flex-col justify-center bg-[#4649C3] lg:block lg:h-[34.3125rem] lg:bg-[#EFEFEF]">
      {/*bordered boxes*/}

      <div className="relative hidden lg:block lg:h-[24.0625rem] lg:w-[39rem] lg:border-x-[20px] lg:border-b-[20px] lg:border-solid lg:border-[#4649c5]">
        <div className="relative mx-auto hidden lg:z-20 lg:block lg:h-64 lg:w-[28.375rem] lg:border-x-[15px] lg:border-b-[15px] lg:border-solid lg:border-[#DAB701]"></div>
      </div>

      <div className="relative h-56 w-full border-y-8 border-l-8 border-solid border-black lg:absolute lg:top-[5.8125rem] lg:right-0 lg:z-10 lg:flex lg:h-[26.3125rem] lg:w-[63.5625rem] lg:justify-end lg:border-y-[15px] lg:border-l-[15px] lg:border-[#FD0505]">
        {/*text inside*/}
        <article className="flex flex-col items-center justify-center space-y-3 self-center p-6 lg:mr-36 lg:block lg:h-72 lg:w-[28.25rem] lg:flex-row lg:p-0">
          <h2 className="font-cuprum text-lg font-bold leading-7 text-white lg:text-4xl lg:text-black">
            Creative Digital Solutions for Business Growth.
          </h2>

          <p className=" font-maitree text-sm font-normal leading-6 text-white lg:text-lg lg:text-black">
            Our mission at The Hueprint is to empower businesses by providing
            innovative digital solutions that drive growth and achieve their
            objectives through expert guidance and creative design.
          </p>
        </article>
      </div>
    </section>
  );
}
