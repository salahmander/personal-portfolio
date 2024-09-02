import { ReactNode } from "react";
import {
  CodeIcon,
  DebugIcon,
  PerformanceIcon,
  Responsive,
  UiIcon,
  WebsiteIcon,
} from "../../Utilities/Icons";
import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";

type serviceItemType = {
  title: string;
  icon: ReactNode;
  text: string;
};

// here the service items
const serviceItems: serviceItemType[] = [
  {
    title: "UI/UX Design",
    icon: <UiIcon />,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam maiores sapiente praesentium esse quasi voluptatum excepturi earum, enim a inventore soluta rerum velit quaerat sint vel necessitatibus odio architecto?`,
  },
  {
    title: "Web Design",
    icon: <WebsiteIcon />,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam maiores sapiente praesentium esse quasi voluptatum excepturi earum, enim a inventore soluta rerum velit quaerat sint.`,
  },
  {
    title: "Responsive Design",
    icon: <Responsive />,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam maiores sapiente praesentium esse quasi voluptatum excepturi earum, enim a inventore soluta rerum velit.`,
  },
  {
    title: "Front-End-Development",
    icon: <CodeIcon className="text-text_color" />,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam maiores sapiente praesentium esse quasi voluptatum excepturi earum, enim a inventore soluta rerum velit.`,
  },
  {
    title: "Performance Optimization",
    icon: <PerformanceIcon className="[&_path]:stroke-text_color" />,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam maiores sapiente praesentium esse quasi voluptatum excepturi earum, enim a inventore soluta rerum velit.`,
  },
  {
    title: "Testing and Debugging",
    icon: <DebugIcon />,
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nam maiores sapiente praesentium esse quasi voluptatum excepturi earum, enim a inventore soluta rerum velit.`,
  },
];

export const Services = () => {
  return (
    <section className={`container pt-section`} id="services">
      <div className="px-paddingX">
        <SectionHeader
          title="My Services"
          shadowText="Services"
          subTitle="It is a long established fact that a reader will be distracted by the readable
   content of a page when looking at its layout"
        />

        <div
          className={`services mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`}
        >
          {serviceItems.map((item) => (
            <div
              className={`service-item bg-bg_secondary z-[1] rounded-xl p-6 relative overflow-hidden after:absolute after:top-1/2 after:left-1/2 after:w-full after:h-full after:rounded-full after:-translate-y-1/2 after:-translate-x-1/2 after:bg-gradient-to-b after:from-black_500 after:to-transparent after:z-[-1] after:scale-0 hover:after:scale-100 hover:after:rounded-none after:transition-all after:duration-300 after:ease-in-out hover:shadow-lg`}
              key={item.title}
            >
              <div className="text-5xl w-fit" data-cursor="blow">
                {item.icon}
              </div>
              <h1
                className="mt-4 text-2xl font-semibold w-fit text-heading_color"
                data-cursor="blow"
              >
                {item.title}
              </h1>
              <p className="mt-4">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
