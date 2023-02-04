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
    <section className="relative flex flex-col lg:block lg:h-[43.75rem]">
      <div className="mb-16 space-y-16 px-5 pt-16 lg:m-auto lg:flex lg:lg:h-[30rem] lg:w-[1152px] lg:flex-row lg:space-y-0 lg:bg-slate-50 lg:p-0 lg:py-16">
        {/* newsletter sign up */}
        <article className="space-y-3 lg:flex lg:w-[28.25rem] lg:flex-col lg:px-16">
          <h2 className="font-cuprum text-2xl font-bold leading-7 lg:text-3xl lg:text-black">
            Subscribe!
          </h2>
          <p className=" text-medium font-maitree font-normal leading-6 lg:text-lg lg:text-black">
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
        <article className="space-y-3 lg:flex lg:flex-col lg:justify-between lg:pr-16">
          <h2 className="font-cuprum text-2xl font-bold leading-7 lg:text-3xl lg:text-black">
            Feed
          </h2>
          <p className=" text-medium font-maitree font-normal leading-6 lg:text-lg lg:text-black">
            Read our news publications and stay up to date with our latest blog
            posts.
          </p>

          {/** News Feed Map */}
          {solutions.map((item) => (
            <div
              key={item.id}
              className="flex flex-col space-y-3 divide-y divide-solid divide-slate-800 border-b-2 py-3 font-maitree lg:flex-row"
            >
              <Link
                className="flex flex-col justify-between lg:flex-row lg:items-center"
                key={item.id}
                href={item.href}
              >
                <h3 className="w-40 font-cuprum text-sm leading-7 text-[#4649C3]">
                  {item.title}
                </h3>
                <p className="text-medium mt-2 font-maitree font-normal leading-6 lg:mt-0 lg:w-[25.625rem] lg:text-xl">
                  {item.description}
                </p>

                <div className="mt-2 flex w-[7.4375rem] flex-row items-center lg:mt-0 lg:justify-center lg:space-x-1">
                  <FaChevronRight
                    className="hidden h-3 w-3 text-[#8C8C8C] lg:block"
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
