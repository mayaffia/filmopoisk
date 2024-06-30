
import {SearchIcon} from "../../shared/ui/serachIcon/searchIcon";

import styles from './styles.module.css';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setTitle} from "../../app/store/film";
export const Search = () => {

    const [selectedTitle, setSelectedTitle] = useState('');
    const [debouncedTitle, setDebouncedTitle] = useState(selectedTitle);

    const dispatch = useDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedTitle(event.target.value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTitle(selectedTitle);
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [selectedTitle]);

    useEffect(() => {
        dispatch(setTitle(debouncedTitle));
    }, [debouncedTitle, dispatch]);

    return (
        <div className={styles.search}>
            <SearchIcon/>
            <input type="text" className={styles.input} placeholder="Название фильма"
                   value={selectedTitle}
                   onChange={handleInputChange}/>
        </div>
    );
}