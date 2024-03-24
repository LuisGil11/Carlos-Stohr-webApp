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
    let collectionToSave = null;

    if (nuevosResultados.subCategoria.trim().length > 0) {
      collectionToSave = collection(
        FirebaseDB,
        `concursos/${tipoDeConcurso}/${nuevosResultados.subCategoria}`
      );
    } else {
      collectionToSave = collection(
        FirebaseDB,
        `concursos/${tipoDeConcurso}/${tipoDeConcurso}`
      );
    }
    const newDoc = doc(collectionToSave, nuevosResultados.edicion.toString());
    await setDoc(newDoc, nuevosResultados);

    dispatch(
      addNuevosResultados({ ...nuevosResultados, id: nuevosResultados.edicion })
    );
  };
};
