import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../../index.css";
import "./navbar.css";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  console.log(!(window.innerWidth > 991));
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust the scroll threshold as needed
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      id="header"
      className={`d-flex fixed-top align-items-center  ${
        scrolled ? "header-scrolled" : "header-transparent"
      }`}
      expand="lg"
    >
      <Container className="d-flex align-items-center justify-content-between">
        <Navbar.Brand href="/">
          <div className="logo">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/Logo%2Ffundacion.png?alt=media&token=8483e11e-3f9c-4b02-82ff-1a3a346465f8"
              alt="FundaStohr"
              height="60vh"
              className="d-inline-block align-top"
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar" className="justify-content-end">
          <Nav
            id="navbar"
            className="ms-auto navbarItem navbar"
            style={{ fontFamily: '"Madimi One", sans-serif' }}
          >
            <Nav.Link
              href="/la-fundacion"
              className={`${
                location.pathname === "/la-fundacion" ? "active" : ""
              }`}
            >
              LA FUNDACIÓN
            </Nav.Link>
            <Nav.Link
              href="/concursos"
              className={`${
                location.pathname === "/concursos" ? "active" : ""
              }`}
            >
              CONCURSOS
            </Nav.Link>
            <Nav.Link
              href="/exposiciones"
              className={`${
                location.pathname === "/exposiciones" ? "active" : ""
              }`}
            >
              EXPOSICIONES
            </Nav.Link>
            <Nav.Link
              href="/dibujando-en-armonia"
              className={`${
                location.pathname === "/dibujando-en-armonia" ? "active" : ""
              }`}
            >
              DIBUJANDO EN ARMONÍA
            </Nav.Link>
            <Nav.Link
              href="/contacto"
              className={`${location.pathname === "/contacto" ? "active" : ""}`}
            >
              CONTACTO
            </Nav.Link>
            <Nav.Link
              href="/apoyanos"
              className={`${location.pathname === "/apoyanos" ? "active" : ""}`}
            >
              APÓYANOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
