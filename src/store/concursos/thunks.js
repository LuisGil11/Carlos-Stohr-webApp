import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  setSaving,
  resultadosUpdated,
  setResultados,
  addNuevosResultados,
} from "./concursoSlice";
import { FirebaseDB } from "../../firebase/config";
import { loadResultados } from "../../fundaStohr/helpers/loadResultados";

export const startLoadingResultados = () => {
  return async (dispatch) => {
    const resultados = await loadResultados();
    console.log(resultados);
    dispatch(setResultados(resultados));
  };
};

export const startSavingResult = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());
    const { nuevosResultados, tipoDeConcurso } = getState().concurso;
    const { id, subCategoria } = nuevosResultados;
    let path = "";
    let newDoc = null;

    if (nuevosResultados.subCategoria.trim().length > 0) {
      path = `concursos/${tipoDeConcurso}/${subCategoria}`;
    } else {
      path = `concursos/${tipoDeConcurso}/${tipoDeConcurso}`;
    }
    const collectionToSave = collection(FirebaseDB, path);
    if (id) {
      newDoc = doc(collectionToSave, nuevosResultados.id.toString());
      await setDoc(newDoc, nuevosResultados);
      dispatch(resultadosUpdated(nuevosResultados));
      return;
    }
    newDoc = doc(collectionToSave, nuevosResultados.edicion.toString());
    await setDoc(newDoc, nuevosResultados);
    dispatch(
      addNuevosResultados({ ...nuevosResultados, id: nuevosResultados.edicion })
    );
  };
};
