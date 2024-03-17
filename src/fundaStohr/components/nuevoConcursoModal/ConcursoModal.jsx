import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { onCloseModal } from "../../../store/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";

const initialForm = {
  categoria: "",
  subcategoria: "",
  nombre: "",
  fecha: "",
  horaInicio: "",
  horaFin: "",
  jurado: [],
  ganadores: [],
  infoAdicional: "",
};

export const ConcursoModal = () => {
  const {
    categoria,
    subcategoria,
    nombre,
    fecha,
    horaInicio,
    horaFin,
    jurado,
    ganadores,
    infoAdicional,
    formState,
    onInputChange,
    onResetForm,
  } = useForm(initialForm);

  const { isModalOpen } = useSelector((state) => state.ui);
  const dispatch = useDispatch();

  const onHandleClose = () => {
    dispatch(onCloseModal());
    onResetForm();
  };

  return (
    <Modal
      show={isModalOpen}
      onHide={() => dispatch(onCloseModal())}
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Nuevo concurso</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              onChange={onInputChange}
              value={categoria}
              name="categoria"
            >
              <option disabled value="">
                {" "}
                -- selecciona una opción --{" "}
              </option>
              <option value="fundastohr">
                Concurso Fundastohr "Al aire libre"
              </option>
              <option value="tematico">Temático</option>
              <option value="en-linea">En línea</option>
            </Form.Select>
            {categoria === "en-linea" && (
              <>
                <br />
                <Form.Label>Sub - Categoría</Form.Label>
                <Form.Select
                  placeholder="introduzca la categoría del concurso"
                  autoFocus
                  onChange={onInputChange}
                  value={subcategoria}
                  name="subcategoria"
                >
                  <option disabled value="">
                    {" "}
                    -- selecciona una opción --{" "}
                  </option>
                  <option value="dibujo-urbano">Dibujo Urbano Venezuela</option>
                  <option value="acnur">ACNUR</option>
                  <option value="proteccion-y-devocion">
                    Protección y Devoción
                  </option>
                </Form.Select>
              </>
            )}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={onHandleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={onHandleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
