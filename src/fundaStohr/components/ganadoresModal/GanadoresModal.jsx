import React, { useEffect } from "react";
import { Button, Form, InputGroup, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  onCloseGanadoresForm,
  onSetTipoDeConcurso,
  setNuevosResultados,
} from "../../../store/concursos/concursoSlice";
import { useForm } from "../../../hooks/useForm";
import {
  startDeletingResult,
  startSavingResult,
} from "../../../store/concursos/thunks";
import { ResultadosFundastohr } from "../formularios/ResultadosFundastohr";
import { ResultadosTematicos } from "../formularios/ResultadosTematico";

export const GanadoresModal = () => {
  const {
    formState: GanadoresFormState,
    isGanadoresFormOpen,
    isSaving,
  } = useSelector((state) => state.concurso);

  const dispatch = useDispatch();
  const {
    edicion,
    id,
    tipoDeConcurso,
    subCategoria,
    infantil,
    juvenil,
    adulto,
    formState,
    onInputChange,
    onResetInput,
    onResetForm,
  } = useForm(GanadoresFormState);

  const handleClose = () => {
    dispatch(onCloseGanadoresForm());
  };

  const onSaveResult = () => {
    dispatch(startSavingResult());
    onResetForm();
    dispatch(onCloseGanadoresForm());
  };

  const onChangeConcurso = (event) => {
    onInputChange(event);
    onResetInput("subCategoria");
    dispatch(onSetTipoDeConcurso(event.target.value));
  };

  const onDeleteResult = () => {
    dispatch(startDeletingResult());
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
            <Form.Label className="mt-2">Categoría</Form.Label>
            <Form.Select
              onChange={onChangeConcurso}
              value={tipoDeConcurso}
              name="tipoDeConcurso"
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
            {tipoDeConcurso === "en-linea" && (
              <>
                <br />
                <Form.Label>Sub - Categoría</Form.Label>
                <Form.Select
                  placeholder="introduzca la categoría del concurso"
                  autoFocus
                  onChange={onInputChange}
                  value={subCategoria}
                  name="subCategoria"
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
            <Form.Label>Edición</Form.Label>
            <Form.Control
              className="mb-3"
              type="number"
              placeholder="año"
              onChange={onInputChange}
              value={edicion}
              name="edicion"
            />
            {tipoDeConcurso === "tematico" ? (
              <ResultadosTematicos
                infantil={infantil}
                juvenil={juvenil}
                adulto={adulto}
                onInputChange={onInputChange}
              />
            ) : (
              <ResultadosFundastohr
                infantil={infantil}
                juvenil={juvenil}
                adulto={adulto}
                onInputChange={onInputChange}
              />
            )}
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        {id && (
          <Button variant="danger" onClick={onDeleteResult}>
            Eliminar Resultado
          </Button>
        )}
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
