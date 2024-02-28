import React from "react";
import "./gallery.css";

const ImageSlide = ({ url, nombre, isActive, index }) => {
  return (
    <div className={`gslide ${isActive ? "current" : ""}`}>
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
  const handlePrevImage = (id) => {
    onCloseImage(), onOpenImage(id - 1);
  };
  const handleNextImage = (id) => {
    onCloseImage(), onOpenImage(id + 1);
  };

  return (
    <div
      className="glightbox-container glightbox-clean"
      tabIndex={-1}
      role="dialog"
      hidden={!activeImage}
      onClick={onCloseImage}
    >
      <div className="gloader visible" style={{ display: "none" }}></div>
      <div className="goverlay"></div>
      <div className="gcontainer">
        <div className="gslider">
          {images.map(({ url, nombre }, index) => (
            <ImageSlide
              url={url}
              nombre={nombre}
              key={nombre}
              isActive={activeImage === index}
              index={index}
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
