import { CrossIcon, MenuIcon } from "../../Utilities/Icons";
import { navLinks } from "../../Utilities/Utilities";

type mobileNavProps = {
  toggle: boolean;
  handleToggle: () => void;
};

export const MobileNav = ({ toggle, handleToggle }: mobileNavProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 ease-in-out z-40 ${
          toggle
            ? "opacity-50 overflow-hidden"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleToggle} // Close the menu when the overlay is clicked
      />
      <div
        className={`fixed top-0 h-screen w-full max-w-[300px] overflow-y-auto bg-bg_secondary z-50 transition-transform duration-500 ease-in-out transform ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="px-paddingX py-3">
          <div className="flex justify-between items-center">
            <button
              className="menu text-3xl py-2 md:hidden"
              type="button"
              title="menu"
              onClick={handleToggle}
            >
              {toggle ? <CrossIcon /> : <MenuIcon />}
            </button>
          </div>
          <nav className="mt-6">
            <ul>
              {navLinks.map((link) => (
                <li key={link.url} onClick={handleToggle}>
                  <button
                    type="button"
                    className={`${link.title}-link transition-all duration-500 py-3 hover:pl-2.5 hover:text-primary_color`}
                    onClick={() => console.log("click")}
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
