import {InputHTMLAttributes} from "react"

import styles from "./styles.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
}

export default function Input({label, name, ...rest}: InputProps ) {
    return (
        <div className={styles.inputBlock}>
            <label htmlFor={name}>{label}</label>
            <input id={name} {...rest}/>
        </div>
    );
}