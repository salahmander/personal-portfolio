import { useRef } from "react";
import { MDText } from "i18n-react";
import emailjs from "@emailjs/browser";
import { FormEvent, useState, ChangeEvent } from "react";
import styles from "../../Sections/Contact/Contact.module.css";
import { SubmitModal } from "../SubmitModal/SubmitModal";
import LocalTexts from "../../Sections/Contact/Contact.json";

const LocalT = new MDText(LocalTexts);

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null); 
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    mobile: "",
    service: "",
    message: "",
  });

  const SERVICE_ID = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const sendEmailWithRetry = (retriesLeft: number): Promise<void> => {
    return emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY)
      .then(
        () => {
          // Reset form and show success
          setFormData({
            from_name: "",
            from_email: "",
            mobile: "",
            service: "",
            message: "",
          });
          setIsOpen(true);
          setIsLoading(false);
        },
        (error) => {
          if (retriesLeft > 0) {
            return sendEmailWithRetry(retriesLeft - 1);
          } else {
            console.error("FAILED...", error.text);
            setIsError(true);
            setIsLoading(false);
          }
        }
      );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);

    sendEmailWithRetry(2); // Retry twice if failed
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <section className={`contactForm`} id="contactForm">
      <div className={`max-w-4xl mx-auto`}>
        <div className="form">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.from_name}
                  className={`${styles.input}`}
                  required
                  type="text"
                  name="from_name" // Must match emailjs template variable
                  id="from_name"
                  placeholder="Your Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.from_email}
                  className={`${styles.input}`}
                  required
                  type="email"
                  name="from_email" // Must match emailjs template variable
                  id="from_email"
                  placeholder="Your Email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.mobile}
                  className={`${styles.input}`}
                  type="text"
                  name="mobile" // Must match emailjs template variable
                  id="mobile"
                  placeholder="Your phone number"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.service}
                  className={`${styles.input}`}
                  required
                  type="text"
                  name="service" // Must match emailjs template variable
                  id="service"
                  placeholder="What service you need"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="w-full mt-5">
              <textarea
                autoComplete="on"
                required
                data-cursor="-hidden invisible"
                value={formData.message}
                className={`${styles.input}`}
                name="message" // Must match emailjs template variable
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="button mt-6">
              <button
                type="submit"
                className="border text-white px-4 py-2 rounded-lg hover:bg-primary_color transition-all duration-300 hover:text-black_500"
                data-cursor="blow_link -pointer"
                disabled={isLoading} // Disable button when loading
              >
                {isLoading
                  ? LocalT.translate("contact.loadingButton")
                  : LocalT.translate("contact.button")}
              </button>
            </div>
          </form>
        </div>

        {/* modal */}

        {isOpen && <SubmitModal isError={isError} setIsOpen={setIsOpen} />}
      </div>
    </section>
  );
};
