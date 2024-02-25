import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../index.css";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  const location = useLocation();

  return (
    <Navbar
      // bg="primary"
      variant="light"
      expand="xl"
      fixed="top"
    >
      <Container
        className="justify-content-between align-items-center"
        // style={{ height: "8.5vh" }}
      >
        <Navbar.Brand href="/">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Logo%2Ffundacion.png?alt=media&token=8483e11e-3f9c-4b02-82ff-1a3a346465f8"
            alt="FundaStohr"
            height="70vh"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggler" />
        <Navbar.Collapse id="navbarToggler">
          <Nav className="ms-auto navbarItem">
            <Nav.Link
              href="/la-fundacion"
              className={`myCustomLinkClass ${
                location.pathname === "/la-fundacion" ? "active" : ""
              }`}
            >
              LA FUNDACIÓN
            </Nav.Link>
            <Nav.Link
              href="/concursos"
              className={`myCustomLinkClass ${
                location.pathname === "/concursos" ? "active" : ""
              }`}
            >
              CONCURSOS
            </Nav.Link>
            <Nav.Link
              href="/exposiciones"
              className={`myCustomLinkClass ${
                location.pathname === "/exposiciones" ? "active" : ""
              }`}
            >
              EXPOSICIONES
            </Nav.Link>
            <Nav.Link
              href="/dibujando-en-armonia"
              className={`myCustomLinkClass ${
                location.pathname === "/dibujando-en-armonia" ? "active" : ""
              }`}
            >
              DIBUJANDO EN ARMONÍA
            </Nav.Link>
            <Nav.Link
              href="/contacto"
              className={`myCustomLinkClass ${
                location.pathname === "/contacto" ? "active" : ""
              }`}
            >
              CONTACTO
            </Nav.Link>
            <Nav.Link
              href="/apoyanos"
              className={`myCustomLinkClass ${
                location.pathname === "/apoyanos" ? "active" : ""
              }`}
            >
              APÓYANOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
