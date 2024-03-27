import React from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

export const ResultadosTematicos = ({
  infantil,
  juvenil,
  adulto,
  onInputChange = { onInputChange },
}) => {
  return (
    <Row>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">1ro</InputGroup.Text>
        <Form.Control
          placeholder="nombre"
          aria-label="nombre"
          aria-describedby="basic-addon1"
          name="adulto.primero"
          value={adulto.primero}
          onChange={onInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">2do</InputGroup.Text>
        <Form.Control
          placeholder="nombre"
          aria-label="nombre"
          aria-describedby="basic-addon1"
          name="adulto.segundo"
          value={adulto.segundo}
          onChange={onInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">3ro</InputGroup.Text>
        <Form.Control
          placeholder="nombre"
          aria-label="nombre"
          aria-describedby="basic-addon1"
          name="adulto.tercero"
          value={adulto.tercero}
          onChange={onInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          Mención Costumbrista
        </InputGroup.Text>
        <Form.Control
          placeholder="nombre"
          aria-label="nombre"
          aria-describedby="basic-addon1"
          name="adulto.costumbrista"
          value={adulto.costumbrista}
          onChange={onInputChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">
          Menciones especiales
        </InputGroup.Text>
        <Form.Control
          as="textarea"
          placeholder="texto"
          aria-label="texto"
          aria-describedby="basic-addon1"
          name="adulto.menciones"
          value={adulto.menciones}
          onChange={onInputChange}
        />
      </InputGroup>
    </Row>
  );
};
