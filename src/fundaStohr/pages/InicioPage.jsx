import Button from "react-bootstrap/Button";
import React from "react";
import CarouselComponent from "../components/CaourselComponent";
import { Col, Container, Row } from "react-bootstrap";

export const InicioPage = () => {
  return (
    <div style={{ backgroundColor: "beige" }}>
      <Container className="d-flex justify-content-center">
        <CarouselComponent />
      </Container>
      <div
        style={{
          borderTop: "2px solid black",
          backgroundColor: "#E18335",
          height: "70vh",
          marginTop: "8vh",
        }}
      >
        <Container className="d-flex align-items-center">
          <Col className="col-5 mx-auto">
            <Row className="my-auto">
              <h1
                style={{
                  fontWeight: "bold",
                  fontStyle: "oblique",
                  color: "white",
                  textShadow: "2px 1px 0 black",
                  paddingBottom: "10px",
                  borderBottom: "3px solid white",
                }}
              >
                Fundación Carlos Stohr
              </h1>
              <h3
                style={{
                  fontStyle: "italic",
                  paddingTop: "3vh",
                  color: "white",
                  textShadow: "2px 1px 0 black",
                }}
              >
                Una Fundación para preservar el legado cultural del que fue
                Cronista Gráfico de la Isla de Margarita, Venezuela.
              </h3>
            </Row>
          </Col>
          <Col>
            <img
              style={{
                borderRadius: "30% 70% 67% 33% / 30% 30% 70% 70%",
                marginTop: "8vh",
                marginBottom: "4vh",
                marginLeft: "25vh",
              }}
              src="assets/carlosStohr.webp"
              alt="Carlos Stohr"
              width="560"
              height="500"
            />
          </Col>
        </Container>
      </div>
      <div style={{ height: "50vh" }}></div>
    </div>
  );
};
