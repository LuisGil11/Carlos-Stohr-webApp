import React, { useEffect, useState } from "react";
import "./gallery.css";

const ImageSlide = ({ url, nombre, isActive, index, to }) => {
  const handleAnimation = (to) => {
    if (to === "previous") return "animate__bounceInRight";
    if (to === "next") return "animate__bounceInLeft";
    return "";
  };

  return (
    <div
      className={`gslide ${isActive ? "current" : ""} ${
        isActive && handleAnimation(to)
      }`}
    >
      <div className="gslide-inner-content">
        <div className="ginner-container desc-bottom">
          <div className="gslide-media gslide-image">
            <img
              src={url}
              alt=""
              aria-labelledby="gSlideTitle_0"
              style={{ maxHeight: "calc(100vh - 85px)" }}
              key={url}
            />
          </div>
          <div
            className="gslide-description description-bottom"
            style={{ maxWidth: "873px" }}
          >
            <div className="gdesc-inner">
              <h4 className="gslide-title" id={`gSlideTitle_${index}`}>
                {nombre}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Gallery = ({
  images = [],
  activeImage,
  onCloseImage,
  onOpenImage,
}) => {
  const [to, setTo] = useState(null);
  const handlePrevImage = (id) => {
    onOpenImage(id - 1);
    setTo("previous");
  };
  const handleNextImage = (id) => {
    onOpenImage(id + 1);
    setTo("next");
  };

  return (
    <div
      className={`glightbox-container glightbox-clean ${
        activeImage !== null
          ? "animate__animated animate__fadeIn"
          : "animate__animated animate__fadeOut"
      }`}
      tabIndex={-1}
      role="dialog"
      hidden={activeImage === null ? true : false}
    >
      <div className="gloader visible" style={{ display: "none" }}></div>
      <div className="goverlay animate__animated animate__fadeIn"></div>
      <div className="gcontainer">
        <div className="gslider animate__animated animate__zoomIn">
          {images.map(({ url, nombre }, index) => (
            <ImageSlide
              url={url}
              nombre={nombre}
              key={nombre}
              isActive={activeImage === index}
              index={index}
              to={to}
            />
          ))}
        </div>
        <button
          className="gclose gbtn"
          aria-label="Close"
          onClick={onCloseImage}
        >
          <i className="bi bi-x"></i>
        </button>
        <button
          className="gprev gbtn"
          aria-label="Previous"
          onClick={() => handlePrevImage(activeImage)}
        >
          <i className="bi bi-caret-left"></i>
        </button>
        <button
          className="gnext gbtn"
          aria-label="Next"
          onClick={() => handleNextImage(activeImage)}
        >
          <i className="bi bi-caret-right"></i>
        </button>
      </div>
    </div>
  );
};
