import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
import { useState } from "react";
import { close } from "../assets/icons";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Nike logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray hover:border-b-2 hover:border-coral-red duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <div className="relative">
            <button onClick={() => setOpenMenu(!openMenu)}>
              <img
                src={openMenu ? close : hamburger}
                alt="hamburguer icon"
                width={25}
                height={25}
              />
            </button>
            <div className={`absolute ${openMenu ? 'h-[40vh]' : 'h-0 opacity-0'} w-72 bg-white right-0 rounded-xl border border-coral-red shadow-3xl duration-500 ease-out`}>
              <ul className="flex flex-col justify-between h-full p-10">
                {navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="font-montserrat leading-normal text-xl text-slate-gray"
                      onClick={() => setOpenMenu(false)}
                    >
                      {item.label}
                    </a>
                    <hr className="border-1 border-coral-red" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
