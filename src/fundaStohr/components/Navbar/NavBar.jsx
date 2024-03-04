import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../../index.css";
import "./navbar.css";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
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
              <i className="bi bi-building pe-2"></i>
              LA FUNDACIÓN
            </Nav.Link>
            <Nav.Link
              href="/concursos"
              className={`${
                location.pathname === "/concursos" ? "active" : ""
              }`}
            >
              <i className="bi bi-trophy-fill pe-2"></i>
              CONCURSOS
            </Nav.Link>
            <Nav.Link
              href="/exposiciones"
              className={`${
                location.pathname === "/exposiciones" ? "active" : ""
              }`}
            >
              <i className="bi bi-calendar-event pe-2"></i>
              EXPOSICIONES
            </Nav.Link>
            <Nav.Link
              href="/dibujando-en-armonia"
              className={`${
                location.pathname === "/dibujando-en-armonia" ? "active" : ""
              }`}
            >
              <i className="bi bi-pencil-square pe-2"></i>
              DIBUJANDO EN ARMONÍA
            </Nav.Link>
            <Nav.Link
              href="/contacto"
              className={`${location.pathname === "/contacto" ? "active" : ""}`}
            >
              <i
                className="bi bi-phone-vibrate pe-2"
                style={{ fontSize: "20px" }}
              ></i>
              CONTACTO
            </Nav.Link>
            <Nav.Link
              href="/apoyanos"
              className={`${location.pathname === "/apoyanos" ? "active" : ""}`}
            >
              <i className="bi bi-person-arms-up"></i>
              APÓYANOS
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
