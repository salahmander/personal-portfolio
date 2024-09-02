type InfoCardTypes = {
  id: number;
  img: string;
  title: string;
  description: string;
};

export const InfoCards = ({ data }: { data: InfoCardTypes[] }) => {
  return (
    <>
      {data.map(({ img, title, description, id }) => (
        <div
          key={id}
          className="group cursor-pointer bg-bg_secondary rounded-lg p-5 relative overflow-hidden rounded-xl p-6 bg-bg_secondary z-[1] after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:-translate-y-1/2 after:-translate-x-1/2 after:bg-gradient-to-b after:from-black_500 after:to-transparent after:z-[-1] after:scale-0 hover:after:scale-100 hover:after:rounded-none after:transition-all after:duration-300 after:ease-in-out hover:shadow-lg"
        >
          <div className="img relative">
            <div className="overflow-hidden aspect-[3/2] bg-bg_tertiary">
              <img src={img} alt={title} />
            </div>
          </div>
          <div className="content py-4 border-b-2 border-b-black_100">
            <h3
              className="text-center text-xl font-semibold line-clamp-1 text-heading_color"
              title={title}
            >
              {title}
            </h3>
            <p className="line-clamp-8 text-sm mt-3">{description}</p>
          </div>
        </div>
      ))}
    </>
  );
};
