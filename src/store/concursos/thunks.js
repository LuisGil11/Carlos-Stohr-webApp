import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import {
  setSaving,
  resultadosUpdated,
  setResultados,
  addNuevosResultados,
  resultadoDeleted,
  onCloseGanadoresForm,
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
    const { subCategoria } = nuevosResultados;
    const { id, ...resultadosToFirebase } = nuevosResultados;
    let path = "";
    let newDoc = null;

    if (nuevosResultados.subCategoria.trim().length > 0) {
      path = `concursos/${tipoDeConcurso}/${subCategoria}`;
    } else {
      path = `concursos/${tipoDeConcurso}/${tipoDeConcurso}`;
    }
    const collectionToSave = collection(FirebaseDB, path);
    //Actualizar
    if (id) {
      newDoc = doc(collectionToSave, nuevosResultados.id.toString());
      await setDoc(newDoc, resultadosToFirebase);
      dispatch(resultadosUpdated(nuevosResultados));
      return;
    }
    //Crear
    newDoc = doc(collectionToSave, nuevosResultados.edicion.toString());
    await setDoc(newDoc, resultadosToFirebase);
    dispatch(
      addNuevosResultados({ ...nuevosResultados, id: nuevosResultados.edicion })
    );
  };
};
export const startDeletingResult = () => {
  return async (dispatch, getState) => {
    const { nuevosResultados, tipoDeConcurso } = getState().concurso;
    const { id, subCategoria } = nuevosResultados;
    let path = "";

    if (nuevosResultados.subCategoria.trim().length > 0) {
      path = `concursos/${tipoDeConcurso}/${subCategoria}`;
    } else {
      path = `concursos/${tipoDeConcurso}/${tipoDeConcurso}`;
    }

    const coleccion = collection(FirebaseDB, path);

    const resp = await deleteDoc(doc(coleccion, id));
    console.log(resp);
    dispatch(resultadoDeleted());
    dispatch(onCloseGanadoresForm());
  };
};
