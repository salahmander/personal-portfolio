import { SectionHeader } from "../../Components/SectionHeader/SectionHeader";
import { InfoCards } from "../../Components/InfoCards/InfoCards";

const portfolio = [
  {
    id: 1,
    title: "How to Inject Humor & Comedy Into Your Brand",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odit rerum quos ipsa repellat? Adipisci cumque consequuntur praesentium harum similique, modi esse facere, quis aperiam rem molestias quia? Porro, nesciunt cum! Impedit quidem a eaque possimus, quae magnam suscipit explicabo?`,
    img: "/assets/portfolio_1/portfolio-1.png",
  },
  {
    id: 2,
    title: "Mastering the Art of Programming.",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odit rerum quos ipsa repellat? Adipisci cumque consequuntur praesentium harum similique, modi esse facere, quis aperiam rem molestias quia? Porro, nesciunt cum! Impedit quidem a eaque possimus, quae magnam suscipit explicabo?`,
    img: "/assets/portfolio_1/portfolio-2.png",
  },
  {
    id: 3,
    title: "Crafting the Modern Web Experience.",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odit rerum quos ipsa repellat? Adipisci cumque consequuntur praesentium harum similique, modi esse facere, quis aperiam rem molestias quia? Porro, nesciunt cum! Impedit quidem a eaque possimus, quae magnam suscipit explicabo?`,
    img: "/assets/portfolio_1/portfolio-3.png",
  },
  {
    id: 4,
    title: "How to Own Your Audience by Creating an Email List.",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium odit rerum quos ipsa repellat? Adipisci cumque consequuntur praesentium harum similique, modi esse facere, quis aperiam rem molestias quia? Porro, nesciunt cum! Impedit quidem a eaque possimus, quae magnam suscipit explicabo?`,
    img: "/assets/portfolio_1/portfolio-4.png",
  },
];

export const Portfolio = () => {
  return (
    <section className={`container pt-section`} id="portfolio">
      <SectionHeader shadowText="Portfolio" title="My Latest Portfolio" />
      <div className="portfolio mt-10 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        <InfoCards data={portfolio} />
      </div>
    </section>
  );
};
