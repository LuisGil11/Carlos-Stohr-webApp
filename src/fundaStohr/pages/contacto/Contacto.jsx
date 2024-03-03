import React from "react";
import { Container, Row } from "react-bootstrap";
import { pageStyles } from "../styles";
import Footer from "../../components/Footer";
import { DoubleTitle } from "../../components/DoubleTitle/DoubleTitle";
import { CardsContacto } from "../../components/CardsContacto/CardsContacto";
import "./contacto.css"

export const Contacto = () => {
  return (
    <Row>
      <div id = "Contacto" style={{marginBottom: '0rem'}}>
        <Container >
          <DoubleTitle 
            title={"contact"}
            subtitle={"contáctanos"}
          />
           
          <Row id = "contact" className="contact-info">
          
            <CardsContacto 
              icono={"bi-geo-alt"}
              title={"Dirección"}
              description={"Avenida Francisco de Miranda, Caracas 1060, Miranda, Venezuela"}
            /> 
            <CardsContacto 
              icono={"bi bi-phone"}
              title={"Teléfono"}
              description={" Telf: +58 414-1203262 "}
            /> 
            <CardsContacto 
              icono={"bi bi-envelope"}
              title={"Email"}
              description={"fundacion.carlos.stohr@gmail.com"}
            />
          </Row>
        </Container>
      </div>
      <Footer />
    </Row>
  );
};
