import { collection, doc, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const loadResultados = async () => {
  const collectionRef = collection(FirebaseDB, "/concursos");
  console.log(collectionRef);
  const docs = await getDocs(collectionRef);

  console.log(docs);

  const resultados = [];

  docs.forEach((doc) => {
    resultados.push({ id: doc.id, ...doc.data() });
  });

  console.log(resultados);

  return resultados;
};
