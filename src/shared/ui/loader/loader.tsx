import styles from "./styles.module.css";
import React from "react";

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({className}) => {
    return (
        <img src={require('./spinner.gif')} className={`${styles.loader} ${className}`}  />
    )
}