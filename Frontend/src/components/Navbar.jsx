import React, { useState } from "react";
import { navLinks } from "../constants";
import { useAuth } from "./AuthContext";
import { close, menu } from "../assets";
import "./estilos.css";

function Navbar() {
  const { token, logout, userRole } = useAuth();
  const [active, setActive] = useState(window.location.pathname);
  const [toggle, setToggle] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const animationClassName = isHovered
    ? "flip-horizontal-bottom-hover"
    : "flip-horizontal-bottom";

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <a href="/">
        <div
          className={animationClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src="https://cdn.discordapp.com/attachments/1091020307134939136/1184580927863652372/74820.png?ex=662025f5&is=660db0f5&hm=32554a914d1ecef6d478fb61413b3f5aaa04c9348889aa007d86d6b229784b7a&"
            alt="hoobank"
            className="w-[50px] h-[50px]"
          />
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
            {/* Renderiza "Cerrar Sesión" si el usuario está autenticado y es el enlace de iniciar sesión */}
            {nav.title === "Iniciar Sesión" && token ? (
              <a href="#" onClick={logout}>
                Cerrar Sesión
              </a>
            ) : (
              // Renderiza "Registro de Usuario" solo si el usuario está autenticado
              nav.title === "Registro de Usuario" && !token ? null : (
                // Renderiza "Solicitudes" solo si el usuario está autenticado
                nav.title === "Solicitudes" && !token ? null : (
                  <a href={nav.ref}>{nav.title}</a>
                )
              )
            )}
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
                {/* Renderiza "Cerrar Sesión" si el usuario está autenticado y es el enlace de iniciar sesión */}
                {nav.title === "Iniciar Sesión" && token ? (
                  <a href="#" onClick={logout}>
                    Cerrar Sesión
                  </a>
                ) : (
                  // Renderiza "Registro de Usuario" solo si el usuario está autenticado
                  nav.title === "Registro de Usuario" && !token ? null : (
                    // Renderiza "Solicitudes" solo si el usuario está autenticado
                    nav.title === "Solicitudes" && !token ? null : (
                      <a href={nav.ref}>{nav.title}</a>
                    )
                  )
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import { navLinks } from "../constants";
// import { useAuth } from "./AuthContext";
// import { close, menu } from "../assets";
// import "./estilos.css";

// function Navbar() {
//   const { token, logout, userRole } = useAuth();
//   const [active, setActive] = useState(window.location.pathname);
//   const [toggle, setToggle] = useState(false);
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => {
//     setIsHovered(true);
//   };

//   const handleMouseLeave = () => {
//     setIsHovered(false);
//   };

//   const animationClassName = isHovered
//     ? "flip-horizontal-bottom-hover"
//     : "flip-horizontal-bottom";

//   return (
//     <nav className="w-full flex py-6 justify-between items-center navbar">
//       <a href="/">
//         <div
//           className={animationClassName}
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           <img
//             src="https://cdn.discordapp.com/attachments/1091020307134939136/1184580927863652372/74820.png?ex=658c7df5&is=657a08f5&hm=da735a4ccfc015c09ac13845778c61e65b28dfe97b9140f6d8c6ce0930ddb77b&"
//             alt="hoobank"
//             className="w-[50px] h-[50px]"
//           />
//         </div>
//       </a>
//       <ul className="list-none sm:flex hidden justify-end items-center flex-1">
//         {navLinks.map((nav, index) => (
//           <li
//             key={nav.id}
//             className={`font-poppins font-normal cursor-pointer text-[16px] ${
//               active === nav.ref ? "text-white" : "text-dimWhite"
//             } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
//           >
//             {/* Renderiza "Cerrar Sesión" si el usuario está autenticado y es el enlace de iniciar sesión */}
//             {nav.title === "Iniciar Sesión" && token ? (
//               <a href="#" onClick={logout}>
//                 Cerrar Sesión
//               </a>
//             ) : (
//               // Renderiza "Registro de Usuario" solo si el usuario está autenticado
//               nav.title === "Registro de Usuario" && !token  ? null : (
//                 <a href={nav.ref}>{nav.title}</a>
//               )
//             )}
//           </li>
//         ))}
//       </ul>

//       <div className="sm:hidden flex flex-1 justify-end items-center">
//         <img
//           src={toggle ? close : menu}
//           alt="menu"
//           className="w-[28px] h-[28px] object-contain"
//           onClick={() => setToggle(!toggle)}
//         />

//         <div
//           className={`${
//             !toggle ? "hidden" : "flex"
//           } p-6 bg-tertiary absolute top-20 right-0 mx-4 my-2 min-w-[140px]  z-10 rounded-xl sidebar`}
//         >
//           <ul className="list-none flex justify-end items-start flex-1 flex-col">
//             {navLinks.map((nav, index) => (
//               <li
//                 key={nav.id}
//                 className={`font-poppins font-medium cursor-pointer text-[16px] ${
//                   active === nav.ref ? "text-white" : "text-dimWhite"
//                 } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
//               >
//                 {/* Renderiza "Cerrar Sesión" si el usuario está autenticado y es el enlace de iniciar sesión */}
//                 {nav.title === "Iniciar Sesión" && token ? (
//                   <a href="#" onClick={logout}>
//                     Cerrar Sesión
//                   </a>
//                 ) : (
//                   // Renderiza "Registro de Usuario" solo si el usuario está autenticado
//                   nav.title === "Registro de Usuario" && !token ? null : (
//                     <a href={nav.ref}>{nav.title}</a>
//                   )
                  
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;