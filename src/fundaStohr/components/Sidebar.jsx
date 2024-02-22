import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";
import { useEffect, useState } from "react";
import { pagesInfo } from "../data/pagesInfo";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Ajusta según la posición de scroll deseada
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 5); // Ajusta según tu diseño
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container-fluid ${isScrolled ? "sidebar" : ""}`}>
      <div className="row vh-100">
        <div
          className="col-auto col-sm-12 d-flex flex-column justify-content-between"
          style={{ backgroundColor: "#032539" }}
        >
          <div style={{ paddingTop: "8rem" }}>
            <a
              href="/"
              className="text-decoration-none ms-4 d-flex align-items-center text-white"
              role="button"
            >
              <span
                className="f5-4"
                style={{ fontWeight: "bold", fontSize: "1.5rem" }}
              >
                Fundación Carlos Stohr
              </span>
            </a>
            <hr className="text-white d-none d-sm-block" />
            <ul
              className="nav nav-pills flex-column flex-shrink-0"
              id="LaFundacion"
            >
              {pagesInfo.map((page) => (
                <SidebarItem {...page} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// import "bootstrap/js/dist/dropdown";
// import "bootstrap/js/dist/collapse";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { Button } from "react-bootstrap";

// export const Sidebar = () => {
//   const location = useLocation();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const navigate = useNavigate();

//   const navigateTo = (route, id) => {
//     console.log(id);
//     navigate(route);
//     setTimeout(() => {
//       const biografiaSection = document.getElementById(id);
//       console.log(biografiaSection);
//       if (biografiaSection) {
//         biografiaSection.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100); // Delay for smoother scroll
//   };
//   useEffect(() => {
//     const handleScroll = () => {
//       // Ajusta según la posición de scroll deseada
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 5); // Ajusta según tu diseño
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className={`container-fluid ${isScrolled ? "sidebar" : ""}`}>
//       <div className="row vh-100">
//         <div
//           className="col-auto col-sm-12 d-flex flex-column justify-content-between"
//           style={{ backgroundColor: "#032539" }}
//         >
//           <div style={{ paddingTop: "8rem" }}>
//             <a
//               href="/"
//               className="text-decoration-none ms-4 d-flex align-items-center text-white"
//               role="button"
//             >
//               <span
//                 className="f5-4"
//                 style={{ fontWeight: "bold", fontSize: "1.5rem" }}
//               >
//                 Fundación Carlos Stohr
//               </span>
//             </a>
//             <hr className="text-white d-none d-sm-block" />
//             <ul
//               className="nav nav-pills flex-column flex-shrink-0"
//               id="LaFundacion"
//             >
//               <li className={`nav-item text-white my-1 `}>
//                 <a
//                   href="#LaFundacionSubmenu"
//                   className={`nav-link text-white ${
//                     location.pathname === "/la-fundacion" ? "active" : ""
//                   }`}
//                   data-bs-toggle="collapse"
//                   aria-current="page"
//                 >
//                   <i className="bi bi-building"></i>
//                   <span className="ms-2 d-none d-xl-inline">La Fundación</span>
//                   <i className="bi bi-chevron-down ps-3"></i>
//                 </a>
//                 <ul
//                   className="nav collapse ms-2 flex-column"
//                   id="LaFundacionSubmenu"
//                   data-bs-parent="#LaFundacion"
//                 >
//                   <li className="nav-item text-white pt-3">
//                     <a
//                       className="nav-link text-white"
//                       href="#"
//                       aria-current="page"
//                       onClick={() => navigateTo("/la-fundacion", "Biografia")}
//                     >
//                       Bio Carlos Stohr
//                     </a>
//                   </li>
//                   <li className="nav-item ">
//                     <a
//                       onClick={() => navigateTo("/la-fundacion", "ArteYEstilo")}
//                       className="nav-link text-white"
//                       href="#"
//                       aria-current="page"
//                     >
//                       Arte y Estilo
//                     </a>
//                   </li>
//                   <li className="nav-item text-white">
//                     <a
//                       onClick={() =>
//                         navigateTo("/la-fundacion", "AlgunasObras")
//                       }
//                       className="nav-link text-white"
//                       href="#"
//                       aria-current="page"
//                     >
//                       Algunas Obras
//                     </a>
//                   </li>
//                   <li className="nav-item ">
//                     <a
//                       onClick={() => navigateTo("/la-fundacion", "Libros")}
//                       className="nav-link text-white"
//                       href="#"
//                       aria-current="page"
//                     >
//                       Libros
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item text-white my-1">
//                 <a
//                   onClick={() => navigateTo("/la-fundacion", "Biografia")}
//                   href="#submenu"
//                   className="nav-link text-white"
//                   data-bs-toggle="collapse"
//                   aria-current="page"
//                 >
//                   <i className="bi bi-grid"></i>
//                   <span className="ms-2 d-none d-xl-inline">Products</span>
//                   <i className="bi bi-chevron-down"></i>
//                 </a>
//                 <ul
//                   className="nav collapse ms-2 flex-column"
//                   id="submenu"
//                   data-bs-parent="#parentM"
//                 >
//                   <li className="nav-item text-white">
//                     <a
//                       className="nav-link text-white"
//                       href="#"
//                       aria-current="page"
//                     >
//                       Item 1
//                     </a>
//                   </li>
//                   <li className="nav-item ">
//                     <a
//                       className="nav-link text-white"
//                       href="#"
//                       aria-current="page"
//                     >
//                       Item 2
//                     </a>
//                   </li>
//                 </ul>
//               </li>
//               <li className="nav-item text-white my-1">
//                 <a href="#" className="nav-link text-white" aria-current="page">
//                   <i className="bi bi-house"></i>
//                   <span className="ms-2 d-none d-xl-inline">House</span>
//                 </a>
//               </li>
//               <li className="nav-item text-white my-1">
//                 <a href="#" className="nav-link text-white" aria-current="page">
//                   <i className="bi bi-people"></i>
//                   <span className="ms-2 d-none d-xl-inline">Customers</span>
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
