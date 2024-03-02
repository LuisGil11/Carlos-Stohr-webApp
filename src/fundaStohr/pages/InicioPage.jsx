import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import CarouselComponent from "../components/CaourselComponent";
import { Card, Col, Container, Row } from "react-bootstrap";
import Footer from "../components/Footer";
import { ImageWrapper } from "../components/imageWrapper/ImageWrapper";
import { Slider } from "../components/slider/Slider";

export const InicioPage = () => {
  return (
    <div style={{ backgroundColor: "#032539" }}>
      <div
        id="inicio"
        className="d-flex flex-column justify-content-end align-items-center"
      >
        <Container>
          <h1 className="my-auto animate__animated animate__fadeIn">
            Fundación Carlos Stohr
          </h1>
          <h2 className="my-auto animate__animated animate__fadeIn">
            Una Fundación para preservar el legado cultural del que fue Cronista
            Gráfico de la Isla de Margarita, Venezuela.
          </h2>
          <div
            className="footer-icons animate__animated animate__backInLeft"
            style={{ marginBottom: "15rem", fontSize: "3rem" }}
          >
            <a className="ps-2 " href="https://www.facebook.com/fundastohr/">
              <i className="bi bi-facebook"></i>
            </a>
            <a className="ps-2" href="https://twitter.com/fundastohr?lang=es">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a
              className="ps-2"
              href="https://www.instagram.com/fundastohr/?hl=es"
            >
              <i className="bi bi-instagram"></i>
            </a>
            <a
              className="animate__animated animate__bounce ps-2"
              href="fundacion.carlos.stohr@gmail.com"
            >
              <i className="bi bi-envelope-fill"></i>
            </a>
          </div>
        </Container>
        <svg
          className="inicio-waves"
          viewBox="0 24 150 28 "
          preserveAspectRatio="none"
        >
          <defs>
            <path
              id="wave-path"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            ></path>
          </defs>
          <g className="wave1">
            <use
              href="#wave-path"
              x="50"
              y="3"
              fill="rgba(255,255,255, .1)"
            ></use>
          </g>
          <g className="wave2">
            <use
              href="#wave-path"
              x="50"
              y="0"
              fill="rgba(255,255,255, .2)"
            ></use>
          </g>
          <g className="wave3">
            <use href="#wave-path" x="50" y="9" fill="#fff"></use>
          </g>
        </svg>
      </div>
      <div
        style={{
          backgroundColor: "#ffffff",
          height: "60rem",
        }}
      >
        <Container className="pt-5">
          <Row className="d-flex justify-content-center animate__animated animate__backInUp">
            <ImageWrapper
              title={"Carlos Stohr"}
              subtitle={"Historia"}
              description={`Karel Franšitek Stöhr Breuer nace en Praga, 
              República Checa el 29 de Septiembre de 1931, hijo de Franšitek Josef Stöhr 
              y Maria Breuer; hermano mayor de Tomáš Franšitek, todos de origen checo y católicos.`}
              url={
                "https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Carlos%20Stohr%2FIMG_4520.jpg?alt=media&token=2fffe3bc-8155-4e05-a1f5-f8c7a63fe57e"
              }
              path={"/la-fundacion"}
            />
            <ImageWrapper
              title={"Concursos"}
              subtitle={"Actividades"}
              description={`Dentro de las actividades para materializarlo, 
              se encuentra el apoyo a los artistas plásticos del dibujo, 
              incentivar el Dibujo Urbano, buscando potenciales cronistas 
              gráficos que deseen plasmar las vivencias, costumbres y folclore de su entorno.`}
              url={
                "https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2Fartistas500px.jpg?alt=media&token=d7f65400-879d-482e-8859-61c99c814b7c"
              }
              path={"/concursos"}
            />
            <ImageWrapper
              title={"Exposiciones"}
              subtitle={"Actividades"}
              description={`Para Carlos Stohr la promoción de la cultura era vital. 
              Es por ello que siguiendo este legado, la Fundación apoya y fomenta a 
              los artistas del dibujo de Venezuela a través de Exposiciones  y actividades 
              de promoción. Los invitamos a visualizar las exposiciones virtuales y a seguir de 
              cerca nuestras muestras en museos y centros culturales.`}
              url={
                "https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Fotos%20Variadas%2Fexposicion500px.jpg?alt=media&token=a3d5a404-3684-4286-9d8e-9925ecfadc53"
              }
              path={"/exposiciones"}
            />
          </Row>
        </Container>
        <div style={{ backgroundColor: "#032539", height: "40%" }}>
          <Container className="pt-3">
            <h1
              className="title"
              style={{
                paddingTop: "3rem",
                display: "flex",
                justifyContent: "center",
                color: "white",
                textShadow: "0px 2px 0px 2px black",
              }}
            >
              Nuestros Aliados
            </h1>
            <Slider />
          </Container>
        </div>
        <Footer />
      </div>
    </div>
  );
};
