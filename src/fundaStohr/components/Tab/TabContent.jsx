import React from "react";
import "./tab.css";

export const TabContent = ({
  title,
  desccorta,
  desclarga,
  imagen,
  id,
  currentTab,
}) => {
  return (
    <div
      className={`tab-content animate__animated ${
        currentTab === id ? "animate__fadeIn" : ""
      }`}
    >
      <div
        className={`tab-pane ${currentTab === id ? "active show" : ""}`}
        id={id}
        role="tabpanel"
      >
        <h3>{title}</h3>
        <p
          className="fst-italic"
          style={{ fontFamily: "Forum", fontWeight: "600" }}
        >
          {desccorta}
        </p>
        <img src={imagen} alt="img" className="img-fluid" />
        <p style={{ textIndent: "30px", lineHeight: "35px" }}>{desclarga}</p>
      </div>
    </div>
  );
};
