import React from "react";
import "./descriptionBox.css";

export const DescriptionBox = ({ title, description, icon }) => {
  const parseDescription = () => {
    const parts = description.split("*");
    return parts.map((part, index) => {
      return index % 2 === 0 ? (
        <span key={index}>{part}</span>
      ) : (
        <strong key={index}>{part}</strong>
      );
    });
  };

  return (
    <div className="icon-box">
      <div className="icon">
        <i className={icon}></i>
      </div>
      <h4 className="boxTitle">{title}</h4>
      <p className="description">{parseDescription()}</p>
    </div>
  );
};
