import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  onOpenGanadoresForm,
  onSetFormState,
} from "../../../store/concursos/concursoSlice";

export const TablaResultados = ({
  resultado,
  tipoDeConcurso,
  edicion,
  adulto,
  infantil,
  juvenil,
  id,
}) => {
  const parseDescription = (description) => {
    if (!description) return null;
    const parts = description.split("*");
    return parts.map((part, index) => {
      if (index % 2 === 0) {
        // Si es un elemento de texto normal, reemplaza los saltos de línea con <br>
        return (
          <span key={index}>
            {part.split("\n").map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i !== 0 && <br />}
              </React.Fragment>
            ))}
          </span>
        );
      } else {
        // Si es un elemento en negrita, devuélvelo tal cual
        return <strong key={index}>{part}</strong>;
      }
    });
  };

  const dispatch = useDispatch();

  const onUpdateResultado = () => {
    dispatch(onSetFormState(resultado));
    dispatch(onOpenGanadoresForm());
  };

  console.log(tipoDeConcurso);

  return (
    <>
      <h3
        className="subtitleLeft"
        style={{ fontFamily: '"Oswald", sans-serif', color: "#002b5e" }}
      >
        {edicion}
      </h3>
      <Table striped bordered hover key={id} onDoubleClick={onUpdateResultado}>
        <thead>
          <tr>
            <th>Posición</th>
            {tipoDeConcurso !== "tematico" && (
              <>
                <th>Infantil</th>
                <th>Juvenil</th>
              </>
            )}
            <th>Adulto</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1er Lugar</td>
            {tipoDeConcurso !== "tematico" && (
              <>
                <td>{infantil.primero}</td>
                <td>{juvenil.primero}</td>
              </>
            )}
            <td>{adulto.primero}</td>
          </tr>
          <tr>
            <td>2do Lugar</td>
            {tipoDeConcurso !== "tematico" && (
              <>
                <td>{infantil.segundo}</td>
                <td>{juvenil.segundo}</td>
              </>
            )}
            <td>{adulto.segundo}</td>
          </tr>
          <tr>
            <td>3er Lugar</td>
            {tipoDeConcurso !== "tematico" && (
              <>
                <td>{infantil.tercero}</td>
                <td>{juvenil.tercero}</td>
              </>
            )}
            <td>{adulto.tercero}</td>
          </tr>
          <tr>
            <td>Menciones Especiales</td>
            {tipoDeConcurso !== "tematico" && (
              <>
                <td>{parseDescription(infantil.menciones)}</td>
                <td>{parseDescription(juvenil.menciones)}</td>
              </>
            )}
            <td>{parseDescription(adulto.menciones)}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
