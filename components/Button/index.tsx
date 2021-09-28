import { ButtonHTMLAttributes } from "react";

import styles from "./styles.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    isOutlined?: boolean
}

export default function Button({isOutlined = false, ...props}: ButtonProps) {
    return (
        <button className={`${styles.button} ${isOutlined ? styles.outlined: ''}`} {...props} />
    );
}