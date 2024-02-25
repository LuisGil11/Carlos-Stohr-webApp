import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import CarouselComponent from "../components/CaourselComponent";
import { Card, Col, Container, Row } from "react-bootstrap";
import { ImageWrapper } from "../components/ImageWrapper";

const styles = {
  card: {
    height: "15rem",
    width: "15rem",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#032539",
  },
  cardText: { color: "white", textShadow: "2px 2px 0 black" },
};

export const InicioPage = () => {
  const [count, setCount] = useState(0);

  const startCounting = () => {
    const target = 8;
    const intervalId = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) return prevCount + 1;
        else clearInterval(intervalId);
        return target;
      });
    }, 100);
  };

  useEffect(() => {
    startCounting();
  }, []);

  return (
    <div style={{ backgroundColor: "#032539" }}>
      <div
        style={{
          borderTop: "2px solid black",
          backgroundColor: "#ffffff",
          height: "80rem",
          // marginTop: "8rem",
          borderBottom: "2px solid black",
        }}
      >
        <Container className="d-flex align-items-center">
          <Col className="col-5 mx-auto">
            <Row className="my-auto animate__animated animate__fadeIn animate__slower">
              <h1
                style={{
                  fontFamily: '"DM Sans", sans-serif',
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
                  fontFamily: '"DM Sans", sans-serif',
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
                <div className="animate__animated animate__backInLeft">
                  <a
                    className="ps-2 "
                    href="https://www.facebook.com/fundastohr/"
                  >
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
                  <a
                    className="animate__animated animate__bounce ps-2"
                    href="fundacion.carlos.stohr@gmail.com"
                  >
                    <i
                      className=" ps-4 bi bi-envelope-fill"
                      style={{ fontSize: "3rem" }}
                    ></i>
                  </a>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="animate__animated animate__fadeIn animate__slower">
            <img
              style={{
                borderRadius: "30% 70% 67% 33% / 30% 30% 70% 70%",
                marginTop: "8rem",
                marginBottom: "4rem",
                marginLeft: "5rem",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Carlos%20Stohr%2FDSC_0294.JPG?alt=media&token=03e9e4d8-9eec-4ae6-8d74-caeffe22fac6"
              alt="Carlos Stohr"
              width="600"
              height="400"
            />
          </Col>
        </Container>
        <Container>
          <Row className="d-flex justify-content-center animate__animated animate__backInUp">
            {/* <Card className="shadow-lg mx-4 slideInBack" style={styles.card}>
              <h1 style={styles.cardText}>8</h1>
              <h4 style={styles.cardText}>Concursos</h4>
            </Card>
            <Card className="shadow-lg mx-4 slideInBack" style={styles.card}>
              <h1 style={styles.cardText}>+150</h1>
              <h4 style={styles.cardText}>Participantes</h4>
            </Card>
            <Card className="shadow-lg mx-4 slideInBack" style={styles.card}>
              <h1 style={styles.cardText}>10</h1>
              <h4 style={styles.cardText}>Exposiciones</h4>
            </Card> */}
            <ImageWrapper
              title={"Carlos Stohr"}
              subtitle={"Historia"}
              description={`Karel Franšitek Stöhr Breuer nace en Praga, 
              República Checa el 29 de Septiembre de 1931, hijo de Franšitek Josef Stöhr 
              y Maria Breuer; hermano mayor de Tomáš Franšitek, todos de origen checo y católicos.`}
              url={
                "https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Carlos%20Stohr%2FIMG_4520.jpg?alt=media&token=2fffe3bc-8155-4e05-a1f5-f8c7a63fe57e"
              }
              path={"/la-fundacion"}
              section={"Biografia"}
            />
            <ImageWrapper
              title={"Concursos"}
              subtitle={"Actividades"}
              description={`Dentro de las actividades para materializarlo, 
              se encuentra el apoyo a los artistas plásticos del dibujo, 
              incentivar el Dibujo Urbano, buscando potenciales cronistas 
              gráficos que deseen plasmar las vivencias, costumbres y folclore de su entorno.`}
              url={"./assets/DibujandoEnArmonia1.jpg"}
              path={"/concursos"}
            />
            <ImageWrapper
              title={"Concursos"}
              subtitle={"Actividades"}
              description={`Dentro de las actividades para materializarlo, 
              se encuentra el apoyo a los artistas plásticos del dibujo, 
              incentivar el Dibujo Urbano, buscando potenciales cronistas 
              gráficos que deseen plasmar las vivencias, costumbres y folclore de su entorno.`}
              url={"./assets/DibujandoEnArmonia1.jpg"}
              path={"/concursos"}
            />
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
