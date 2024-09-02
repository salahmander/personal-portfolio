import { useState } from "react";
import { CrossIcon, MenuIcon } from "../../Utilities/Icons";
import { navLinks } from "../../Utilities/Utilities";
import { MobileNav } from "./MobileNavigation";

export const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="header fixed top-0 left-0 w-full shadow-none border-b-black_100 border-none z-50 transition-all duration-500">
        <div className={`container`}>
          <nav className="flex justify-between items-center py-3 px-paddingX">
            {/* navlinks */}

            <ul className="hidden gap-5 items-center md:flex">
              {navLinks.map((link) => (
                <li data-cursor="blow_link" key={link.title}>
                  <a
                    // href={link.url}
                    className={`${link.title}-link text-gray_200 hover:text-xl hover:font-semibold transition-all duration-300 py-3 cursor-pointer`}
                    onClick={() => console.log("click")}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <button
              className="menu text-3xl py-2 md:hidden"
              type="button"
              title="menu"
              onClick={handleToggle}
            >
              {toggle ? <CrossIcon /> : <MenuIcon />}
            </button>
          </nav>
        </div>
      </header>
      <MobileNav toggle={toggle} handleToggle={handleToggle} />
    </>
  );
};
