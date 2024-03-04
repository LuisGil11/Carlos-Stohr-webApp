import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";
import "./apoyanos.css";
import { DoubleTitle } from "../../components/DoubleTitle/DoubleTitle";
import { DescriptionBox } from "../../components/DescriptionBox/DescriptionBox";

export const Apoyanos = () => {
  return (
    <div id="Apoyanos">
      <Container className="d-flex justify-content-center pt-5">
        <Row className="gy-4 expo-item">
          <DoubleTitle title={"support us"} subtitle={"apóyanos"} />
          <h1 className="apoyanos-title">
            ¿Cómo apoyar a la fundación Carlos Stohr?
          </h1>
          <h2 className="apoyanos-subtitle">
            Para ser parte de este proyecto que fomenta la promoción de la
            cultura y artistas del dibujo de Venezuela, tienes varias vías para
            contribuir:{" "}
          </h2>
          <Col className="d-flex align-items-center" lg={7}>
            <div className="image-stack">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Carlos%20Stohr%2FDSC_0262.JPG?alt=media&token=2316156e-36a8-4203-bc5e-4659222fc4db"
                alt=""
                className="stack-front"
              />
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Carlos%20Stohr%2FDSC_0294.JPG?alt=media&token=03e9e4d8-9eec-4ae6-8d74-caeffe22fac6"
                alt=""
                className="stack-back"
              />
            </div>
          </Col>
          <Col lg={5}>
            <h2 className="apoyanos-medios">
              ¡apóyanos a través de la compra de medios!
            </h2>
            <p className="text-apoyanos" style={{ textAlign: "justify" }}>
              Cada año entre los meses de agosto y septiembre, se realiza la
              compra de los premios para los concursos a realizarse el año
              siguiente. Estos premios son materiales de dibujo de alta calidad,
              que se compran a través de una lista que se habilita para que los
              interesados en apoyar, puedan escoger lo que deseen obsequiar y
              directamente adquirirlo para que forme parte de los premios a
              otorgar. Si desea recibir información para apoyar en la compra de
              materiales de dibujo contáctese con nosotros a través de las redes
              sociales y correo electrónico.
            </p>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: "#f2f6fa" }}>
        <Container className="d-flex justify-content-center">
          <Row className="gy-4 expo-item justify-content-between align-items-stretch">
            <Row className="d-flex justify-content-center box-apoyanos">
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <DescriptionBox
                  title={"Colaboración en Bs.  "}
                  description={
                    "Banco: Mercantil Nombre: Fundación Carlos Stohr Cuenta Corriente: 0105-004-16-1014697816 "
                  }
                  icon={"bi bi-cash-coin"}
                />
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <DescriptionBox
                  title={"¡Colabora con Nosotros!"}
                  description={
                    "Juntos, transformamos vidas. Únete a nuestra causa y sé parte del cambio que el mundo necesita."
                  }
                  icon={"bi bi-newspaper"}
                />
              </div>
              <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
                <DescriptionBox
                  title={"Colaboración en $USD"}
                  description={
                    "Banco: Mercantil Nombre: Fundación Carlos Stohr Cuenta Corriente: 0105-004-16-1014697816"
                  }
                  icon={"bi bi-paypal"}
                />
              </div>
            </Row>
            <Col lg={5} className="d-flex justify-content-center flex-column">
              <h3 className="subtitleRight">
                ¡descubre como contribuir para lograr un impacto positivo!
              </h3>
              <p
                className="text-apoyanos-second"
                style={{ textAlign: "justify" }}
              >
                Utilizado para el montaje y logística de los Concursos y
                Exposiciones, como también gastos administrativos y adquisición
                de bienes y servicios para logar los objetivos de la Fundación.
                Este apoyo puede realizarse en divisas a través de la plataforma
                Paypal o en Bolívares en la cuenta Bancaria de la Fundación.
              </p>
            </Col>
            <Col className="d-flex align-items-center" lg={6}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Carlos%20Stohr%2FCarlos-Stohr-633x373-transformed.jpeg?alt=media&token=14c573e6-3f73-48fd-b4ae-767efa3bc0fa"
                alt=""
                className="img-fluid image-border "
              />
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
