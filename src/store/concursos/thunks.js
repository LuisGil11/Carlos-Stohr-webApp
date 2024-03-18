import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { setSaving, resultadosUpdated } from "./concursoSlice";
import { FirebaseDB } from "../../firebase/config";

export const startSavingResult = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { nuevosResultados, tipoDeConcurso } = getState().concurso;
    const { edicion } = nuevosResultados;

    const newDoc = doc(
      collection(FirebaseDB, `concursos/${tipoDeConcurso}/${edicion}`)
    );

    await setDoc(newDoc, nuevosResultados, { merge: true });

    dispatch(resultadosUpdated());
  };
};
