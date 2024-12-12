import { FC } from "react";
import styles from "./Input.module.scss";
// import { ChangeEvent } from "react";


type InputProps = {
  // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChange?: () => void;
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
  value: string;
  type: string;
  placeholder: string;
};

const Input: FC<InputProps> = ({ value, type, placeholder, onChange}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
