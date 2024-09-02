import { useState } from "react";
import { SectionTitle } from "../../Components/SectionTitle/SectionTitle";
import { MDText } from "i18n-react";

import LocalTexts from "./About.json";

const LocalT = new MDText(LocalTexts);

export const About = () => {
  const [activeInx, setActiveInx] = useState(0);

  const handleActiveInx = (index: number) => {
    setActiveInx(index !== activeInx ? index : index);
  };

  const aboutTabs = [
    LocalTexts.about.skillsSection.title,
    LocalTexts.about.experienceSection.title,
    LocalTexts.about.educationSection.title,
  ];

  return (
    <section className={`about pt-section px-paddingX`} id="about">
      <div className={`container`}>
        <SectionTitle
          title={LocalT.translate("about.title") as string}
          subTitle={LocalT.translate("about.subTitle") as string}
          underline={true}
          align="start"
        />

        <div className="innerAbout flex gap-10 mt-10 flex-col overflow-hidden md:flex-row-reverse">
          <div className="left w-full">
            <p className="aboutText w-2/3">
              {LocalT.translate("about.summary")}
            </p>
            <div className="btn-wrapper flex gap-4 items-center mt-6 flex-wrap">
              {aboutTabs.map((tabTitle, index) => (
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
                    {LocalT.translate(tabTitle)}
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
                  {LocalTexts.about.skillsSection.skills?.map(
                    (skill, index) => (
                      <li className="mb-2" key={index}>
                        <div>
                          <h4 className="text-gray_300 text-lg capitalize">
                            <span className="font-semibold">
                              {LocalT.translate(skill.title)}
                            </span>{" "}
                            <span className="text-subTitle_color">
                              {LocalT.translate(skill.category)}
                            </span>
                          </h4>
                          <p className="mt-1">{LocalT.translate(skill.text)}</p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {activeInx === 1 && (
              <div className="pane experience mt-8">
                <ul className="flex flex-col">
                  {LocalTexts.about.experienceSection.experience?.map(
                    (experience, index) => (
                      <li className="mb-5" key={index}>
                        <div>
                          <h4 className="text-gray_300 text-lg capitalize">
                            <span className="font-semibold">
                              {LocalT.translate(experience.jobTitle)}
                            </span>{" "}
                            <span className="text-subTitle_color">
                              - {LocalT.translate(experience.company)}
                            </span>
                          </h4>
                          <p className="mt-1">
                            {LocalT.translate(experience.year)}
                          </p>
                          <ul className="list-disc list-outside pl-4">
                            {experience.achievements?.map((achievement) => (
                              <li className="mt-1 mdw-2/4 ">
                                {LocalT.translate(achievement)}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}

            {activeInx === 2 && (
              <div className="pane skills mt-8">
                <ul>
                  {LocalTexts.about.educationSection.education?.map(
                    (education, index) => (
                      <li className="mb-5" key={index}>
                        <div>
                          <h4 className="text-gray_300 text-lg">
                            <span className="font-semibold">
                              {LocalT.translate(education.subject)}
                            </span>{" "}
                            <span className="text-subTitle_color">
                              - {LocalT.translate(education.address)}
                            </span>
                          </h4>
                          <p className="mt-1">
                            {LocalT.translate(education.year)}
                          </p>
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
