import { MDText } from "i18n-react";

import HeroBackground from "../../assets/hero.webp";

import LocalTexts from "./Hero.json";

const LocalT = new MDText(LocalTexts);

export const Hero = () => {
  return (
    <div
      className="hero py-40 bg-no-repeat bg-cover bg-[70%_50%] max-h-[950px] relative"
      id="home"
      style={{
        backgroundImage: `url(${HeroBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-bg_primary to-transparent z-[-1] md:hidden"></div>
      <div
        className={`container px-paddingX flex items-center h-full relative z-10`}
      >
        <div className="md:max-w-[50%]">
          <h1 className="text-4xl sm:text-5xl xl:text-[2vw] font-semibold [&_span]:inline-block">
            <div className="overflow-hidden">
              <span className="text-subTitle_color">
                {LocalT.translate("hero.greeting")}
              </span>
            </div>
            <div className="overflow-hidden">
              <p className="uppercase mt-4 text-heading_color">
                <span>{LocalT.translate("hero.introduction.prefix")}</span>{" "}
                <span>{LocalT.translate("hero.introduction.name")}</span>
              </p>
            </div>
          </h1>
          <div className="overflow-hidden">
            <h2 className="text-3xl text-gray_200 font-semibold mt-3 capitalize overflow-hidden relative h-10">
              <div>
                <span className="span block top-0 left-0 py-1">
                  {LocalT.translate("hero.expertise")}
                </span>
              </div>
            </h2>
          </div>
          <p className="text-white mt-5">
            {LocalT.translate("hero.description")}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-bg_primary to-transparent"></div>
    </div>
  );
};
