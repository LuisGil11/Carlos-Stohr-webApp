import Button from "react-bootstrap/Button";
import React from "react";
import CarouselComponent from "../components/CaourselComponent";
import { Card, Col, Container, Row } from "react-bootstrap";

export const InicioPage = () => {
  return (
    <div style={{ backgroundColor: "#032539" }}>
      <div
        style={{
          borderTop: "2px solid black",
          backgroundColor: "#ffffff",
          height: "45rem",
          // marginTop: "8rem",
          borderBottom: "2px solid black",
        }}
      >
        <Container className="d-flex align-items-center">
          <Col className="col-5 mx-auto">
            <Row className="my-auto">
              <h1
                style={{
                  fontWeight: "bold",
                  fontStyle: "oblique",
                  color: "#032539",
                  // textShadow: "2px 1px 0 black",
                  paddingBottom: "10px",
                  borderBottom: "3px solid #032539",
                }}
              >
                Fundación Carlos Stohr
              </h1>
              <h3
                style={{
                  fontStyle: "italic",
                  paddingTop: "3vh",
                  color: "#032539",
                  // textShadow: "2px 1px 0 black",
                }}
              >
                Una Fundación para preservar el legado cultural del que fue
                Cronista Gráfico de la Isla de Margarita, Venezuela.
              </h3>
            </Row>
            <Row>
              <Col style={{ marginTop: "5rem" }}>
                <a className="ps-2" href="https://www.facebook.com/fundastohr/">
                  <i
                    className="fa-5x ps-4 bi bi-facebook icon"
                    style={{
                      fontSize: "3rem",
                    }}
                  ></i>
                </a>
                <a
                  className="ps-2 "
                  href="https://twitter.com/fundastohr?lang=es"
                >
                  <i
                    className=" ps-4 bi bi-twitter-x"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </a>
                <a
                  className="ps-2 "
                  href="https://www.instagram.com/fundastohr/?hl=es"
                >
                  <i
                    className=" ps-4 bi bi-instagram"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </a>
                <a className="ps-2 " href="fundacion.carlos.stohr@gmail.com">
                  <i
                    className=" ps-4 bi bi-envelope-fill"
                    style={{ fontSize: "3rem" }}
                  ></i>
                </a>
              </Col>
            </Row>
          </Col>
          <Col>
            <img
              style={{
                borderRadius: "30% 70% 67% 33% / 30% 30% 70% 70%",
                marginTop: "8rem",
                marginBottom: "4rem",
                marginLeft: "15rem",
              }}
              src="assets/carlosStohr.webp"
              alt="Carlos Stohr"
              width="560"
              height="500"
            />
          </Col>
          <Row>
            <Card>a</Card>
            <Card>a</Card>
            <Card>a</Card>
          </Row>
        </Container>
      </div>
      <Container className="d-flex justify-content-center">
        <CarouselComponent />
      </Container>
      <div style={{ height: "50vh" }}></div>
    </div>
  );
};
