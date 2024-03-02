import React from "react";
import "./fadedTitle.css";

export const FadedTitle = ({ title, description }) => {
  return (
    <div className="section-title mt-5">
      <span>{title}</span>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};
