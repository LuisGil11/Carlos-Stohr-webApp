import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";
import { Tab } from "../../components/Tab/Tab";
import { tiposDeConcursos } from "../../data/infoConcursos";
import { TabContent } from "../../components/Tab/TabContent";
import "./concursos.css";
import { ConcursoModal } from "../../components/nuevoConcursoModal/ConcursoModal";
import { onSetTipoDeConcurso } from "../../../store/concursos/concursoSlice";
import { onOpenModal } from "../../../store/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  ConcursoFundastohr,
  ConcursoTematico,
  ConcursoEnLinea,
} from "../../components/InfoTipoConcursos";

export const Concursos = () => {
  const [currentTab, setCurrentTab] = useState("alAireLibre");
  const { tipoDeConcurso } = useSelector((state) => state.concurso);

  console.log(tipoDeConcurso);

  const dispatch = useDispatch();

  const handleTab = (id) => {
    setCurrentTab(id);
    dispatch(onSetTipoDeConcurso(id));
  };

  const handleOpen = () => {
    dispatch(onOpenModal());
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
        <div className="d-flex justify-content-end">
          <Button onClick={handleOpen}>Añadir Concurso</Button>
        </div>
        <ConcursoModal />
        {tipoDeConcurso === "fundastohr" && <ConcursoFundastohr />}
        {tipoDeConcurso === "tematico" && <ConcursoTematico />}
        {tipoDeConcurso === "en-linea" && <ConcursoEnLinea />}
      </Container>
      <Footer />
    </>
  );
};
