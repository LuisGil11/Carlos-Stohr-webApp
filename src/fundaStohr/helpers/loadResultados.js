import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const loadResultados = async () => {
  const collectionRef = collection(
    FirebaseDB,
    "concursos/fundastohr/fundastohr"
  );
  const docs = await getDocs(collectionRef);

  const resultados = [];

  docs.forEach((doc) => {
    resultados.push({ id: doc.id, ...doc.data() });
  });

  return resultados;
};
