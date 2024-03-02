import React, { useEffect } from "react";
import "./imageWrapper.css";
import { useNavigate } from "react-router-dom";

export const ImageWrapper = ({ url, title, subtitle, description, path }) => {
  const navigate = useNavigate();

  const navigateTo = (route) => {
    navigate(route);
  };

  return (
    <div className="item features-image col-12 col-md-12 col-lg-4">
      <div className="item-wrapper">
        <div className="item-img">
          <img src={url} alt="imagen" />
        </div>
        <div className="item-content">
          <h5 className="item-title">{subtitle}</h5>
          <h6 className="item-subtitle">
            <strong>{title}</strong>
          </h6>
          <p className="mt-3 item-text">{description}</p>
        </div>
        <p className="item-link" onClick={() => navigateTo(path)}>
          <strong>Ver más</strong>
        </p>
      </div>
    </div>
  );
};
