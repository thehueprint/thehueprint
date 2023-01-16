import Image from 'next/image'
import heroImage from '../public/heroImage.png'

export default function Hero() {
  return (
    // Section is 42rem tall
    <section className="hero container mx-auto h-[42rem]">
      <div className="hero_content flex">
        <Image src={heroImage} width={624} height={672} alt="hero image" />

        <div className="hero_content-text h-[42rem] w-[41rem]">
          <div className="hero_box-1 mt-[64px] ml-[32px] mr-[64px] h-[22.125rem]">
            <div className="hero_box-sub h-[20.875rem] w-[35rem] ">
              <h1 className="hero_h1 text-5xl">Lorem ipsum dolor sit amet, consectetur</h1>
              <p className="hero_subtitle text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, incidunt. Blanditiis optio sit quae
                suscipit ea magnam ipsa delectus voluptatem!
              </p>
              <button className="hero_button py=[2rem] h-[2.875rem] w-[10.0625rem] bg-slate-900 px-[0.625rem] text-white">
                Lorem press.
              </button>
            </div>
          </div>

          <div className="hero_box-2 flex h-[15.875rem]">
            <div className="hero_box-2-1 h-[11.875rem] w-[26.5rem] self-end bg-[#DAB701]">
              <h1 className="hero_h2">Lorem ipsum dolor sit amet consectetur.</h1>
              <p className="hero_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <a href="/">Lorem ipsum</a>
            </div>
            <div className="blocks self-start">
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#000000]"></div>
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#A98E00]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
