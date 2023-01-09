import { addDoc, collection } from "firebase/firestore";
import db from "../firebase/api";

const updateDB = async (value: string, cords: string) => {
  const paramsCol = collection(db, "params");

  await addDoc(paramsCol, {
    value,
    cords,
  })
};

export default updateDB;
