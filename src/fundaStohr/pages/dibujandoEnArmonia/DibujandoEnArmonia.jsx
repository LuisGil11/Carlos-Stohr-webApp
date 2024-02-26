import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";
import { ImageWrapper } from "../../components/ImageWrapper";

export const DibujandoEnArmonia = () => {
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
          <h1 style={pageStyles.title}>Dibujando En Armonía</h1>
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
                La Fundación Carlos Stohr en busca de actividades para el
                desarrollo artístico y cultural, en especial del Estado Nueva
                Esparta, se inspira en el trabajo realizado por un grupo de
                artistas en Margarita a través de lo que en su momento fue el
                Circulo de Dibujo de Nueva Esparta (CIRDINE), integrado por los
                artistas Cruz Acosta, Carlos Stohr, Carlos Aguirre, Francisco
                Roca, Ini Toledo, Juan Vicente Silva, Lissette Villamizar, Raúl
                Ávila y Veronica Rodríguez, quienes realizaban actividades en la
                isla para promover el arte del dibujo, la búsqueda de nuevas
                técnicas que permitieran compartir y descubrir sus diferentes
                posibilidades, manifestando:
              </p>
              <q style={{ fontStyle: "italic", fontSize: "20px" }}>
                Nosotros dibujamos para extraer la magia de las cosas que nos
                rodean; La finalidad primordial de CIRDINE es hacernos magos,
                convertirnos en taumaturgos para que con los trazos de grafito,
                tinta o acuarela, insuflemos al papel un alma para que viva. Nos
                estímula para que con la varita mágica del lápiz disfrutemos la
                solana tropical, los gráciles movimientos de las doradas
                margariteñas, los vigorosos esfuerzos de los pescadores en sus
                faenas y la ondulante cabellera de los cocoteros acariciada por
                el dulce aire de nuestra isla. En verdad, todos somos magos y
                esta magia se hace realidad cuando nos dejamos atrapar por el
                increíble placer de dibujar…
              </q>
              <hr style={pageStyles.divider} />
              <h6
                style={{
                  fontSize: "15px",
                  textAlign: "end",
                  fontStyle: "italic",
                }}
              >
                Juan Vicente Silva
              </h6>
            </Col>
          </Row>
          <Row className="pt-5 d-flex justify-content-center">
            <ImageWrapper
              title={"Talleres"}
              subtitle={"Actividades"}
              description={`Se organizan talleres con facilitadores 
            para compartir técnicas y materiales de dibujos que permitan 
            aprender o mejorar el arte del dibujo de los participantes.`}
              url={"./assets/DibujandoEnArmonia1.jpg"}
              path={"/dibujando-en-armonia"}
              section={"talleres-dibujando-en-armonía"}
            />
            <ImageWrapper
              title={"Talleres"}
              subtitle={"Actividades"}
              description={`Se organizan talleres con facilitadores 
            para compartir técnicas y materiales de dibujos que permitan 
            aprender o mejorar el arte del dibujo de los participantes.`}
              url={"./assets/DibujandoEnArmonia1.jpg"}
              path={"/dibujando-al-aire-libre"}
              section={"Talleres"}
            />
          </Row>
          <h1 style={pageStyles.title} id="talleres-dibujando-en-armonía">
            Talleres Dibujando En Armonía
          </h1>
          <hr
            className="text-black d-none d-sm-block"
            style={pageStyles.divider}
          />
          <Row>
            {/* <Col
              style={pageStyles.col}
              className="col-xl-6 col-lg-12 d-flex justify-content-center"
            ></Col> */}
            <Col style={pageStyles.col} className="col-xl-12 col-lg-12">
              <p style={pageStyles.text}>
                Los Talleres Dibujando en Armonía son actividades para compartir
                técnicas y materiales de dibujo que ofrezcan un aprendizaje y
                perfeccionamiento del arte del dibujo. A su vez fortalece los
                vínculos entre los artistas para crear un colectivo de artistas
                del Dibujo. Esta actividad está inicialmente centrada en la Isla
                de Margarita, Estado Nueva Esparta, Venezuela. Dirigido a niños,
                jóvenes y adultos.
              </p>
              <Row>
                <Col>
                  <h1 style={pageStyles.title}>Talleres Pastel al Óleo</h1>
                  <hr style={pageStyles.divider} />
                  <h4
                    style={{
                      textAlign: "end",
                      fontStyle: "italic",
                    }}
                  >
                    Compartir el arte del dibujo
                  </h4>
                  <p style={pageStyles.text}>
                    Fundastohr inicia este 2021 con un Taller de Pastel al Óleo
                    donde participaron los artistas que se destacaron en las
                    actividades realizadas desde nuestra creación en el 2019.
                    <br />
                    <br />
                    Fueron 16 artistas jóvenes adultos y una niña quienes
                    aceptaron la invitación a participar de un día para dibujar
                    con una técnica diferente al aire libre. Este taller fue
                    realizado el sábado 4 de septiembre del 2021 en casa de la
                    directora de arte de Fundastohr, la artista plástico
                    Lissette Villamizar, y se contó con el apoyo de los artistas
                    margariteños Gustavo Fernández y Miguel Armando Ávila,
                    quienes compartieron sus conocimientos del uso del pastel al
                    óleo en el dibujo.
                    <br />
                    <br />
                    El 29 de septiembre del 2021 con motivo a los 90 años de
                    nacimiento de Carlos Stohr, se inaugura a las 10:00 am en el
                    Museo Nueva Cádiz de la Asunción, Isla de Margarita, la
                    Exposición Pastel al Óleo, la cual muestra las obras de los
                    participantes y facilitadores de este taller; también a esta
                    muestra se incluye dos obras del Carlos Stohr.
                    <br />
                    <br />
                    Los invitamos a visitar esta Exposición, estará disponible
                    hasta finales de octubre 2021, en un horario de 9 am a 1:00
                    pm de Lunes a sábado en semana flexible (tiempos de medidas
                    sanitaria por Pandemia Covid 19).
                  </p>
                </Col>
                <Col>
                  <h1 style={pageStyles.title}>
                    Taller de Dibujo y Perspectiva para niños
                  </h1>
                  <hr style={pageStyles.divider} />
                  <h4
                    style={{
                      textAlign: "end",
                      fontStyle: "italic",
                    }}
                  >
                    Compartir el arte del dibujo
                  </h4>
                  <p style={pageStyles.text}>
                    Fundastohr realizó el primer Taller de Dibujo y Perspectiva
                    dirigido a lo artistas de la categoría infantil que se
                    destacaron en las actividades realizadas desde nuestra
                    creación en el 2019.
                    <br />
                    <br />
                    Fueron invitados 12 niñ@s a participar de una mañana, desde
                    las 9:00 am hasta las 1:00 pm el sábado 20 de noviembre del
                    2021 para dibujar ofreciendo técnicas de aprendizaje de la
                    perspectiva en el dibujo. Esta actividad se realizó al aire
                    libre en los jardines de la casa de la directora de arte de
                    Fundastohr, la artista plástico Lissette Villamizar, y se
                    contó con el apoyo de los artistas margariteños Yurenny
                    Oliveros,Gustavo Fernández y Miguel Armando Ávila.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            {/* <Col
              style={pageStyles.col}
              className="col-xl-6 col-lg-12 d-flex justify-content-center"
            ></Col> */}
            <Col style={pageStyles.col} className="col-xl-12 col-lg-12">
              <h1 style={pageStyles.title}>Encuentros al aire libre</h1>
              <hr
                className="text-black d-none d-sm-block"
                style={pageStyles.divider}
              />
              <p style={pageStyles.text}>
                Los Encuentros al aire libre de Dibujando en Armonía son
                actividades para promover el dibujo urbano, la conexión con una
                ciudad, un pueblo, su gente y todo aquello que nos identifica en
                cada región. Nos permite ser parte de la historia y en trazos
                documentar un momento, personas, actividades, creencias, que
                forman parte de nuestra idiosincracia. Es fomentar el cronismo
                gráfico. A su vez su vez, fortalece los vínculos entre los
                artistas y crea una relación que inicia y se desarrolla entre la
                recreación y el trazo.
                <br />
                <br />
                Los encuentros al aire libre permiten el aprendizaje del dibujo
                en un ambiente de sol y sombra, cambiante en todo momento,
                diferente a un estudio, cuarto o taller. El artista es parte de
                lo que sucede, ruido, personas hablando, música o silencio, es
                adaptarse a espacios diferentes con entornos camaleónicos, donde
                el color, la escena y las personas no se aquietan. Interesante
                arte, recreativo, divertido. Donde cada artista debe llevar lo
                que va a utilizar para dibujar. Escoge el material, la técnica y
                el apoyo para realizar su obra o boceto.
                <br />
                Fundastohr promueve y motiva a los artista inicialmente
                centrados en la Isla de Margarita, Estado Nueva Esparta,
                Venezuela a realizar esta actividad cada dos (2) meses. Dirigido
                a niños, jóvenes y adultos, abierto al todo público, tan solo
                debes estar atent@ de las invitaciones a dibujar al aire libre.
              </p>
              <Row>
                <Col>
                  <h1 style={pageStyles.title}>I Encuentro al Aire libre</h1>
                  <hr style={pageStyles.divider} />
                  <h4
                    style={{
                      textAlign: "end",
                      fontStyle: "italic",
                    }}
                  >
                    Dibujando en Armonía en Pampatar, Isla de Margarita
                  </h4>
                  <p style={pageStyles.text}>
                    Fundastohr, su directora de arte la artista Lissette
                    Villamizar y los artistas Gustavo Fernández y Miguel Armando
                    Ávila promueven junto al grupo de artistas de dibujo que
                    participaron en el Taller Pastel al Óleo, a realizar el
                    Primer Encuentro al Aire libre para dibujar en armonía el
                    entorno de la Isla de Margarita.
                    <br />
                    <br />
                    Invitaron a realizar una actividad diferente, recreativa y
                    artística. Donde los participantes llevaron sus materiales
                    de dibujo, la base dónde apoyar para dibujar al aire libre y
                    algo para hidratarse y merendar.
                    <br />
                    <br />
                    Fue una actividad abierta al público niños, jóvenes y
                    adultos. Escogieron los temas que más lo sintieron sentir
                    cómod@s del entorno a dibujar.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Col>
      <Footer />
    </Row>
  );
};
