import React from "react";
import "./doubleTitle.css";

export const DoubleTitle = ({ title, subtitle }) => {
  return (
    <div className="section-doubletitle">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};
