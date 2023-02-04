import Link from 'next/link';
//import social icons
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#082331] px-6 pt-16 text-white lg:px-16 lg:py-20">
      {/** Footer Top */}
      <section className="relative mb-20 flex flex-col lg:flex-row">
        <div className="w-1/2">
          {/** Footer Brand */}
          <article className="hidden lg:block lg:h-1/2 lg:w-2/3 lg:space-y-3">
            <h2 className="font-cuprum text-2xl font-semibold text-white">
              The Hueprint
            </h2>
            <p className="font-maitree text-sm font-light text-[#8C8C8C]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              ab debitis voluptate voluptatem iusto aut delectus neque, cum
              doloribus velit.
            </p>

            <div className="footer_mail">
              <a
                href="mailto:hello@thehueprint.com"
                className="flex flex-row items-center font-maitree text-base text-white"
              >
                <div>
                  <FaEnvelope />
                </div>
                <div className="ml-2">hello@thehueprint.com</div>
              </a>
            </div>
          </article>

          {/** Footer Social */}
          <article className="footer_social-content h-1/2 w-[261px] space-y-3 text-white">
            <h2 className="font-cuprum text-2xl font-semibold">Social Media</h2>
            <p className="font-maitree text-sm font-light text-[#8C8C8C]">
              Be the first one to know about discounts, offers and events
            </p>

            {/** Social Icons */}
            <div className="w-32">
              <ul className="social_icons-links flex flex-row justify-between">
                <li>
                  <a href="http://instagram.com/thehueprintagency">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="http://linkedin.com/thehuepringagency">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="http://twitter.com/thehueprintagency">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </article>
        </div>

        {/** Footer Form */}
        <div className="order-first mb-16 space-y-3 lg:order-none lg:w-1/2">
          <h2 className="font-cuprum text-2xl font-semibold text-white">
            Contact Us
          </h2>
          <p className="font-maitree text-sm font-light text-[#8C8C8C]">
            We usually respond within 24 hours.
          </p>
          <form action="" className="mt-6 flex flex-col space-y-3 font-cuprum">
            <input
              className="border-none bg-[#343538] text-sm font-light text-[#8C8C8C]"
              type="text"
              placeholder="Name"
            />
            <input
              className="border-none bg-[#343538] text-sm font-light text-[#8C8C8C]"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="border-none bg-[#343538] text-sm font-light text-[#8C8C8C]"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button
              className="bg-[#4649C3] p-4 font-cuprum text-white"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/** Footer Bottom */}
      <section className="fb flex flex-col justify-between lg:flex-row lg:items-center">
        <ul className="fl mb-4 flex flex-col justify-between space-y-6 font-cuprum text-sm font-light text-[#8C8C8C] lg:mb-0 lg:w-[31.125rem] lg:flex-row lg:space-y-0">
          <li className="footer_nav-link">
            <Link href="/">About</Link>
          </li>
          <li className="footer_nav-link">
            <Link href="/">Contact</Link>
          </li>
          <li className="footer_nav-link">
            <Link href="/">Privacy Policy</Link>
          </li>
          <li className="footer_nav-link">
            <Link href="/">Sitemap</Link>
          </li>
          <li className="footer_nav-link">
            <Link href="/">Terms of Use</Link>
          </li>
        </ul>

        <div className="copyright">
          <p className="font-cuprum text-sm font-light text-[#8C8C8C]">
            © 2000-2021, All Rights Reserved
          </p>
        </div>
      </section>
    </footer>
  );
}
