import React from "react";
import { useLocation, useNavigate } from "react-router";

export const SidebarItem = ({ href, path, title, sections = [], icon }) => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log(sections);

  const navigateTo = (route, id) => {
    console.log(id);
    navigate(route);
    setTimeout(() => {
      const biografiaSection = document.getElementById(id);
      console.log(biografiaSection);
      if (biografiaSection) {
        biografiaSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay for smoother scroll
  };
  return (
    <li className={`nav-item text-white my-1 `}>
      <a
        href={`${href}Submenu`}
        className={`nav-link text-white ${
          location.pathname === path ? "active" : ""
        }`}
        data-bs-toggle="collapse"
        aria-current="page"
      >
        <i className={icon}></i>
        <span className="ms-2 d-none d-xl-inline">{title}</span>
        {sections.length > 0 && <i className="bi bi-chevron-down ps-3"></i>}
      </a>
      <ul
        className="nav collapse ms-2 flex-column"
        id={`${href.replace("#", "")}Submenu`}
        data-bs-parent={href}
      >
        {sections.map((section) => (
          <li className="nav-item text-white pt-3">
            <a
              className="nav-link text-white"
              href="#"
              aria-current="page"
              onClick={() => navigateTo(path, section.id)}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};
