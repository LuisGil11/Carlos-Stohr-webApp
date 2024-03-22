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
    const { edicion } = nuevosResultados;

    console.log(nuevosResultados);

    if (nuevosResultados.subCategoria.trim().length == 0)
      delete nuevosResultados.subCategoria;

    const resultadosAFirebase = { ...nuevosResultados };

    const newDoc = doc(FirebaseDB, `concursos/${tipoDeConcurso}`);

    await setDoc(newDoc, resultadosAFirebase, { merge: true });

    dispatch(resultadosUpdated());
  };
};
