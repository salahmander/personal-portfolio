import { MDText } from "i18n-react";

import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { InfoCards } from "../../Components/InfoCards/InfoCards";

import LocalTexts from "./Portfolio.json";

const LocalT = new MDText(LocalTexts);

const portfolio = [
  {
    id: 1,
    img: "https://picsum.photos/300/200",
    title: LocalT.translate("portfolio.personal.title") as string,
    description: LocalT.translate("portfolio.personal.description") as string
  },
  {
    id: 2,
    img: "https://picsum.photos/300/200",
    title: LocalT.translate("portfolio.challenges.title") as string,
    description: LocalT.translate("portfolio.challenges.description") as string
  },
  {
    id: 3,
    img: "https://picsum.photos/300/200",
    title: LocalT.translate("portfolio.commissioned.title") as string,
    description: LocalT.translate("portfolio.commissioned.description") as string
  },
  {
    id: 4,
    img: "https://picsum.photos/300/200",
    title: LocalT.translate("portfolio.clones.title") as string,
    description: LocalT.translate("portfolio.clones.description") as string
  },
];

const ForEachPage = [
  {
    title: "Personal Projects",
    description:
      "Innovative Solutions, My Way: A collection of projects driven by passion and curiosity. Each one showcases unique problem-solving and creativity, highlighting my technical growth and personal interests.",
  },
  {
    title: "Challenges & Experiments",
    description:
      "Exploration, Learning, and Problem-Solving: A dynamic mix of projects where I push boundaries, experiment with new technologies, and tackle coding puzzles. This section reflects my journey of continuous learning and creative exploration in various aspects of development.",
  },
  {
    title: "Commissioned Work",
    description:
      "Professional Results, Real Impact: A showcase of tasks and projects completed for clients and businesses. This section highlights my ability to deliver high-quality work on time, tailored to meet specific needs and objectives.",
  },
  {
    title: "Website Clones",
    description:
      "Reimagining the Web: Replicas of well-known websites, recreated to refine my skills and understand industry standards. These projects demonstrate my attention to detail and ability to replicate complex designs and functionalities.",
  },
];

export const Portfolio = () => {
  return (
    <section className={`container pt-section`} id="portfolio">
      <SectionHeader shadowText="Portfolio" title="My Latest Portfolio" />
      <div className="portfolio m-10 grid gap-4 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
        <InfoCards data={portfolio} />
      </div>
    </section>
  );
};
