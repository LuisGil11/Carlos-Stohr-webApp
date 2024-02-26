import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Sidebar } from "../../components/Sidebar";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";

export const Concursos = () => {
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
          <h1 style={pageStyles.title}>Concursos</h1>
          <hr
            className="text-black d-none d-sm-block"
            style={pageStyles.divider}
          />
          <Row>
            <Col
              style={pageStyles.col}
              className="col-xl-6 col-lg-12 d-flex justify-content-center"
            >
              <img
                src="assets/DibujandoEnArmonia1.jpg"
                alt="La Fundación"
                style={{ borderRadius: "34% 66% 14% 86% / 100% 7% 93% 0% " }}
              />
            </Col>
            <Col style={pageStyles.col} className="col-xl-6 col-lg-12">
              <p style={pageStyles.text}>
                La Fundación Carlos Stohr tiene como propósito fundamental el
                colaborar con la cultura venezolana, en especial la
                Neoespartana. Dentro de las actividades para materializarlo, se
                encuentra el apoyo a los artistas plásticos del dibujo,
                incentivar el Dibujo Urbano, buscando potenciales cronistas
                gráficos que deseen plasmar las vivencias, costumbres y folclore
                de su entorno.
                <br />
                El apoyo se realiza a través de Concursos de Dibujos gratuitos,
                acompañados por jueces artistas plásticos, reconocidos de
                Venezuela. La premiación es material de dibujo profesional para
                cada ganador.
                <br />
                <br />
                Los Concursos de Dibujo se realizan anualmente en varias
                modalidades:
              </p>
            </Col>
          </Row>
          <Row>
            <h1 id="ArteYEstilo" style={pageStyles.title}>
              Concurso Fundastohr - "Al Aire Libre"
            </h1>
            <hr
              className="text-black d-none d-sm-block"
              style={pageStyles.divider}
            />
            <Col style={pageStyles.col}>
              <p style={pageStyles.text}>
                Planteado al estilo "Dibujo Urbano en inglés Urban Sketchers"
                para realizarse en un horario comprendido entre las 9 am a las
                2:00 pm, donde niños, jóvenes y adultos, dibujan en un espacio
                previamente definido, al aire libre, cada participante escoge lo
                que desee plasmar, según el criterios de los usos, costumbres
                del lugar y su gentilicio.
                <br />
                Es un concurso dirigido a artistas que ya tengan el conocimiento
                del dibujo al aire libre, tanto para residentes del estado Nueva
                Esparta como para artistas residentes de otras partes del país
                que se programen previamente para participar en la actividad.
                <br />
                Este concurso se logra con el patrocinio colectivo de las
                personas que apoyan económicamente a la fundación y sus
                actividades.
                <br />
                El ganador de la categoría adulto gana a parte de materiales
                profesionales de dibujo, el derecho de realizar una muestra
                individual en un centro de artes o museo de importancia en la
                Isla de Margarita.
                <br />
                El primer Concurso Fundastohr se realizó en la Asunción en abril
                del 2019. Luego el segundo Concurso se realizó en Pampatar en
                agosto del 2022, y la tercera edición se realizó en el valle del
                Espíritu Santo en noviembre 2023. Se organizará la cuarta
                experiencia en otra localidad de importancia de la isla, se
                estima la fecha agosto-septiembre 2024. Se anunciará después del
                primer trimestre del 2024.
              </p>
            </Col>
          </Row>
          <Row>
            <h1 id="ArteYEstilo" style={pageStyles.title}>
              Concurso Temático
            </h1>
            <hr
              className="text-black d-none d-sm-block"
              style={pageStyles.divider}
            />
            <Col style={pageStyles.col}>
              <p style={pageStyles.text}>
                Planteado para jóvenes y adultos a partir de los 15 años en
                adelante.
                <br />
                En busca del dibujo urbano, donde se plantea un tema específico
                de los usos costumbres y vivencias. En un periodo de 3 semanas
                el participante debe ir al lugar, estudiar sobre el tema,
                escoger cómo y qué plasmar. A su vez debe acompañar su dibujo de
                una breve reseña histórica sobre el tema. Es la combinación del
                arte con la historia, es encaminar al participante al cronismo
                gráfico.
                <br />
                <br />
                Se ha realizado dos concursos temáticos: Iglesias de Nueva
                Esparta en agosto del 2019 y Cocina Margariteña en octubre del
                2021. Aún no se tiene programado Concurso temático.
                <br />
                <br />
                Este concurso se realiza en conjunto con una persona natural o
                jurídica que decida colaborar en esta actividad de promoción y
                apoyo
              </p>
            </Col>
          </Row>
          <Row>
            <h1 id="ArteYEstilo" style={pageStyles.title}>
              Concurso en Línea
            </h1>
            <hr
              className="text-black d-none d-sm-block"
              style={pageStyles.divider}
            />
            <Col style={pageStyles.col}>
              <p style={pageStyles.text}>
                Planteado para jóvenes y adultos a partir de los 15 años en
                adelante.
                <br />
                Luego de la experiencia de Concursos Online 2020 motivados a
                realizar actividades para recrearnos en casa, debido a la medida
                de cuarentena por protección de salud pública a causa de la
                Pandemia de Covid 2019, la Fundación Carlos Stohr decide
                incorporar el Concurso de Dibujo en línea, de esta forma toda
                aquella persona que resida en Venezuela pueda participar en el
                Concurso realizando su inscripción en línea y entregando su obra
                vía correo electrónico. El tema debe ser desarrollado por cada
                participante según las indicaciones en la base del concurso.
                <br />
                Se han realizado varios Concursos: Margarita Protección y
                Devoción en marzo 2020; Dibujando Historias de Oportunidad en la
                Adversidad en el 2020 y 2021; Dibujo Urbano Venezuela 2021-2022
                -2023 el cual se realiza el primer trimestre de cada año.
                <br />
                <br />
                Próximo concurso en línea; Dibujo Urbano Venezuela 2024 - Se
                estima abril 2024
                <br />
                <br />
                Estos concursos se logran con el patrocinio colectivo de las
                personas que apoyan económicamente a la fundación y sus
                actividades, como por la colaboración de organizaciones como
                ACNUR Venezuela, para el caso de Dibujando Historias de
                Oportunidad en la Adversidad.
              </p>
            </Col>
          </Row>
        </Container>
      </Col>
      <Footer />
    </Row>
  );
};
