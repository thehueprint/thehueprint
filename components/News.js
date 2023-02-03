import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';

const solutions = [
  {
    id: 1,
    title: 'Analytics',
    description:
      'Get a better understanding of where your traffic is coming from.',
    href: '#',
  },
  {
    id: 2,
    title: 'Engagement',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
  },
  {
    id: 3,
    title: 'Security',
    description: "Your customers' data will be safe and secure.",
    href: '#',
  },
];

export default function News() {
  return (
    <section className="relative flex flex-col md:block md:h-[43.75rem]">
      <div className="mb-16 space-y-16 px-5 pt-16 md:m-auto md:flex md:md:h-[30rem] md:w-[1152px] md:flex-row md:space-y-0 md:bg-slate-50 md:p-0 md:py-16">
        {/* newsletter sign up */}
        <article className="space-y-3 md:flex md:w-[28.25rem] md:flex-col md:px-16">
          <h2 className="font-cuprum text-2xl font-bold leading-7 md:text-3xl md:text-black">
            Subscribe!
          </h2>
          <p className=" text-medium font-maitree font-normal leading-6 md:text-lg md:text-black">
            Sign up to our newsletter.
          </p>

          {/** Newsletter Sign Up */}
          <div className="self-end">
            <form action="" className="flex flex-row font-cuprum">
              <input
                className="border-none bg-[#343538] text-sm font-light text-[#8C8C8C]"
                type="email"
                placeholder="Sign up to our newsletter"
              />
              <button
                className="bg-[#A98E00] p-3 font-cuprum text-white"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </article>

        {/* news/blog feed */}
        <article className="space-y-3 md:flex md:flex-col md:justify-between md:pr-16">
          <h2 className="font-cuprum text-2xl font-bold leading-7 md:text-3xl md:text-black">
            Feed
          </h2>
          <p className=" text-medium font-maitree font-normal leading-6 md:text-lg md:text-black">
            Read our news publications and stay up to date with our latest blog
            posts.
          </p>

          {/** News Feed Map */}
          {solutions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-3 divide-y divide-solid divide-slate-800 border-b-2 py-3 font-maitree md:flex-row"
            >
              <Link
                className="flex flex-col justify-between md:flex-row md:items-center"
                key={item.id}
                href={item.href}
              >
                <h3 className="w-40 font-cuprum text-sm leading-7 text-[#4649C3]">
                  {item.title}
                </h3>
                <p className="text-medium mt-2 font-maitree font-normal leading-6 md:mt-0 md:w-[25.625rem] md:text-xl">
                  {item.description}
                </p>

                <div className="mt-2 flex w-[7.4375rem] flex-row items-center md:mt-0 md:justify-center md:space-x-1">
                  <FaChevronRight
                    className="hidden h-3 w-3 text-[#8C8C8C] md:block"
                    aria-hidden="true"
                  />
                  <p className="font-maitree text-sm leading-6 text-black">
                    Read more
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
