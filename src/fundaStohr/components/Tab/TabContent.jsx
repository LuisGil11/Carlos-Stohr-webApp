import React from "react";
import "./tab.css";
import { useSelector } from "react-redux";

export const TabContent = ({ title, desccorta, desclarga, imagen, id }) => {
  const { tipoDeConcurso } = useSelector((state) => state.concurso);

  return (
    <div
      className={`tab-content animate__animated ${
        tipoDeConcurso === id ? "animate__fadeIn" : ""
      }`}
    >
      <div
        className={`tab-pane ${tipoDeConcurso === id ? "active show" : ""}`}
        id={id}
        role="tabpanel"
      >
        <h3 style={{ fontFamily: '"Madimi One", sans-serif' }}>{title}</h3>
        <p
          className="fst-italic"
          style={{ fontFamily: "Forum", fontWeight: "600" }}
        >
          {desccorta}
        </p>
        <img src={imagen} alt="img" className="img-fluid" />
        <p
          style={{
            textIndent: "30px",
            lineHeight: "35px",
            fontFamily: '"Raleway", sans-serif',
          }}
        >
          {desclarga}
        </p>
      </div>
    </div>
  );
};
