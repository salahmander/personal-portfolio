export const InfoCards = ({ data }) => {
  return (
    <>
      {data.map(({ img, title, text }) => (
        <div className=" group bg-bg_secondary rounded-lg p-5">
          <div className="img relative">
            <div className="overflow-hidden aspect-[3/2] bg-bg_tertiary">
              <img
                src={img}
                alt={title}
                className="group-hover:scale-125 duration-300 transition-transform"
              />
            </div>
          </div>
          <div className="content py-4 border-b-2 border-b-black_100">
            <h3
              className="text-xl font-semibold line-clamp-1 text-heading_color"
              title={title}
            >
              {title}
            </h3>
            <p className="line-clamp-4 text-sm mt-3">{text}</p>
          </div>
        </div>
      ))}
    </>
  );
};
