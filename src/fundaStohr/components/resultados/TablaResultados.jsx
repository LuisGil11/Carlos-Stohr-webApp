import React from "react";
import { Table } from "react-bootstrap";

export const TablaResultados = ({ edicion, adulto, infantil, juvenil, id }) => {
  return (
    <>
      <h3
        className="subtitleLeft"
        style={{ fontFamily: '"Oswald", sans-serif', color: "#002b5e" }}
      >
        {edicion}
      </h3>
      <Table striped bordered hover key={id}>
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
            <td>{infantil.primero}</td>
            <td>{juvenil.primero}</td>
            <td>{adulto.primero}</td>
          </tr>
          <tr>
            <td>2</td>
            <td>{infantil.segundo}</td>
            <td>{juvenil.segundo}</td>
            <td>{adulto.segundo}</td>
          </tr>
          <tr>
            <td>3</td>
            <td>{infantil.tercero}</td>
            <td>{juvenil.tercero}</td>
            <td>{adulto.tercero}</td>
          </tr>
          <tr>
            <td>Mención Costumbrista</td>
            <td>{infantil.costumbrista}</td>
            <td>{juvenil.costumbrista}</td>
            <td>{adulto.costumbrista}</td>
          </tr>
          <tr>
            <td>Mención Especial</td>
            <td>{infantil.especial}</td>
            <td>{juvenil.especial}</td>
            <td>{adulto.especial}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};
