import { collection, getDocs, query, where } from "firebase/firestore";
import { FormEvent, useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import db from "./common/firebase/api";
import formDataParser from "./common/utils/formDataParser";
import updateDB from "./common/utils/updateDB";
import Comments from "./components/Comments";
import Cords from "./components/Cords";
import Input from "./components/Input";
import Maps from "./components/Maps";
import "./styles.css";

function App() {
  const [cords, setCords] = useState("");
  const [params, setParams] = useState("");
  const [isCordsEntered, setIsCordsEntered] = useState(false);
  const [placeParams, setPlaceParams] = useState<string[]>([]);
  const isMax = placeParams.length < 9;

  const addParam = (event: FormEvent<HTMLFormElement>) => {
    const formData = formDataParser(event);
    updateDB(formData.params || "", cords);
    setPlaceParams((value) =>
      formData.params ? [...value, formData.params] : value
    );
    setParams("");
  };

  useEffect(() => {
    const paramsCol = query(
      collection(db, "params"),
      where("cords", "==", cords)
    );
    if (isCordsEntered)
      getDocs(paramsCol).then((res) => {
        setPlaceParams(res.docs.map((doc) => doc.data().value));
      });
  }, [isCordsEntered, cords]);

  return (
    <div className="container">
      <RemoveScroll>
        <Maps cords={cords} />
        {!isCordsEntered ? (
          <Cords setCords={setCords} setIsCordsEntered={setIsCordsEntered} />
        ) : (
          <div>
            <Comments
              author="Евгений Титовский"
              group="ЭП-262"
              placeParams={placeParams}
            />
            <form className="cords-form" onSubmit={addParam}>
              <Input
                placeholder="Введите параметры"
                name="params"
                text={params}
                onChangeHandler={setParams}
              />
              <button className="button" disabled={!isMax || params === ""}>
                {isMax ? "Добавить" : "Максимальное количество"}
              </button>
            </form>
          </div>
        )}
      </RemoveScroll>
    </div>
  );
}

export default App;
