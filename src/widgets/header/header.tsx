import styles from "./styles.module.css"
import {ButtonLogIn} from "../../shared/ui/buttonLogIn/button";
import {ProfileIcon} from "../../shared/ui/profileIcon/profileIcon";
import {ButtonLogOut} from "../../shared/ui/buttonLogOut/button";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store/store";
import {useState} from "react";
import {AuthModal} from "../../features/authModal/authModal";


export const Header = () => {
    const isLogged = useSelector((state: RootState) => state.isLogged.value);

    const [isModalOpen, setModalOpen] = useState(false);
    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <header className={styles.header}>
            <span className={styles.title}> Фильмопоиск</span>
            {!isLogged &&
                <ButtonLogIn className={styles.button} username={'login'} password={'pass'} onClick={handleOpenModal}/>}
            {isLogged && <>
                <ProfileIcon/>
                <ButtonLogOut className={styles.button}/>
            </>}

            {isModalOpen && (
                <AuthModal onClose={handleCloseModal}>
                    <h1>Authentication</h1>
                    <p>Please log in to continue.</p>
                </AuthModal>
            )}
        </header>
    )
}