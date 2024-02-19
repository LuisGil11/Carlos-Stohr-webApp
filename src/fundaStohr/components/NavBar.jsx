import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../index.css";

export const NavBar = () => {
  return (
    <Navbar
      // bg="primary"
      variant="light"
      expand="xl"
      fixed="top"
    >
      <Container className="justify-content-between align-items-center">
        <Navbar.Brand href="/">
          <img
            src="assets/FCS_JPG-transformed.webp"
            alt="CarlosStohr"
            height="70vh"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarToggler" />
        <Navbar.Collapse id="navbarToggler">
          <Nav className="ms-auto navbarItem">
            <Nav.Link href="/la-fundacion">LA FUNDACIÓN</Nav.Link>
            <Nav.Link href="/concursos">CONCURSOS</Nav.Link>
            <Nav.Link href="/exposiciones">EXPOSICIONES</Nav.Link>
            <Nav.Link href="/dibujando-en-armonia">
              DIBUJANDO EN ARMONÍA
            </Nav.Link>
            <Nav.Link href="/contacto">CONTACTO</Nav.Link>
            <Nav.Link href="/apoyanos">APÓYANOS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
