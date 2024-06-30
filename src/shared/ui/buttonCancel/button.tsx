
import React from 'react';
import styles from "./styles.module.css";

interface ButtonCancelProps {
    className?: string;
    onClick?: () => void
}

export const ButtonCancel: React.FC<ButtonCancelProps> = ({ className, onClick }) => {
    return (
        <button className={`${styles.button} ${className}`} onClick={onClick}>Отменить</button>
    );
}