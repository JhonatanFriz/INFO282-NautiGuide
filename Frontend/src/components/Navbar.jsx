import { useState } from "react";
import { navLinks } from "../constants";
import './estilos.css';

import { close, icon, menu} from "../assets";

function Navbar() {
  const [active, setActive] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(false);
  

  // animacion
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animationClassName = isHovered ? 'flip-horizontal-bottom-hover' : 'flip-horizontal-bottom';

//animacion

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <div 
                className={animationClassName}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
        <img src="https://media.discordapp.net/attachments/1091020307134939136/1161098424351981689/Barquito.png?ex=6537102c&is=65249b2c&hm=691be42d202cc00204641cd2c3c7f6daabc579c289e5633d5ce75f0ef153befe&=" alt="hoobank" className="w-[50px] h-[50px]"/>
        </div>
      </a>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.ref ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`${nav.ref}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px]  z-10 rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.ref ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <a href={`${nav.ref}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;