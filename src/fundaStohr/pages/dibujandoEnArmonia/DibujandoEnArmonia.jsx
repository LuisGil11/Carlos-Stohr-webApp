import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";

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
          <Row style={{ marginTop: "6rem" }} className="d-flex">
            <h1 id="Biografia" className="text-end" style={pageStyles.title}>
              Talleres Dibujando en Armonía
            </h1>
            <hr
              className="text-black d-none d-sm-block"
              style={pageStyles.divider}
            />
            <Col style={pageStyles.col}>
              <Row>
                <Col style={pageStyles.col}>
                  <p className="LaFundacionBodys" style={pageStyles.text}>
                    Los Talleres Dibujando en Armonía son actividades para
                    compartir técnicas y materiales de dibujo que ofrezcan un
                    aprendizaje y perfeccionamiento del arte del dibujo. A su
                    vez fortalece los vínculos entre los artistas para crear un
                    colectivo de artistas del Dibujo. Esta actividad está
                    inicialmente centrada en la Isla de Margarita, Estado Nueva
                    Esparta, Venezuela. Dirigido a niños, jóvenes y adultos.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={pageStyles.col}></Col>
                <Col style={pageStyles.col}>
                  <h5 style={{ fontWeight: "bold" }}>Anecdota Curiosa:</h5>
                  <hr style={pageStyles.divider} />
                  <p style={pageStyles.text}>
                    En 1952 conoce a Rafael “Fucho” Tovar trabajando en el Banco
                    Holandés, quien le recomienda vistar la isla de Margarita.
                    En 1953 llega por primera vez a la isla de Margarita, en un
                    viaje que realiza desde el Estado Sucre.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={pageStyles.col}>
                  <p style={pageStyles.text}>
                    Representa a Venezuela en los Panamericanos 1954 y gana
                    Medalla Plata en Saltos Ornamentales. En 1958 se casa con
                    Karen Fossing originaria de Dinamarca, con quien tuvo 4
                    hijos, Martin, Niels, Diana y Karina. Egresa de la Facultad
                    de Ingeniería en la especialidad de Agrimensor de la
                    Universidad Central de Venezuela en 1959. En 1961 trabaja en
                    el Instituto Agrario Nacional Sector Oriente, donde conoce
                    los pueblos, cultura y personalidades de esta región.
                  </p>
                </Col>
                <Col style={pageStyles.col}></Col>
              </Row>
              <Row>
                <Col style={pageStyles.col}></Col>
                <Col style={pageStyles.col}>
                  <p style={pageStyles.text}>
                    Entre los años 70 y 80 se vincula más de cerca con la
                    cultura margariteña y conoce a José Joaquín Salazar
                    "Cheguaco”, y realiza los dibujos sobre mitos y leyendas de
                    la isla, escritas por el maestro. Entre 1964 al 2005 trabaja
                    en la empresa familiar de Karel Klemprer y su esposa Ivonne
                    González Ricones, donde diseñó varias Urbanizaciones en el
                    Este de Caracas como Sorocaima, La Tahona, Las Esmeraldas y
                    Las Granjerías.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col style={pageStyles.col}>
                  <p style={pageStyles.text}>
                    A los 75 años, se retira a la isla de Margarita donde
                    documenta todo su trabajo sobre las costumbres e historia de
                    la isla. Realiza aportes a la cultura Margariteña, recibe
                    varios títulos y, reconocimientos otorgados por la
                    Gobernación, Alcaldías y grupos del medio del arte en el
                    estado Nueve Esparta. Muere el 24 de Diciembre del 2017 a
                    los 86 años en la ciudad de Caracas
                  </p>
                </Col>
                <Col
                  style={pageStyles.col}
                  className="col-6 d-flex justify-content-center"
                >
                  <img src="assets/BioCarlosStohr2.jpg" alt="BioCarlosStohr" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <h1 id="ArteYEstilo" style={pageStyles.title}>
              Arte y Estilo
            </h1>
            <hr
              className="text-black d-none d-sm-block"
              style={pageStyles.divider}
            />
            <Col style={pageStyles.col}>
              <h3 style={{ fontWeight: "bold" }}>Técnica </h3>
              <p style={pageStyles.text}>
                Tinta china, grafito, plumilla, pinceles, acuarelas, sanguina
                pasteles y con menos frecuencia el óleo. Su trabajo sobre papel
                mayormente.
              </p>
            </Col>
            <Col>
              <img src="assets/ArteYEstilo1.webp" alt="Arte y Estilo" />
              <img src="assets/ArteYEstilo2.webp" alt="Arte y Estilo" />
            </Col>
          </Row>
          <h1 id="AlgunasObras" style={pageStyles.title}>
            Algunas Obras
          </h1>
          <hr
            className="text-black d-none d-sm-block"
            style={pageStyles.divider}
          />
          <h1 id="Libros" style={pageStyles.title}>
            Libros
          </h1>
          <hr
            className="text-black d-none d-sm-block"
            style={pageStyles.divider}
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
        </Container>
      </Col>
    </Row>
  );
};
