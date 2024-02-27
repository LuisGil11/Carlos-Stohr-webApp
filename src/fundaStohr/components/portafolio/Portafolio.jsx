import React from "react";
import { Container, Row } from "react-bootstrap";
import "./portafolio.css";

export const Portafolio = () => {
  return (
    <div className="portfolio">
      <Container>
        <div className="section-title">
          <span>My Portafolio</span>
          <h2>My Portafolio</h2>
          <p>
            Occaecat excepteur officia minim et velit esse nulla magna duis enim
            nostrud ipsum sunt.
          </p>
        </div>
        <Row
          className="portfolio-container"
          style={{ position: "relative", height: "1267.1px" }}
        >
          <div
            className="col-lg-4 col-md-6 portfolio-item"
            style={{ position: "absolute", left: "0px", top: "0px" }}
          >
            <div className="portfolio-img">
              <img
                className="img-fluid"
                src="https://bootstrapmade.com/demo/templates/Laura/assets/img/portfolio/portfolio-1.jpg"
                alt=""
              />
            </div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a
                href="https://bootstrapmade.com/demo/templates/Laura/assets/img/portfolio/portfolio-1.jpg"
                data-gallery="portafolioGallery"
                className="portfolio-lightbox preview-link"
                title="App 1"
              >
                <i class="bi bi-arrows-angle-expand"></i>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};
