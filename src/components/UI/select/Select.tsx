import styles from "./Select.module.scss";
import { FC } from "react";
import {IOption} from "../../../types/types"

type SelectProps = {
    value: string;
    options: IOption[];
    defaultValue: string;
    onChange: (event: string) => void;
}

const Select: FC<SelectProps> = ({options, defaultValue, value, onChange}) => {
  return (
        <select className={styles.select}
            value={value}
            onChange={event => onChange(event.target.value)}
            >
            <option disabled value="">{defaultValue}</option>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
  )
}

export default Select;