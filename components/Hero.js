import Image from 'next/image'
import heroImage from '../public/heroImage.png'

export default function Hero() {
  return (
    // Section is 42rem tall
    <section className="hero h-[42rem]">
      <div className="hero_content flex">
        <Image className="logo" src={heroImage} width={624} height={672} alt="hero image" />

        <div className="hero_content-text h-[42rem] w-[41rem]">
          <div className="hero_box-1 h-[26.125rem] pt-[64px] pl-[32px] pr-[64px]">
            <div className="hero_box-sub flex h-[20.875rem] w-[35rem] flex-col items-start gap-8">
              <h1 className="hero_h1 -order-none flex-grow-0 text-5xl">Lorem ipsum dolor sit amet, consectetur</h1>
              <p className="hero_subtitle order-1 flex-grow-0 self-stretch text-2xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, incidunt. Blanditiis optio sit quae
                suscipit ea magnam ipsa delectus voluptatem!
              </p>
              <button className="hero_button order-2 h-[46px] w-[161px] bg-slate-900 text-center text-white">
                Lorem press.
              </button>
            </div>
          </div>

          <div className="hero_box-2 flex h-[15.875rem]">
            <article className="hero_box-2-1 h-[11.875rem] w-[26.5rem] self-end bg-[#DAB701]">
              <h1 className="hero_h2">Lorem ipsum dolor sit amet consectetur.</h1>
              <p className="hero_subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
              <a href="/">Lorem ipsum</a>
            </article>

            <div className="blocks self-start">
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-slate-900"></div>
              <div className="hero_box-2-2 h-[64px] w-[168px] bg-[#A98E00]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
