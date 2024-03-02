import React from "react";
import { Row } from "react-bootstrap";
import "./sobreNosotrosCard.css";

export const SobreNosotrosCard = ({ title, description, icon, imageUrl }) => {
  return (
    <div className="col-md-4">
      <div className="sobreNosotros-col">
        <div className="img">
          <img src={imageUrl} alt="" className="img-fluid" />
          <div className="sobreNosotrosIcon">
            <i className={icon}></i>
          </div>
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
