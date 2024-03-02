import React from "react";
import "../../index.css";

export const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div className=" col-md-5 col-lg-4 col-12 ft-1">
              <h4> Fundación Carlos Sthor</h4>
              <p>
                Una Fundación para preservar el legado cultural del que fue
                Cronista Gráfico de la Isla de Margarita, Venezuela.
              </p>
              <div className="footer-icons">
                <i className="bi bi-facebook "></i>
                <i className="bi bi-twitter-x"></i>
                <i className="bi bi-instagram"></i>
              </div>
            </div>
            <div className=" col-md-5 col-lg-4 col-12  ft-2 " >
              <h4> Enlaces Rápidos </h4>
              <ul>
              <li className="nav-items">
                <i className="bi bi-chevron-right  footer-icon-style"></i>
                  <a className="" href="/">
                    La Fundación
                  </a>
                </li>
                <li className="nav-items">
                <i className="bi bi-chevron-right  footer-icon-style"></i>
                  <a className="" href="/">
                    Concursos
                  </a>
                </li>
                <li className="nav-items">
                <i className="bi bi-chevron-right  footer-icon-style"></i>
                  <a className="" href="/">
                    Exposiciones
                  </a>
                </li>
                <li className="nav-items">
                  <i className="bi bi-chevron-right footer-icon-style"></i>
                  <a className="" href="/">
                    Dibujando en Armonía
                  </a>
                </li>
                <li className="nav-items">
                  <i className="bi bi-chevron-right footer-icon-style"></i>
                  <a className="" href="/">
                    Contacto
                  </a>
                </li>
                <li className="nav-items">
                  <i className="bi bi-chevron-right footer-icon-style"></i>
                  <a className="" href="/">
                    Apóyanos 
                  </a>
                </li>
              </ul>
            </div>
            <div className=" col-md-6 col-lg-4 col-12 ft-3">
              <h4> Información de Conctato </h4>
              <p>
                <i className="bi bi-telephone-inbound-fill"></i> +58 4141203262
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i>{" "}
                fundacion.carlos.sthor@gmail.com
              </p>
              <p>
                <i className="bi bi-building"></i> Caracas, Venezuela.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
