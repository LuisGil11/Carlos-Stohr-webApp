import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";

export const Exposiciones = () => {
  return (
    <Row id="SobreNosotros">
      <Col style={pageStyles.col} sm={2}>
        <Sidebar />
      </Col>
      <Col
        style={pageStyles.col}
        sm={10}
        className="animate__animated animate__fadeIn"
      >
        <Container style={pageStyles.container}>
          <h2 className="title d-flex justify-content-center">Exposiciones</h2>
          <Row>
            <Col style={pageStyles.col} className="col-xl-6 col-lg-12">
              <Row>
                <p
                  style={{
                    color: "#555555",
                    fontFamily: "sans-serif",
                    textAlign: "justify",
                  }}
                >
                  En mayo 2017 el Periódico El Sol de Margarita le realizó una
                  entrevista a Carlos Stohr, quien refirió que la
                  internacionalización de los artistas surgidos en el semillero
                  insular, parecía estar muy lejos, con todo y que hay
                  excelentes ponentes de las artes plásticas, unos nativos y
                  otros que no, pero que se han formado en la Isla. "La
                  internacionalización de la cultura nunca ha sido fácil, ni es
                  un boleto que está “ahí”.
                  <br />
                  Percibía que habían muy buenos artistas, pero no tienen la
                  suficiente promoción para expandirse a escala nacional y menos
                  en el extranjero, por lo que cada artista debe ingeniársela
                  para lograr promocionarse por sus propios medios, comenzando
                  desde el terruño insular. Mostró gran preocupación de que el
                  apoyo recibido no es suficiente para reflejar sus talentos y
                  obras en otras zonas, dentro y fuera del país.
                </p>
              </Row>
              <Row>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2FActividades1.jpeg?alt=media&token=6f062129-8027-4c9c-97fb-36b81a2d45f7"
                  alt=""
                />
              </Row>
            </Col>
            <Col style={pageStyles.col} className="col-xl-6 col-lg-12">
              <Row>
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2FActividades2.jpeg?alt=media&token=19c7569a-c8d8-4cc4-b259-1d802a63d204"
                  alt=""
                  className="pb-5"
                />
              </Row>
              <Row className="pb-5">
                <hr className="py-2" />
                “En Margarita hay artistas, pintores y escultores, pero hace
                falta que se den a conocer porque muchos de ellos se quedan en
                sus talleres, y ni en su casa los conocen”, Para Carlos Stohr la
                promoción de la cultura era vital. Concluyó su entrevista
                diciendo: "Si tuviera la oportunidad de hacerle un regalo a
                Margarita, le daría toda la promoción que necesitan sus artistas
                para proyectar sus obras, en la que se refleja la luz que
                irradia la Isla, la cual siente como el principal pincel para
                cubrir el lienzo de los pintores ".
                <br />
                <br />
                Es por ello que siguiendo este legado, la Fundación apoya y
                fomenta a los artistas del dibujo de Venezuela a través de
                Exposiciones y actividades de promoción.
                <br />
                <br />
                Los invitamos a visualizar las exposiciones virtuales y a seguir
                de cerca nuestras muestras en museos y centros culturales.
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
      <Footer />
    </Row>
  );
};
