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
    <div className={`${isScrolled ? "sidebar" : ""}`}>
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
                <SidebarItem {...page} key={page.href} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
