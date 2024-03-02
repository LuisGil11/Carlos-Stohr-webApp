import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./portafolio.css";
import { Gallery } from "../gallery/Gallery";

const PortfolioItem = ({ url, nombre, autor, onOpenImage, id }) => {
  return (
    <div
      className="portfolio-item"
      style={{
        position: "relative",
      }}
    >
      <div className="portfolio-img">
        <img
          className="img-fluid"
          src={url}
          alt=""
          width="100%"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="portfolio-info">
        <h4>{nombre}</h4>
        <p>{autor}</p>
        <a
          data-gallery="portafolioGallery"
          className="portfolio-lightbox preview-link"
          title="App 1"
          onClick={() => onOpenImage(id)}
        >
          <i className="bi bi-arrows-angle-expand"></i>
        </a>
      </div>
    </div>
  );
};

export const Portafolio = ({ imagenes = [] }) => {
  const [activeImage, setActiveImage] = useState(null);
  const onOpenImage = (id) => {
    if (id >= imagenes.length) setActiveImage(0);
    else if (id < 0) setActiveImage(imagenes.length - 1);
    else setActiveImage(id);
  };
  const onCloseImage = () => {
    setActiveImage(null);
  };
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Escape") {
        onCloseImage();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <>
      <div className="portfolio">
        <Container>
          <Row className="d-flex portfolio-container">
            <Col lg={4} md={6}>
              {imagenes.map(
                (imagen, index) =>
                  index % 3 === 0 && (
                    <PortfolioItem
                      {...imagen}
                      key={index}
                      id={index}
                      onOpenImage={onOpenImage}
                    />
                  )
              )}
            </Col>
            <Col lg={4} md={6}>
              {imagenes.map(
                (imagen, index) =>
                  index % 3 === 1 && (
                    <PortfolioItem
                      {...imagen}
                      key={index}
                      id={index}
                      onOpenImage={onOpenImage}
                    />
                  )
              )}
            </Col>
            <Col lg={4} md={6}>
              {imagenes.map(
                (imagen, index) =>
                  index % 3 === 2 && (
                    <PortfolioItem
                      {...imagen}
                      key={index}
                      id={index}
                      onOpenImage={onOpenImage}
                    />
                  )
              )}
            </Col>
          </Row>
        </Container>
      </div>
      <Gallery
        images={imagenes}
        onCloseImage={onCloseImage}
        onOpenImage={onOpenImage}
        activeImage={activeImage}
      />
    </>
  );
};
