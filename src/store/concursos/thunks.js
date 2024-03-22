import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { setSaving, resultadosUpdated, setResultados } from "./concursoSlice";
import { FirebaseDB } from "../../firebase/config";
import { loadResultados } from "../../fundaStohr/helpers/loadResultados";

export const startLoadingResultados = () => {
  return async (dispatch) => {
    const resultados = await loadResultados();

    dispatch(setResultados(resultados));
  };
};

export const startSavingResult = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { nuevosResultados, tipoDeConcurso } = getState().concurso;

    console.log(nuevosResultados);

    if (nuevosResultados.subCategoria.trim().length > 0) {
      const newCollection = collection(
        FirebaseDB,
        `concursos/${tipoDeConcurso}/${nuevosResultados.subCategoria}`
      );
      const newDoc = doc(newCollection);

      await setDoc(newDoc, nuevosResultados);

      dispatch(resultadosUpdated());
    } else {
      const newCollection = collection(
        FirebaseDB,
        `concursos/${tipoDeConcurso}/${tipoDeConcurso}`
      );
      const newDoc = doc(newCollection);

      await setDoc(newDoc, nuevosResultados);
      dispatch(resultadosUpdated());
    }
  };
};
