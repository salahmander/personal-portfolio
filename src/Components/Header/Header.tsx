import { useState, useEffect, useRef } from "react";
import { CrossIcon, MenuIcon } from "../../Utilities/Icons";
import { navLinks, ScrollTo } from "../../Utilities/Utilities";
import { MobileNav } from "./MobileNavigation";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef<HTMLHeadElement | null>(null);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed min-h-12 top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled && !toggle ? "bg-bg_secondary shadow-lg" : "bg-transparent"
        }`}
      >
        <div className={`container`}>
          <nav className="flex justify-between items-center py-3 px-paddingX">
            <ul className="hidden gap-5 items-center md:flex">
              {navLinks.map((link) => (
                <li data-cursor="blow_link" key={link.title}>
                  <a
                    className={`${link.title}-link text-gray_200 hover:text-xl hover:font-semibold transition-all duration-300 py-3 cursor-pointer`}
                    onClick={() => ScrollTo(link.url)}
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
