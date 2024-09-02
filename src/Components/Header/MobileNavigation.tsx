import { CrossIcon, MenuIcon } from "../../Utilities/Icons";
import { navLinks } from "../../Utilities/Utilities";

type mobileNavProps = {
  toggle: boolean;
  handleToggle: () => void;
};

export const MobileNav = ({ toggle, handleToggle }: mobileNavProps) => {
  return (
    <div className="mobileNav fixed top-0 -right-full h-screen w-full max-w-[300px] overflow-y-auto bg-bg_secondary z-50 overflow-x-hidden md:hidden">
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
  );
};
