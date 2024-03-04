import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import { DoubleTitle } from "../../components/DoubleTitle/DoubleTitle";
import { CardsContacto } from "../../components/CardsContacto/CardsContacto";
import "./contacto.css";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];
const center = {
  lat: 10.493218487514199,
  lng: -66.85493479697271,
};

export const Contacto = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyBlI1yE_OEe3FUNK4JVuVn64Il8Jkula8A",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <Row>
      <div id="Contacto">
        <Container>
          <DoubleTitle title={"contact"} subtitle={"contáctanos"} />

          <Row id="contact" className="contact-info">
            <CardsContacto
              icono={"bi-geo-alt"}
              title={"Dirección"}
              description={
                "Avenida Francisco de Miranda, Caracas 1060, Miranda, Venezuela"
              }
              border
            />
            <CardsContacto
              icono={"bi bi-phone"}
              title={"Teléfono"}
              description={" Telf: +58 414-1203262 "}
              border
            />
            <CardsContacto
              icono={"bi bi-envelope"}
              title={"Email"}
              description={"fundacion.carlos.stohr@gmail.com"}
            />
          </Row>
          <div>
            <GoogleMap
              mapContainerStyle={{
                width: "100%",
                height: "30rem",
                zIndex: "99",
              }}
              zoom={14}
              center={center}
            >
              <MarkerF position={center} />
            </GoogleMap>
          </div>
        </Container>
      </div>
      <Footer />
    </Row>
  );
};
