import { FormEvent, useState } from "react";
import formDataParser from "../../common/utils/formDataParser";
import Input from "../Input";
import styles from "./style.module.css";

type Props = {
  setCords: (value: string) => void;
  setIsCordsEntered: (value: boolean) => void;
};

const Cords = ({ setCords, setIsCordsEntered }: Props) => {
  const [lat, setLat] = useState("");
  const [lan, setLan] = useState("");
  const isDisabled = lat !== '' && lan !== '';
  const parseFormData = (event: FormEvent<HTMLFormElement>) => {
    const formData = formDataParser(event);
    if (formData.lan !== "" && formData.lat !== "")
      setCords(`${formData.lat}, ${formData.lan}`);
    setIsCordsEntered(true);
  };

  const removeComma = (value: string) => {
    return value.replace(",", ".");
  };

  return (
    <form onSubmit={parseFormData} className="cords-form">
      <div className={styles.cords}>
        <Input
          placeholder="Широтa"
          name="lat"
          validator={removeComma}
          text={lat}
          onChangeHandler={setLat}
        />
        <Input
          placeholder="Долготa"
          name="lan"
          validator={removeComma}
          text={lan}
          onChangeHandler={setLan}
        />
      </div>
      <button className="button" disabled={!isDisabled}>Отправить</button>
    </form>
  );
};

export default Cords;
