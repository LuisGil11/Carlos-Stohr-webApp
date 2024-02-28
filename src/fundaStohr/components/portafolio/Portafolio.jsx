import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./portafolio.css";

const PortfolioItem = ({ url, nombre, autor }) => {
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
          href={url}
          data-gallery="portafolioGallery"
          className="portfolio-lightbox preview-link"
          title="App 1"
        >
          <i className="bi bi-arrows-angle-expand"></i>
        </a>
      </div>
    </div>
  );
};

export const Portafolio = ({ title, description, imagenes = [] }) => {
  return (
    <div className="portfolio">
      <Container>
        <div className="section-title">
          <span>{title}</span>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <Row className="d-flex portfolio-container">
          <Col lg={4} md={6}>
            {imagenes.map(
              (imagen, index) =>
                index % 3 === 0 && (
                  <PortfolioItem {...imagen} key={imagen.name} />
                )
            )}
          </Col>
          <Col lg={4} md={6}>
            {imagenes.map(
              (imagen, index) =>
                index % 3 === 1 && (
                  <PortfolioItem {...imagen} key={imagen.name} />
                )
            )}
          </Col>
          <Col lg={4} md={6}>
            {imagenes.map(
              (imagen, index) =>
                index % 3 === 2 && (
                  <PortfolioItem {...imagen} key={imagen.name} />
                )
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};
