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
                        <p>Una Fundación para preservar el legado cultural del que fue Cronista Gráfico de la Isla de Margarita, Venezuela.</p>
                        <div className="footer-icons">
                            <i class="bi bi-facebook icon"></i>
                            <i class="bi bi-twitter-x"></i>
                            <i class="bi bi-instagram"></i>
                        </div>
                    </div>
                    <div className=" col-md-5 col-lg-4 col-12  ft-2 " >
                    <h4> Enlaces Rápidos </h4>
                        <ul>
                            <il className= "nav-items">
                                <a className="nav-link" href="/">La Fundación</a>
                            </il>
                            <il className= "nav-items">
                                <a className="nav-link" href="/">Concursos</a>
                            </il>
                            <il className= "nav-items">
                                <a className="nav-link" href="/">Exposiciones</a>
                            </il>
                            <il className= "nav-items">
                                <a className="nav-link" href="/">Dibujando en Armonía</a>
                            </il>
                            <il className= "nav-items">
                                <a className="nav-link" href="/">Contacto</a>
                            </il>
                            <il className= "nav-items">
                                <a className="nav-link" href="/">Apóyanos</a>
                            </il>
                        </ul>
                    </div>
                    <div className=" col-md-6 col-lg-4 col-12 ft-3" >
                        <h4> Información de Conctato </h4>
                            <p><i class="bi bi-telephone-inbound-fill"></i> +58 4141203262</p>
                            <p><i class="bi bi-envelope-fill"></i> fundacion.carlos.sthor@gmail.com</p>
                            <p><i class="bi bi-building"></i> Caracas, Venezuela.</p>
                        </div>
                </div>
            </div>
        </div>
        </>
     );
};

export default Footer; 