import React from "react";
import "./cardsContacto.css";

export const CardsContacto = ({
  icono,
  title,
  description,
  border = false,
}) => {
  return (
    <div className="col-md-4">
      <div className={`contact-item ${border ? "border-right" : ""}`}>
        <i className={icono}></i>
        <h3>{title}</h3>
        <address>{description}</address>
      </div>
    </div>
  );
};
