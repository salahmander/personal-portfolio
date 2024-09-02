export type sectionTitleProps = {
  title: string;
  subTitle: string;
  underline?: boolean;
  align?: "start" | "center" | "end";
  text?: string;
};

export const SectionTitle = ({
  subTitle,
  title,
  underline = false,
  align = "center",
  text,
}: sectionTitleProps) => {
  const titleArr = title.split(" ");

  const alignment =
    align === "start"
      ? "items-start"
      : align === "end"
      ? "items-end"
      : "items-center";

  return (
    <div
      className={`${alignment} sectionTitle flex flex-col text-center overflow-hidden w-full`}
    >
      <div className="overflow-hidden">
        <h3 className="text-2xl font-semibold uppercase text-subTitle_color">
          {subTitle}
        </h3>
      </div>
      <h1 className="text-4xl sm:text-6xl font-semibold text-heading_color text-center md:whitespace-nowrap">
        {titleArr.map((item, index) => (
          <span className={`${index === 1 ? "text-stroke" : ""}`} key={index}>
            {item}{" "}
          </span>
        ))}
      </h1>

      {text && <p className="text mt-7 max-w-xl text-center">{text}</p>}

      {underline && (
        <div className="line w-3/5 h-[2px] rounded-lg bg-black_100 mt-4 min-w-[120px]"></div>
      )}
    </div>
  );
};
