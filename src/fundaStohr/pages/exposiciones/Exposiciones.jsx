import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/Footer";
import "./exposiciones.css";

export const Exposiciones = () => {
  return (
    <div id="exposiciones" className="exposiciones">
      <Container style={{ marginTop: "8rem" }}>
        <h2 className="title d-flex justify-content-center">Exposiciones</h2>
      </Container>
      <Container className="d-flex justify-content-center pt-5">
        <Row className="gy-4 expo-item">
          <Col lg={5}>
            <h3
              className="subtitleLeft"
              style={{ fontFamily: '"Oswald", sans-serif', color: "#002b5e" }}
            >
              Entrevista a Carlos Stohr
            </h3>
            <p
              style={{
                fontFamily: '"Raleway", sans-serif',
                fontWeight: "500",
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              En mayo 2017 el Periódico El Sol de Margarita le realizó una
              entrevista a Carlos Stohr, quien refirió que la
              internacionalización de los artistas surgidos en el semillero
              insular, parecía estar muy lejos, con todo y que hay excelentes
              ponentes de las artes plásticas, unos nativos y otros que no, pero
              que se han formado en la Isla.
              <br />
              <br />
              <q style={{ fontStyle: "italic" }}>
                <strong>
                  La internacionalización de la cultura nunca ha sido fácil, ni
                  es un boleto que está ahí.
                </strong>
              </q>
              <br />
              <br />
              Percibía que habían muy buenos artistas, pero no tienen la
              suficiente promoción para expandirse a escala nacional y menos en
              el extranjero, por lo que cada artista debe ingeniársela para
              lograr promocionarse por sus propios medios, comenzando desde el
              terruño insular. Mostró gran preocupación de que el apoyo recibido
              no es suficiente para reflejar sus talentos y obras en otras
              zonas, dentro y fuera del país.
            </p>
          </Col>
          <Col className="d-flex align-items-center" lg={7}>
            <div className="image-stack">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Obras-Carlos-Stohr%2FIMG_1227.JPG?alt=media&token=a25f6684-21a5-4476-a6ed-48dcd663cc5a"
                alt=""
                className="stack-front"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Obras-Carlos-Stohr%2FIMG_1225.JPG?alt=media&token=4c824b7d-ce15-4435-bf68-14dab815d0ef"
                alt=""
                className="stack-back"
              />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="pb-3 pt-3" style={{ backgroundColor: "#f2f6fa" }}>
        <Container
          className="d-flex justify-content-center"
          style={{ marginTop: "8rem", marginBottom: "10rem" }}
        >
          <Row className="gy-4 expo-item justify-content-between align-items-stretch">
            <Col className="d-flex align-items-center" lg={6}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Obras-Carlos-Stohr%2Fevaluacion.jpeg?alt=media&token=a08a2c90-7933-4f0f-837b-dceea9a80b5d"
                alt=""
                className="img-fluid"
              />
            </Col>
            <Col lg={5} className="d-flex justify-content-center flex-column">
              <h3
                className="subtitleRight"
                style={{
                  fontFamily: '"Oswald", sans-serif',
                  textAlign: "end",
                  color: "#002b5e",
                }}
              >
                Promoción de los Artistas
              </h3>
              <p
                style={{
                  fontFamily: '"Raleway", sans-serif',
                  fontWeight: "500",
                  fontSize: "20px",
                  textAlign: "justify",
                }}
              >
                <q style={{ fontStyle: "italic" }}>
                  <strong>
                    En Margarita hay artistas, pintores y escultores, pero hace
                    falta que se den a conocer porque muchos de ellos se quedan
                    en sus talleres, y ni en su casa los conocen.
                  </strong>
                </q>
                <br />
                <br />
                Para Carlos Stohr la promoción de la cultura era vital. Concluyó
                su entrevista diciendo:
                <br />
                <br />
                <q style={{ fontStyle: "italic" }}>
                  <strong>
                    Si tuviera la oportunidad de hacerle un regalo a Margarita,
                    le daría toda la promoción que necesitan sus artistas para
                    proyectar sus obras, en la que se refleja la luz que irradia
                    la Isla, la cual siente como el principal pincel para cubrir
                    el lienzo de los pintores
                  </strong>
                </q>
                <br />
                <br />
                Es por ello que siguiendo este legado, la Fundación apoya y
                fomenta a los artistas del dibujo de Venezuela a través de
                Exposiciones y actividades de promoción. Los invitamos a
                visualizar las exposiciones virtuales y a seguir de cerca
                nuestras muestras en museos y centros culturales.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
