import { FormEvent, useState, ChangeEvent } from "react";
import styles from "../../Sections/Contact/Contact.module.css";
import { SubmitModal } from "../SubmitModal/SubmitModal";

export const ContactForm = () => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // here you can submit your data and add your own function

    setTimeout(() => {
      setIsLoading(false); // you can remove the setTimeout and use your own function

      setFormData({
        name: "",
        email: "",
        address: "",
        service: "",
        message: "",
      });

      setIsOpen(true);
    }, 1500);
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
          <form action="" className="" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.name}
                  className={`${styles.input}`}
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.email}
                  className={`${styles.input}`}
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  autoComplete="on"
                  data-cursor="-hidden invisible"
                  value={formData.address}
                  className={`${styles.input}`}
                  required
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your address"
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
                  name="service"
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
                name="message"
                id="message"
                cols={30}
                rows={10}
                placeholder="Message"
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="button mt-6">Button</div>
          </form>
        </div>

        {/* modal */}

        <SubmitModal isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </section>
  );
};
