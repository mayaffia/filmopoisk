import React, { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import styles from "./styles.module.css";
import {ButtonLogIn} from "../../shared/ui/buttonLogIn/button";
import {ButtonCancel} from "../../shared/ui/buttonCancel/button";
import {CloseIcon} from "../../shared/ui/buttonCancel/closeIcon";
import {ReqStar} from "../../shared/ui/reqStar/reqStar";
import {useDispatch} from "react-redux";
import { login} from "./api/authApi";
import {AppDispatch} from "../../app/store/store";

interface AuthModalProps {
    children: ReactNode;
    onClose: () => void;
}

export const AuthModal: FC<AuthModalProps> = ({ children, onClose }) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    };

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    };

    const dispatch = useDispatch<AppDispatch>();
    const handleLogin = () => {
        dispatch(login({ username, password }));
        onClose()
    };

    return createPortal(
        <>
            <div className={styles.modal}>
                <div className={styles.modalContent}>
                    <div className={styles.wrapper}>
                        <span className={styles.title}>Авторизация</span>

                        <CloseIcon onClick={onClose}/>

                        <span className={styles.login}>Логин</span>
                        <ReqStar className={styles.loginStar}/>

                        <div className={styles.inputWrapper}>
                            <input className={styles.textInput} required placeholder={'Введите логин'}
                                   value={username}
                                   onChange={handleNameChange}/>
                        </div>

                        <span className={styles.password}>Пароль</span>
                        <ReqStar className={styles.passwordStar}/>

                        <div className={styles.inputWrapper}>
                            <input className={styles.textInput} required placeholder={'Введите пароль'}
                                   value={password}
                                   onChange={handlePassword}/>
                        </div>
                    </div>


                    <div className={styles.buttons}>
                        <ButtonLogIn username={username} password={password} onClick={handleLogin}/>
                        <ButtonCancel onClick={onClose}/>
                    </div>
                </div>

            </div>

        </>,
        document.body
    );
};

