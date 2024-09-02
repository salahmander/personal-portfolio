import { useState } from "react";
import { SectionTitle } from "../../Components/SectionTitle/SectionTitle";

const aboutData = [
  {
    title: "Main Skills",
    skills: [
      {
        title: "User experience design",
        category: "UI/UX",
        text: "Delight the user and make it work.",
      },
      {
        title: "Web and user interface design",
        category: "Development",
        text: "Websites, web experiences, ...",
      },
      {
        title: "Interaction design",
        category: "Animation",
        text: "I like to move it move it.",
      },
    ],
  },
  {
    title: "Experience",
    experience: [
      {
        jobTitle: "Sr. Front-end Engineer",
        company: "Google",
        year: "2018 - Current",
      },
      {
        jobTitle: "Front-end Engineer",
        company: "Microsoft",
        year: "2017 - 2018",
      },
      {
        jobTitle: "Software Engineer",
        company: "Alibaba",
        year: "2013 - 2014",
      },
    ],
  },
  {
    title: "Contacts",
    contacts: [
      {
        title: "name",
        content: "Rezareo Sem",
      },
      {
        title: "Email",
        content: "rezareo343@gmail.com",
      },
      {
        title: "Phone",
        content: "+8801734909372",
      },
      {
        title: "Location",
        content: "Dhaka, Bangladesh",
      },
    ],
  },
  {
    title: "Education & Certification",
    certificates: [
      {
        subject: "BSc In CSE",
        address: "ABC University, Los Angeles, CA",
        year: 2010,
      },
      {
        subject: "Diploma in Computer Science",
        address: "Gamma Technical Institute",
        year: 2009,
      },
      {
        subject: "Graphic Designer",
        address: "ABC Institute, Los Angeles, CA",
        year: 2007,
      },
    ],
  },
];

export const About = () => {
  const [activeInx, setActiveInx] = useState(0);

  const handleActiveInx = (index: number) => {
    setActiveInx(index !== activeInx ? index : index);
  };

  return (
    <section className={`about pt-section px-paddingX`} id="about">
      <div className={`container`}>
        <SectionTitle
          title="About Me"
          subTitle="Know more"
          underline={true}
          align="start"
        />

        <div className="innerAbout flex gap-10 mt-10 flex-col overflow-hidden md:flex-row-reverse">
          <div className="right img w-full md:w-1/3">
            <img
              src="../assets/portfolio_2/about.png"
              alt="hero img"
              className="w-full max-w-xs mx-auto"
            />
          </div>
          <div className="left w-full md:w-2/3">
            <p className="aboutText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi aut
              molestiae dolor necessitatibus porro ut dolore nihil tempore
              aperiam, reprehenderit totam at dolores! Fugit velit cupiditate
              mollitia eaque enim omnis quibusdam veniam, esse, iure distinctio
              nihil et repellendus perferendis pariatur sequi iusto sit, tenetur
              neque ab eveniet. Fuga, inventore non!
            </p>
            <div className="btn-wrapper flex gap-4 items-center mt-6 flex-wrap">
              {aboutData.map((b, index) => (
                <div key={index} data-cursor="blow_link" className="btn">
                  <button
                    type="button"
                    className={`${
                      activeInx === index
                        ? "text-primary_color"
                        : "text-gray_300"
                    } font-semibold transition-all duration-300 text-lg`}
                    onClick={() => handleActiveInx(index)}
                  >
                    {b.title}
                  </button>
                  <div
                    className={`${
                      index === activeInx
                        ? "w-full bg-primary_color"
                        : "w-8 bg-gray_500"
                    } h-[2px] rounded-lg mt-1 transition-all duration-300`}
                  ></div>
                </div>
              ))}
            </div>

            {activeInx === 0 && (
              <div className="pane skills mt-8">
                <ul className="flex flex-col">
                  {aboutData[0].skills?.map((item, index) => (
                    <li className="mb-5" key={index}>
                      <div>
                        <h4 className="text-gray_300 text-lg capitalize">
                          <span className="font-semibold">{item.title}</span>{" "}
                          <span className="text-subTitle_color">
                            - {item.category}
                          </span>
                        </h4>
                        <p className="mt-1">{item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeInx === 1 && (
              <div className="pane experience mt-8">
                <ul className="flex flex-col">
                  {aboutData[1].experience?.map((item, index) => (
                    <li className="mb-5" key={index}>
                      <div>
                        <h4 className="text-gray_300 text-lg capitalize">
                          <span className="font-semibold">{item.jobTitle}</span>{" "}
                          <span className="text-subTitle_color">
                            - {item.company}
                          </span>
                        </h4>
                        <p className="mt-1">{item.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeInx === 2 && (
              <div className="pane skills mt-8">
                <ul className="grid gap-4 min-[400px]:grid-cols-2">
                  {aboutData[2].contacts?.map((item, index) => (
                    <li className="mb-5" key={index}>
                      <div>
                        <h4 className="text-gray_300 text-lg uppercase">
                          <span className="font-semibold">{item.title}</span>{" "}
                        </h4>
                        <p className="mt-1">{item.content}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeInx === 3 && (
              <div className="pane skills mt-8">
                <ul className="">
                  {aboutData[3].certificates?.map((item, index) => (
                    <li className="mb-5" key={index}>
                      <div>
                        <h4 className="text-gray_300 text-lg">
                          <span className="font-semibold">{item.subject}</span>{" "}
                          <span className="text-subTitle_color">
                            - {item.address}
                          </span>
                        </h4>
                        <p className="mt-1">{item.year}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
