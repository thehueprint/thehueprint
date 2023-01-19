export default function Footer() {
  return (
    <section className="footer bg-black px-16 py-20">
      <div className="footer_content relative flex">
        <div className="w-1/2">
          <div className="w-2/3">
            <h2 className="footer_title text-2xl font-semibold text-white">The Hueprint</h2>
            <p className="footer_summary text-base text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab debitis voluptate voluptatem iusto
              aut delectus neque, cum doloribus velit.
            </p>

            <div className="footer_mail">
              <a href="mailto:info@thehueprint.com" className="footer_mail-link text-base text-white">
                info@thehueprint.com
              </a>
            </div>
          </div>

          <div className="footer_social">
            <h2 className="footer_title text-2xl font-semibold text-white">The Hueprint</h2>
            <p className="footer_summary text-base text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ab debitis voluptate voluptatem iusto
              aut delectus neque, cum doloribus velit.
            </p>
            <div className="social_icons">{/* Social Icons */}</div>
          </div>
        </div>

        <div className="footer_form w-1/2">
          <h2 className="form_title text-2xl font-semibold text-white">Contact Us</h2>
          <p className="form_summary text-base text-white">Lorem ipsum dolor sit amet.</p>
          <form action="" className="flex flex-col">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
            <button className="bg-[#4649C3] p-2" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
