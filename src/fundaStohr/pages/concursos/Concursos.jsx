import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";
import { Tab } from "../../components/Tab/Tab";
import { tiposDeConcursos } from "../../data/infoConcursos";
import { TabContent } from "../../components/Tab/TabContent";
import "./concursos.css";

export const Concursos = () => {
  const [currentTab, setCurrentTab] = useState("alAireLibre");
  const handleTab = (id) => {
    setCurrentTab(id);
  };

  return (
    <>
      <div id="concursos">
        <Container
          style={{ marginTop: "8rem" }}
          className="animate__animated animate__fadeInUp"
        >
          <h2 className="title d-flex justify-content-center">Concursos</h2>
          <p
            style={{
              fontFamily: '"Raleway", sans-serif',
              fontWeight: "500",
              fontSize: "18px",
              textAlign: "justify",
            }}
          >
            La Fundación Carlos Stohr tiene como propósito fundamental el
            colaborar con la cultura venezolana, en especial la Neoespartana.
            Dentro de las actividades para materializarlo, se encuentra el apoyo
            a los artistas plásticos del dibujo, incentivar el Dibujo Urbano,
            buscando potenciales cronistas gráficos que deseen plasmar las
            vivencias, costumbres y folclore de su entorno. El apoyo se realiza
            a través de Concursos de Dibujos gratuitos, acompañados por jueces
            artistas plásticos, reconocidos de Venezuela. La premiación es
            material de dibujo profesional para cada ganador.
          </p>
        </Container>
      </div>
      <Container className="py-5 animate__animated animate__fadeInUp">
        <Row id="SobreNosotros">
          <Col style={pageStyles.col}>
            <Row>
              <div className="tabs col-lg-4 mb-5 mb-lg-0">
                {tiposDeConcursos.map((tipo) => (
                  <Tab
                    key={tipo.id}
                    {...tipo}
                    currentTab={currentTab}
                    handleTab={handleTab}
                  />
                ))}
              </div>
              <div className="tabs col-lg-8">
                {tiposDeConcursos.map((tipo) => (
                  <TabContent key={tipo.id} {...tipo} currentTab={currentTab} />
                ))}
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
