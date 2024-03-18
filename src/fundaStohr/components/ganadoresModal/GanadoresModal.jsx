import React, { useEffect } from "react";
import { Button, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  onCloseGanadoresForm,
  setNuevosResultados,
} from "../../../store/concursos/concursoSlice";
import { useForm } from "../../../hooks/useForm";
import { startSavingResult } from "../../../store/concursos/thunks";

const initialForm = {
  edicion: new Date().getFullYear(),
  infantil: {
    primero: "",
    segundo: "",
    tercero: "",
    costumbrista: "",
    especial: "",
  },
  juvenil: {
    primero: "",
    segundo: "",
    tercero: "",
    costumbrista: "",
    especial: "",
  },
  adulto: {
    primero: "",
    segundo: "",
    tercero: "",
    costumbrista: "",
    especial: "",
  },
};
export const GanadoresModal = () => {
  const { isGanadoresFormOpen, isSaving } = useSelector(
    (state) => state.concurso
  );

  const dispatch = useDispatch();
  const {
    edicion,
    infantil,
    juvenil,
    adulto,
    formState,
    onInputChange,
    onResetForm,
  } = useForm(initialForm);

  console.log(formState);

  const handleClose = () => {
    dispatch(onCloseGanadoresForm());
  };

  const onSaveResult = () => {
    dispatch(startSavingResult());
  };

  useEffect(() => {
    dispatch(setNuevosResultados(formState));
  }, [formState]);

  return (
    <Modal
      show={isGanadoresFormOpen}
      onHide={handleClose}
      centered
      backdrop="static"
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>Nuevo resultado</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <Form.Label>Edición</Form.Label>
            <Form.Control
              className="mb-3"
              type="number"
              placeholder="año"
              onChange={onInputChange}
              value={edicion}
              name="edicion"
            />
            {/* <Form.Select
              className="mb-3"
              onChange={onInputChange}
              value={categoria}
              name="categoria"
            >
              <option disabled value="">
                {" "}
                -- selecciona una opción --{" "}
              </option>
              <option value="infantil">Infantil</option>
              <option value="juvenil">Juvenil</option>
              <option value="adulto">Adulto</option>
            </Form.Select> */}
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
                    Mención Costumbrista
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="infantil.costumbrista"
                    value={infantil.costumbrista}
                    onChange={onInputChange}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Mención Especial
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="infantil.especial"
                    value={infantil.especial}
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
                    Mención Costumbrista
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="juvenil.costumbrista"
                    value={juvenil.costumbrista}
                    onChange={onInputChange}
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    Mención Especial
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="juvenil.especial"
                    value={juvenil.especial}
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
                    Mención Especial
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="nombre"
                    aria-label="nombre"
                    aria-describedby="basic-addon1"
                    name="adulto.especial"
                    value={adulto.especial}
                    onChange={onInputChange}
                  />
                </InputGroup>
              </div>
            </Row>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" disabled={isSaving} onClick={onSaveResult}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
