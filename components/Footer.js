import Link from 'next/link';
//import social icons
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer bg-black px-16 py-20 text-white">
      {/** Footer Top */}
      <section className="footer_content relative mb-20 flex">
        <div className="w-1/2">
          {/** Footer Brand */}
          <article className="h-1/2 w-2/3">
            <h2 className="footer_brand-title text-2xl font-semibold text-white">
              The Hueprint
            </h2>
            <p className="footer_brand-summary mb-11 text-sm font-light text-[#8C8C8C]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit
              ab debitis voluptate voluptatem iusto aut delectus neque, cum
              doloribus velit.
            </p>

            <div className="footer_mail">
              <a
                href="mailto:hello@thehueprint.com"
                className="footer_mail-link text-base text-white"
              >
                hello@thehueprint.com
              </a>
            </div>
          </article>

          {/** Footer Social */}
          <div className="footer_social-content h-1/2 w-[261px] text-white">
            <h2 className="footer_social-title text-2xl font-semibold">
              Social Media
            </h2>
            <p className="footer_social-summary mb-11 text-sm font-light text-[#8C8C8C]">
              Be the first one to know about discounts, offers and events
            </p>

            {/** Social Icons */}
            <div className="footer_social-icons w-32">
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
          </div>
        </div>

        {/** Footer Form */}
        <div className="footer_form w-1/2">
          <h2 className="form_title text-2xl font-semibold text-white">
            Contact Us
          </h2>
          <p className="form_summary text-sm font-light text-[#8C8C8C]">
            Lorem ipsum dolor sit amet.
          </p>
          <form action="" className="mt-6 flex flex-col space-y-3">
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
            <button className="bg-[#4649C3] p-4" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/** Footer Bottom */}
      <section className="footer_bottom  max-w-full items-center">
        <div className="footer_bottom-content flex flex-row justify-between">
          <ul className="footer_nav flex w-[31.125rem] justify-between text-sm font-light text-[#8C8C8C]">
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

          <div className="footer_copyright">
            <p className="footer_copyright-text text-sm font-light text-[#8C8C8C]">
              © 2000-2021, All Rights Reserved
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
