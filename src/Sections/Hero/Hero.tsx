const expertise = [
  "Frontend Engineer",
  "Web Designer",
  "Freelancer",
  "Programmer",
];

export const Hero = () => {
  return (
    <div
      className="hero py-40 bg-no-repeat bg-cover bg-[70%_50%] max-h-[950px] relative"
      id="home"
      style={{
        backgroundImage: `url(../assets/portfolio_2/hero.png)`,
      }}
    >
      <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-bg_primary to-transparent z-[-1] md:hidden"></div>
      <div
        className={`container px-paddingX flex items-center h-full relative z-10`}
      >
        <div className="md:max-w-[50%]">
          <h1 className="text-4xl sm:text-5xl xl:text-[2vw] font-semibold [&_span]:inline-block">
            <div className="overflow-hidden">
              <span className="text-subTitle_color">Hello,</span>
            </div>
            <div className="overflow-hidden">
              <p className="uppercase mt-4 text-heading_color">
                <span>I'm</span> <span>Salah Abdo</span>
              </p>
            </div>
          </h1>
          <div className="overflow-hidden">
            <h2 className="text-3xl text-gray_200 font-semibold mt-3 capitalize overflow-hidden relative h-10">
              <div>
                {expertise.map((item, index) => (
                  <span
                    className={`span-${index} block top-0 left-0 py-1`}
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </h2>
          </div>
          <p className="text mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit similique id, praesentium possimus magni a aspernatur. Vel recusandae fugit itaque.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-bg_primary to-transparent"></div>
    </div>
  );
};
