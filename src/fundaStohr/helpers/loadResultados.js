import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const loadResultados = async ({ tipoDeConcurso, subCategoria }) => {
  try {
    const collectionRef = collection(
      FirebaseDB,
      `concursos/${tipoDeConcurso}/${
        subCategoria.trim().length > 0 ? subCategoria : tipoDeConcurso
      }`
    );

    console.log(
      `concursos/${tipoDeConcurso}/${
        subCategoria.trim().length > 0 ? subCategoria : tipoDeConcurso
      }`
    );

    const docs = await getDocs(collectionRef);

    const resultados = [];

    docs.forEach((doc) => {
      resultados.push({ id: doc.id, ...doc.data() });
    });

    return resultados;
  } catch (error) {
    console.log(error);
  }
};
