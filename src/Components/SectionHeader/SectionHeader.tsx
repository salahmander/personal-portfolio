export type sectionHeaderProps = {
  title: string;
  shadowText: string;
  className?: string;
  subTitle?: string;
};

export const SectionHeader = ({
  title,
  shadowText,
  subTitle,
  className,
}: sectionHeaderProps) => {
  return (
    <div className={`flex justify-center overflow-hidden ${className}`}>
      <div className="text-center flex flex-col items-center">
        <h3
          className={`shadowText text-stroke uppercase italic font-bold text-6xl md:text-8xl translate-y-8 z-[-1] select-none`}
        >
          {shadowText}
        </h3>
        <h1
          className="title text-4xl font-semibold flex items-center gap-2 text-heading_color"
          data-cursor="blow"
        >
          <span className="w-12 h-1 rounded-lg inline-block bg-heading_color"></span>
          <span>{title}</span>
          <span className="w-12 h-1 rounded-lg inline-block bg-heading_color"></span>
        </h1>
        <p className="mt-4 max-w-xl text-subTitle_color">{subTitle}</p>
      </div>
    </div>
  );
};
