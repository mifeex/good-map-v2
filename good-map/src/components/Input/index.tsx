import { useState, ChangeEvent, useEffect } from "react";
import styles from "./style.module.css";

type Props = {
  placeholder: string;
  name: string;
  text?: string;
  onChangeHandler?: (value: string) => void;
  validator?: (value: string) => string;
};

const Input = ({ placeholder, name, text, onChangeHandler, validator }: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if(text === '') setValue('');
  }, [text]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(validator ? validator(e.target.value) : e.target.value);
    if (onChangeHandler) onChangeHandler(validator ? validator(e.target.value) : e.target.value);
  };

  return (
    <div className={styles["input-container"]}>
      <input
        name={name}
        className={styles["input"]}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
