import React, { useEffect } from "react";
import "./imageWrapper.css";
import { useNavigate } from "react-router-dom";

export const ImageWrapper = ({
  url,
  title,
  subtitle,
  description,
  path,
  section,
}) => {
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
        <a href={path}>
          <p className="item-link">
            <strong>Leer más</strong>
          </p>
        </a>
      </div>
    </div>
  );
};
