import React from "react";
import { Col, Container, NavLink, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";
import { Portafolio } from "../../components/portafolio/Portafolio";
import { obras } from "../../data/infoObras";
import { FadedTitle } from "../../components/FadedTitle/FadedTitle";
import { DescriptionBox } from "../../components/DescriptionBox/DescriptionBox";
import "./laFundacion.css";
import { SobreNosotrosCard } from "../../components/sobreNosotrosCard/SobreNosotrosCard";

export const LaFundacion = () => {
  return (
    <>
      <div id="sobreNosotros" className="sobreNosotros-cols">
        <Container className="sobreNosotros">
          <Row>
            <FadedTitle title="Sobre Nosotros" />
            <p>
              La Fundación Carlos Stohr fue creada en Julio 2018. Está
              conformada por sus hijos y amigos de la Isla de Margarita, quienes
              compartieron con el artista a lo largo de su incursión por la
              cultura, vivencias, usos y costumbres de los pueblos
              neoespartanos. La Fundación busca seguir el camino que nos trazó
              este artista, cronista gráfico y amigo de la cultura venezolana.
              Hacemos seguimiento al legado, a través de las siguientes
              actividades:
            </p>
            <Row className="sobreNosotros-cols">
              <SobreNosotrosCard
                title={"Preservación"}
                description={"Preservar y conservar sus obras."}
                imageUrl="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Obras-Carlos-Stohr%2FCastillo%201.jpg?alt=media&token=4592b44f-c921-4752-8008-3a3fc389b20a"
                icon="bi bi-palette"
              />
              <SobreNosotrosCard
                title={"Exposiciones"}
                description={
                  "Organizar exposiciones de las obras de Carlos Stohr."
                }
                imageUrl="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2Factividades3.jpeg?alt=media&token=1eaa4c32-3f43-43f9-be0a-74ff313df880"
                icon="bi bi-calendar-event"
              />
              <SobreNosotrosCard
                title={"Nuevos Artistas"}
                description={`Apoyar y fomentar nuevas generaciones de artistas, a través de
              Concursos de Dibujos, Exposiciones y actividades de promoción y
              formación.`}
                imageUrl="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2FalAireLibre.jpeg?alt=media&token=9fbb69cf-c7a2-44a5-bcca-e9fdd67dc451"
                icon="bi bi-search"
              />
            </Row>
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
              <NavLink href="assets/quote.webp" style={{ fontStyle: "italic" }}>
                <q>
                  No acostumbro seguir cabalmente los principios del dibujo.
                  Pinto la realidad social de una época, lo que veo, aquello que
                  me da la oportunidad de plasmar un mensaje. Deseo ser claro en
                  mis expresiones artísticas...
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
          </Row>
        </Container>
      </div>
      <Container className="timeline">
        <Row>
          <FadedTitle title="Biografía" />
          <Col lg={6}>
            <h3 className="timeline-title">Nacimiento y Juventud</h3>
            <div className="timeline-item">
              <h4>Karel Franšitek Stöhr Breuer</h4>
              <h5>1931</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Karel Franšitek Stöhr Breuer nace en Praga, República Checa el
                29 de Septiembre de 1931, hijo de Franšitek Josef Stöhr y Maria
                Breuer; hermano mayor de Tomáš Franšitek, todos de origen checo
                y católicos.
              </p>
            </div>
            <div className="timeline-item pb-0">
              <h4>Llegada a Venezuela</h4>
              <h5>1947 - 1951</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Llega a Venezuela junto a su familia en 1947 huyendo de la
                guerra y el comunismo; residen en El Trompillo, Estado Carabobo.
                Estudia en el Liceo Don Bosco, Valencia y luego en el Liceo
                Simón Bolívar en San Cristóbal, Estado Tachira donde se gradúa
                de Bachiller en 1951. Traduce su nombre ante las autoridades
                venezolanas, siendo conocido entonces como Carlos Francisco
                Stohr Breuer.
              </p>
            </div>
            <h3 className="timeline-title">La Isla de Margarita</h3>
            <div className="timeline-item">
              <h4>Anécdota Curiosa</h4>
              <h5>1952</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                En 1952 conoce a Rafael “Fucho” Tovar trabajando en el Banco
                Holandés, quien le recomienda vistar la isla de Margarita. En
                1953 llega por primera vez a la isla de Margarita, en un viaje
                que realiza desde el Estado Sucre.
              </p>
            </div>
            <div className="timeline-item pb-0">
              <h4>Cercanía a la Isla</h4>
              <h5>1970 - 1980</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Entre los años 70 y 80 se vincula más de cerca con la cultura
                margariteña y conoce a José Joaquín Salazar "Cheguaco”, y
                realiza los dibujos sobre mitos y leyendas de la isla, escritas
                por el maestro.
              </p>
            </div>
          </Col>
          <Col lg={6}>
            <h3 className="timeline-title">Vida en Venezuela</h3>
            <div className="timeline-item">
              <h4>Vida Personal</h4>
              <h5>1958</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                En 1958 se casa con Karen Fossing originaria de Dinamarca, con
                quien tuvo 4 hijos, Martin, Niels, Diana y Karina.
              </p>
            </div>
            <div className="timeline-item">
              <h4>Logros</h4>
              <h5>1954</h5>
              <p></p>
              <ul
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                <li>
                  Representa a Venezuela en los Panamericanos 1954 y gana
                  Medalla Plata en Saltos Ornamentales.
                </li>
                <li>
                  Egresa de la Facultad de Ingeniería en la especialidad de
                  Agrimensor de la Universidad Central de Venezuela en 1959.
                </li>
              </ul>
            </div>
            <h3 className="timeline-title">Vida Profesional</h3>
            <div className="timeline-item">
              <h4>Instituto Agrario Nacional Sector Oriente</h4>
              <h5>1961</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                En 1961 trabaja en el Instituto Agrario Nacional Sector Oriente,
                donde conoce los pueblos, cultura y personalidades de esta
                región.
              </p>
            </div>
            <div className="timeline-item pb-0">
              <h4>Trabajo urbanista</h4>
              <h5>1964 - 2005</h5>
              <p
                style={{
                  marginBottom: "1rem",
                  marginTop: 0,
                  fontFamily: "sans-serif",
                }}
              >
                Entre 1964 al 2005 trabaja en la empresa familiar de Karel
                Klemprer y su esposa Ivonne González Ricones, donde diseñó
                varias Urbanizaciones en el Este de Caracas como Sorocaima, La
                Tahona, Las Esmeraldas y Las Granjerías.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <FadedTitle title="Arte y estilo" />
        <Row className="d-flex justify-content-center">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <DescriptionBox
              title="Técnica"
              description="Tinta china, grafito, plumilla, pinceles, acuarelas, sanguina
                pasteles y con menos frecuencia el óleo. Su trabajo sobre papel
                mayormente."
              icon="bi bi-brush"
            />
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <DescriptionBox
              title="Temática"
              description="Paisajes, vivencias, oficios, usos y costumbres del gentilicio margariteño."
              icon="bi bi-easel"
            />
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <DescriptionBox
              title="Firma"
              description="El artista firmaba sus obras *C.STOHR*.
                En obras abstractas y/o modernas *C.S. PRAGA*"
              icon="bi bi-pen"
            />
          </div>
        </Row>
        <FadedTitle
          title="Algunas Obras"
          description="El Cronista Gráfico y algunas de sus obras"
        />
        <Portafolio imagenes={obras} />
        <Container className="menu pb-5">
          <FadedTitle
            title="Libros"
            description="Ilustró libros del escritor José Joaquín Salazar Franco “Cheguaco”"
          />
          <Row>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“NUESTRAS VIVIENCIAS MARGARITEÑAS”</h6>
                <span>1991</span>
              </div>
              <div className="menu-ingredients">
                crónica de los pueblos y su gente
              </div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“EL DOBLE DOS DEL CHECO”</h6>
                <span>1989 / 2001</span>
              </div>
              <div className="menu-ingredients">
                sobre el juego del Dominó Reeditado 2001
              </div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“MARGARITA UN SOLO ROSTRO”</h6>
                <span>1996</span>
              </div>
              <div className="menu-ingredients">Costumbrismo</div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“LOS CHECOS EN VENEZUELA”</h6>
                <span>1998</span>
              </div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6 style={{ marginRight: "7rem" }}>
                  “EL CHECO TRAS LAS HUELLAS DEL COSTUMBRISMO MARGARITEÑO”
                </h6>
                <span className="d-flex align-items-center">2001</span>
              </div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“MIS BODAS DE ORO EN MARGARITA”</h6>
                <span>2004</span>
              </div>
              <div className="menu-ingredients">Crónica</div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“MI PASO POR LA TRINIDAD”</h6>
                <span>2005</span>
              </div>
              <div className="menu-ingredients">Crónica</div>
            </Col>
            <Col lg={6} className="menu-item">
              <div className="menu-content">
                <h6>“RASTROS Y ROSTROS DE MARGARITA”</h6>
                <span>2012</span>
              </div>
              <div className="menu-ingredients">Ilustración</div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
};
