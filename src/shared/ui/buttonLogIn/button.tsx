
import React from 'react';
import styles from "./styles.module.css";
interface ButtonLogInProps {
    className?: string;
    username : string;
    password : string;
    onClick: () => void
}

export const ButtonLogIn: React.FC<ButtonLogInProps> = ({ className, username, password, onClick}) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick} > Войти </button>
    );
}