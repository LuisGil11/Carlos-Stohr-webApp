import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { FadedTitle } from "../FadedTitle/FadedTitle";
import { useDispatch, useSelector } from "react-redux";
import { onOpenGanadoresForm } from "../../../store/concursos/concursoSlice";
import { GanadoresModal } from "../ganadoresModal/GanadoresModal";

export const ConcursoFundastohr = () => {
  const { concursos } = useSelector((state) => state.concurso);
  console.log(concursos);

  const dispatch = useDispatch();

  const handleOpen = () => {
    dispatch(onOpenGanadoresForm());
  };

  return (
    <Container className="mt-5">
      <FadedTitle title="Concurso Fundastohr" />
      <p
        style={{
          textIndent: "30px",
          lineHeight: "35px",
          fontFamily: '"Raleway", sans-serif',
        }}
      >
        Concurso de Dibujo In situ o al aire libre, forma parte de las
        actividades organizadas por la Fundación Carlos Stohr, siendo la más
        emblemática, debido a que a través de este concurso se realiza la
        búsqueda de nuevos cronistas gráficos que plasmen las vivencias,
        costumbres y folclore, en especial de la Isla de Margarita. Se plantea
        un concurso de Dibujo Urbano Urban Sketchers, donde el participante
        dibujará al momento. El artista dibuja el entorno en Valle del Espíritu
        Santo: su paisaje, gentilicio, edificaciones, vegetación, costumbres, lo
        que esté sucediendo en el momento. El dibujo no puede plasmar ningún
        contenido imaginativo. Se sugiere investigar previamente sobre el
        entorno, para preparar su idea de lo que desea plasmar.
      </p>
      <Row>
        <Col lg={6}>
          <h3 className="timeline-title">Temática y Materiales</h3>
          <div className="timeline-item">
            <h4>Temática</h4>
            <p
              style={{
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              Dibujo del entorno en este caso, en el{" "}
              <strong>Valle del Espíritu Santo, Isla de Margarita</strong>: su
              gentilicio, edificaciones, vegetación, entorno, costumbres, entre
              otros. El dibujo se realiza en el momento. Se sugiere revisar
              previamente las obras de Carlos Stohr, cómo plasmaba los usos,
              costumbres, paisajes y gentilicio. A su vez, visualizar los
              dibujos realizados por los artistas, que han participado en
              concursos anteriores de la Fundastohr, y las tendencias sobre el
              Urban Sketchers a nivel nacional e internacional. Se sugiere
              visitar los alrededores a la Basílica Nuestra Señora del Valle con
              anticipación, para familiarizarse con lo que va a dibujar.
            </p>
          </div>
          <div className="timeline-item pb-0">
            <h4>Materiales a utilizar</h4>
            <p
              style={{
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              Cada participante al momento de registrarse el día del concurso,
              recibirá una papel que es el que deberá utilizar para su
              participación en el concurso, el mismo lleva el sello de la
              Fundastohr. El participante escogerá entre papel para superficie
              mixta, 160 grs tamaño 22.9 x 30.5 cm o papel de superficie
              duradera para acuarela, marca Canson, 300 grs. tamaño 22.9 x 30.5
              cm El participante deberá llevar sus materiales de dibujo:
              grafito, creyones, tinta china, sanguina, acuarela, gouche,
              marcadores o carboncillo. Se entregará cartón duro para apoyarse;
              Sin embargo, cada participante podrá llevar lo que considere
              necesario para ejecutar su obra.
            </p>
          </div>
          <h3 className="timeline-title">Participación</h3>
          <div className="timeline-item">
            <h4>Participación</h4>
            <p
              style={{
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              Fue una actividad gratuita dirigida a niños, jóvenes y adultos,
              residenciados en el Estado Nueva Esparta, quienes tienen
              conocimientos de la técnica del dibujo urbano. Participaron 45
              artistas dividido en tres categorías:
            </p>
            <ul
              style={{
                marginBottom: "1rem",
                marginTop: "10px",
                fontFamily: "sans-serif",
              }}
            >
              <li>Infantil (8 a 13 años) - 12 participantes</li>
              <li>Juvenil (14 a 20 años) - 19 participantes</li>
              <li>Adulto (21 años en adelante) - 14 participantes</li>
            </ul>
          </div>
        </Col>
        <Col lg={6}>
          <h3 className="timeline-title">Jueces, Premiación y exposición</h3>
          <div className="timeline-item">
            <h4>Jueces</h4>
            <p
              style={{
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              Los Artistas Plásticos Margariteños: Adolfo Golindano, Antonella
              Sigillo, Vilma Rojas, Wilman Guerra y Yurenny Oliveros, realizarán
              la selección de las obras más destacadas en el arte del dibujo
              urbano. Modalidad de selección de ganador: cada jurado de manera
              individual dará puntaje a las 5 mejores obras de cada categoría.
              Siendo el puntaje máximo 5 y mínimo 1. Se hace la sumatoria de lo
              que cada jurado otorgó y el mismo dará el veredicto final.
              Menciones Especiales: La Directiva y el jurado podrán otorgar
              menciones especiales que reflejen gran contenido cultural y
              costumbrista.
            </p>
          </div>
          <div className="timeline-item">
            <h4>Premiación</h4>
            <p
              style={{
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              Se entregó a todos los concursantes el diploma de participación.
              Los artistas que obtuvieron los tres mayores puntajes de cada
              categoría, se le entregó materiales profesionales de dibujo.
              Adicionalmente, se entregó reconocimiento a las menciones
              especiales por costumbrismo o técnica de dibujo.
            </p>
          </div>
          <h3 className="timeline-title">Exposición</h3>
          <div className="timeline-item">
            <h4>Exposición</h4>
            <p
              style={{
                marginBottom: "1rem",
                marginTop: 0,
                fontFamily: "sans-serif",
              }}
            >
              Se realizó una exhibición temporal, con todas las obras que
              participan en el concurso, para la visualización y selección, por
              parte del jurado el día del Concurso. Las obras que obtuvieron
              puntaje por parte del jurado, se seleccionarán para ser expuestas
              en la Sala Carlos Stohr, del Museo Nueva Cádiz en la Asunción de
              la Isla de Margarita, el 2 de marzo del 2024. Las obras ganadoras
              son propiedad de la Fundación Carlos Stohr para promoción de las
              actividades y de los artistas. Las mismas serán retornadas al
              artista según consideración de la Fundastohr.
            </p>
          </div>
          <div className="timeline-item pb-0">
            <div className="d-flex justify-content-center align-items-center">
              <img src="https://firebasestorage.googleapis.com/v0/b/fundastohr-image-gallery.appspot.com/o/flyers%2Fflyer-fundastohr-2022.webp?alt=media&token=b03bcdb9-fbcb-4d9d-91b3-9528021479f4" />
            </div>
          </div>
        </Col>
      </Row>
      <div className="mt-5">
        <FadedTitle title="Resultados" />
        <div className="d-flex justify-content-end">
          <Button onClick={handleOpen} className="mb-5">
            Añadir resultados
          </Button>
        </div>
        <h3
          className="subtitleLeft"
          style={{ fontFamily: '"Oswald", sans-serif', color: "#002b5e" }}
        >
          2022
        </h3>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Posición</th>
              <th>Infantil</th>
              <th>Juvenil</th>
              <th>Adulto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Sandra Jiménez -13 años</td>
              <td>Yulianngy Rodríguez -19 años</td>
              <td>Daniela Millán </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Zoe Miranda - 11 años</td>
              <td>Nicole Labrador - 18 años</td>
              <td>Darlenys Castillo</td>
            </tr>
            <tr>
              <td>3</td>
              <td>José Gregorio Muñoz - 13 años</td>
              <td>Alejandra Franco - 15 años</td>
              <td>Franco Emilio Valdivieso</td>
            </tr>
            <tr>
              <td>Mención Costumbrista</td>
              <td>Valentina Chaparro - 11 años</td>
              <td>Fabiola Figueroa - 18 años</td>
              <td>Fátima Natera</td>
            </tr>
            <tr>
              <td>Mención Especial</td>
              <td></td>
              <td>Susana González - 18 años</td>
              <td>Eloísa Figueroa</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <GanadoresModal />
    </Container>
  );
};
