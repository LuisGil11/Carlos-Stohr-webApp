import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";

export const LaFundacion = () => {
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
          <h1 style={pageStyles.title}>Sobre Nosotros</h1>
          <hr
            className="text-black d-none d-sm-block"
            style={pageStyles.divider}
          />
          <Row>
            <Col style={pageStyles.col} className="col-xl-6 col-lg-12">
              <p style={pageStyles.text}>
                La Fundación Carlos Stohr fue creada en Julio 2018. Está
                conformada por sus hijos y amigos de la Isla de Margarita,
                quienes compartieron con el artista a lo largo de su incursión
                por la cultura, vivencias, usos y costumbres de los pueblos
                neoespartanos. La Fundación busca seguir el camino que nos trazó
                este artista, cronista gráfico y amigo de la cultura venezolana.
                Hacemos seguimiento al legado, a través de las siguientes
                actividades:
              </p>
              <ul style={pageStyles.ul}>
                <li style={pageStyles.li}>Preservar y conservar sus obras.</li>
                <li style={pageStyles.li}>
                  Organizar exposiciones de las obras de Carlos Stohr.
                </li>
                <li style={pageStyles.li}>
                  Apoyar y fomentar nuevas generaciones de artistas, a través de
                  Concursos de Dibujos, Exposiciones y actividades de promoción
                  y formación.
                </li>
              </ul>
              <div style={pageStyles.nuevaSeccion}>
                <h6
                  style={{
                    borderBottom: "1px solid black",
                    fontWeight: "bolder",
                    paddingBottom: "0.5rem",
                    fontSize: "30px",
                  }}
                >
                  Carlos Stohr
                </h6>
                <NavLink
                  href="assets/quote.webp"
                  style={{ fontStyle: "italic" }}
                >
                  <q>
                    No acostumbro seguir cabalmente los principios del dibujo.
                    Pinto la realidad social de una época, lo que veo, aquello
                    que me da la oportunidad de plasmar un mensaje. Deseo ser
                    claro en mis expresiones artísticas...
                  </q>
                </NavLink>
                <h6
                  style={{
                    fontWeight: "bold",
                    fontStyle: "italic",
                    paddingTop: "2rem",
                  }}
                >
                  A margarita con cariño: "MARGARITA UN SOLO ROSTRO"
                </h6>
              </div>
            </Col>
            <Col
              style={pageStyles.col}
              className="col-xl-6 col-lg-12 d-flex justify-content-center"
            >
              <img
                src="assets/LaFundacion1.jpg"
                alt="La Fundación"
                style={{ borderRadius: "30% 70% 41% 59% / 100% 0% 100% 0% " }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: "6rem" }} className="d-flex">
            <h1 id="Biografia" className="text-end" style={pageStyles.title}>
              Biografía de Carlos Stohr
            </h1>
            <hr
              className="text-black d-none d-sm-block"
              style={pageStyles.divider}
            />
            <Col style={pageStyles.col}>
              <Row>
                <Col style={pageStyles.col}>
                  <p className="LaFundacionBodys" style={pageStyles.text}>
                    Karel Franšitek Stöhr Breuer nace en Praga, República Checa
                    el 29 de Septiembre de 1931, hijo de Franšitek Josef Stöhr y
                    Maria Breuer; hermano mayor de Tomáš Franšitek, todos de
                    origen checo y católicos. Llega a Venezuela junto a su
                    familia en 1947 huyendo de la guerra y el comunismo; residen
                    en El Trompillo, Estado Carabobo. Estudia en el Liceo Don
                    Bosco, Valencia y luego en el Liceo Simón Bolívar en San
                    Cristóbal, Estado Tachira donde se gradúa de Bachiller en
                    1951. Traduce su nombre ante las autoridades venezolanas,
                    siendo conocido entonces como Carlos Francisco Stohr Breuer.
                  </p>
                </Col>
                <Col
                  style={pageStyles.col}
                  className="d-flex justify-content-center"
                >
                  <img src="assets/BioCarlosStohr1.webp" alt="BioCarlosStohr" />
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
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2FLaFundacion.jpeg?alt=media&token=855b4a24-b7c9-46fd-96e8-0f3654629607"
                    alt="BioCarlosStohr"
                  />
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
          <p style={pageStyles.text}>
            {" "}
            Ilustró libros del escritor José Joaquín Salazar Franco “Cheguaco”
          </p>
          <ul>
            <li style={pageStyles.li}>
              1991. “NUESTRAS VIVIENCIAS MARGARITEÑAS” - crónica de los pueblos
              y su gente
            </li>
            <li style={pageStyles.li}>
              1989. “EL DOBLE DOS DEL CHECO” sobre el juego del Dominó Reeditado
              2001
            </li>
            <li style={pageStyles.li}>
              1996. “MARGARITA UN SOLO ROSTRO” Costumbrismo
            </li>
            <li style={pageStyles.li}>1998. “LOS CHECOS EN VENEZUELA”</li>
            <li style={pageStyles.li}>
              2001. “EL CHECO TRAS LAS HUELLAS DEL COSTUMBRISMO MARGARITEÑO”
            </li>
            <li style={pageStyles.li}>
              2004. “MIS BODAS DE ORO EN MARGARITA”. Crónica
            </li>
            <li style={pageStyles.li}>
              {" "}
              2005. “MI PASO POR LA TRINIDAD” - Crónica
            </li>
            <li style={pageStyles.li}>
              2012. “RASTROS Y ROSTROS DE MARGARITA”. Ilustración
            </li>
          </ul>
        </Container>
      </Col>
      <Footer />
    </Row>
  );
};
