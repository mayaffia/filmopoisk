

import React from 'react';
import styles from "./styles.module.css";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../app/store/store";
import {setIsLogged} from "../../../app/store/isLogged";

interface ButtonLogOutProps {
    className?: string;
}



export const ButtonLogOut: React.FC<ButtonLogOutProps> = ({ className}) => {

    const dispatch = useDispatch<AppDispatch>();

    const handleLogOut = () => {
        dispatch(setIsLogged(false));
        localStorage.removeItem('authToken');
    }

    return (
        <button className={`${styles.button} ${className}`} onClick={handleLogOut}> Выйти </button>
    );
}