import { MDText } from "i18n-react";

import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { InfoCards } from "../../Components/InfoCards/InfoCards";

import PersonalProjectImage from "../../assets/personalProjects.webp"
import ChallengesExperiments from '../../assets/challengesExperiments.webp'
import CommissionedWork from '../../assets/commissionedWork.webp'
import WebsiteClones from '../../assets/WebsiteClones.webp'

import LocalTexts from "./Portfolio.json";

const LocalT = new MDText(LocalTexts);

const portfolio = [
  {
    id: 1,
    img: PersonalProjectImage,
    title: LocalT.translate("portfolio.personal.title") as string,
    description: LocalT.translate("portfolio.personal.description") as string
  },
  {
    id: 2,
    img: ChallengesExperiments,
    title: LocalT.translate("portfolio.challenges.title") as string,
    description: LocalT.translate("portfolio.challenges.description") as string
  },
  {
    id: 3,
    img: CommissionedWork,
    title: LocalT.translate("portfolio.commissioned.title") as string,
    description: LocalT.translate("portfolio.commissioned.description") as string
  },
  {
    id: 4,
    img: WebsiteClones,
    title: LocalT.translate("portfolio.clones.title") as string,
    description: LocalT.translate("portfolio.clones.description") as string
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
