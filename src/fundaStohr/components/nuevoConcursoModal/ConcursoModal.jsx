import React, { useState } from "react";
import {
  Button,
  Form,
  FormControl,
  FormLabel,
  FormText,
  Modal,
} from "react-bootstrap";
import { useForm } from "../../../hooks/useForm";
import { onCloseModal } from "../../../store/ui/uiSlice";
import { useDispatch, useSelector } from "react-redux";
import DatePicker, { registerLocale } from "react-datepicker";
import { es } from "date-fns/locale/es";
import { addHours } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

registerLocale("es", es);

const initialForm = {
  categoria: "",
  subcategoria: "",
  nombre: "",
  fechaInicio: new Date(),
  fechaFin: addHours(new Date(), 1),
  direccion: "",
  jurado: [],
  ganadores: [],
  infoAdicional: "",
};

export const ConcursoModal = () => {
  const {
    categoria,
    subcategoria,
    nombre,
    fechaInicio,
    fechaFin,
    direccion,
    edicion,
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
            <Form.Label>Nombre (opcional)</Form.Label>
            <Form.Control
              type="text"
              placeholder="nombre del concurso"
              onChange={onInputChange}
              value={nombre}
              name="nombre"
            />
            <Form.Label className="mt-2">Edición</Form.Label>
            <Form.Control
              type="number"
              placeholder="año"
              onChange={onInputChange}
              value={edicion}
              name="edicion"
            />
            <Form.Label className="mt-2">Categoría</Form.Label>
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
            <div className="form-group mb-2 mt-2">
              <FormLabel className="col-6">Fecha y hora inicio</FormLabel>
              <DatePicker
                selected={fechaInicio}
                onChange={(event) => onDateChange(event, "fechaInicio")}
                className="form-control col-6"
                dateFormat="Pp"
                showTimeSelect
                locale="es"
                timeCaption="Hora"
              />
            </div>

            <div className="form-group mb-2">
              <FormLabel className="col-6">Fecha y hora fin</FormLabel>
              <DatePicker
                selected={fechaFin}
                onChange={(event) => onDateChange(event, "fechaFin")}
                className="form-control col-6"
                dateFormat="Pp"
                showTimeSelect
                locale="es"
                timeCaption="Hora"
              />
            </div>

            <div className="form-group mb-2">
              <FormLabel className="col-6">Ubicación</FormLabel>
              <br />
              <Form.Control
                type="text"
                placeholder="Dirección del evento"
                name="direccion"
                value={direccion}
                onChange={onInputChange}
              />
            </div>
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
