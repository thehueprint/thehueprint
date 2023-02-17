import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Social({ classes }) {
  return (
    <section
      className={`${classes} ${'social text-white lg:flex lg:h-[8rem] lg:max-w-full'}`}
    >
      <div className="flex h-[8rem] w-[39rem] items-center justify-between bg-[#082331]">
        <div className="mx-auto w-32">
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

      {/*boxes container*/}
      <div className="flex w-[41rem] place-content-end">
        <div className="h-[64px] w-[101px] bg-[#A98E00]"></div>
        <div className="h-[128px] w-[131px] bg-[#D8B800]"></div>
      </div>
    </section>
  );
}
