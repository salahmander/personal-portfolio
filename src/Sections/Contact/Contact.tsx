import { ContactForm } from "../../Components/ContactForm/ContactForm";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { SocialButton } from "../../Components/SocialButton/SocialButton";
import { socialIcons } from "../../Utilities/Utilities";

export const Contact = () => {
  return (
    <section id="contact" className="contact pt-section">
      <div className="container px-paddingX">
        <SectionHeader shadowText="contact" title="Get In Touch" />
        <div className="flex gap-7 mt-14 min-[900px]:flex-row flex-col">
          <div className="left w-full min-[900px]:w-1/3">
            <h1 className="contact-item text-8xl font-semibold text-heading_color">
              Let's work together
            </h1>
            <p className="contact-item mt-5 max-w-lg">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions.
            </p>

            {/* social btns */}

            <ul className="social-icons contact-item mt-10 flex gap-5 items-center">
              {socialIcons.map((icon, index) => (
                <li key={index} className="social-icon">
                  <SocialButton {...icon} />
                </li>
              ))}
            </ul>
          </div>

          {/* right */}
          <div className="right w-full min-[900px]:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};
