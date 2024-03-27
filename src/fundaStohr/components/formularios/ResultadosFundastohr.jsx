import React from "react";
import { Form, InputGroup, Row } from "react-bootstrap";

export const ResultadosFundastohr = ({
  infantil,
  juvenil,
  adulto,
  onInputChange = { onInputChange },
}) => {
  return (
    <Row>
      <div className="col-4">
        <h3 className="d-flex justify-content-center">Infantil</h3>
        <hr />
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">1ro</InputGroup.Text>
          <Form.Control
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon1"
            name="infantil.primero"
            value={infantil.primero}
            onChange={onInputChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">2do</InputGroup.Text>
          <Form.Control
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon1"
            name="infantil.segundo"
            value={infantil.segundo}
            onChange={onInputChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">3ro</InputGroup.Text>
          <Form.Control
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon1"
            name="infantil.tercero"
            value={infantil.tercero}
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
            name="infantil.menciones"
            value={infantil.menciones}
            onChange={onInputChange}
          />
        </InputGroup>
      </div>
      <div className="col-4">
        <h3 className="d-flex justify-content-center">Juvenil</h3>
        <hr />
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">1ro</InputGroup.Text>
          <Form.Control
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon1"
            name="juvenil.primero"
            value={juvenil.primero}
            onChange={onInputChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">2do</InputGroup.Text>
          <Form.Control
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon1"
            name="juvenil.segundo"
            value={juvenil.segundo}
            onChange={onInputChange}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon1">3ro</InputGroup.Text>
          <Form.Control
            placeholder="nombre"
            aria-label="nombre"
            aria-describedby="basic-addon1"
            name="juvenil.tercero"
            value={juvenil.tercero}
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
            name="juvenil.menciones"
            value={juvenil.menciones}
            onChange={onInputChange}
          />
        </InputGroup>
      </div>
      <div className="col-4">
        <h3 className="d-flex justify-content-center">Adulto</h3>
        <hr />
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
      </div>
    </Row>
  );
};
