import React from "react";
import { FadedTitle } from "../FadedTitle/FadedTitle";
import { Button } from "react-bootstrap";
import { TablaResultados } from "../resultados/TablaResultados";
import { useDispatch, useSelector } from "react-redux";
import { onOpenGanadoresForm } from "../../../store/concursos/concursoSlice";
import { GanadoresModal } from "../ganadoresModal/GanadoresModal";

export const ConcursoTematico = () => {
  const { resultados } = useSelector((state) => state.concurso);

  const handleOpen = () => {
    dispatch(onOpenGanadoresForm());
  };

  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-5">
        <FadedTitle title="Resultados" />
        <div className="d-flex justify-content-end">
          <Button onClick={handleOpen} className="mb-5">
            Añadir resultados
          </Button>
        </div>

        {resultados.map((resultado) => (
          <TablaResultados
            key={resultado.id}
            {...resultado}
            resultado={resultado}
          />
        ))}
      </div>
      <GanadoresModal />
    </>
  );
};
