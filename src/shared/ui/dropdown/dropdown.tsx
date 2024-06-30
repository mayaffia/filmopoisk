
import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css";
import {MenuIcon} from "./menuIcon";
import {useDispatch} from "react-redux";
import {setPage, setYear} from "../../../app/store/film";
import {useSearchParams} from "react-router-dom";
import {setGenre} from "../../../app/store/film";


type DropdownProps = {
    VALUES: { [key: string]: string };
    year: boolean;
    genre: boolean
};

export const Dropdown = ({ VALUES, year, genre }: DropdownProps) => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [selectedValue, setSelectedValue] = useState("");

    const dispatch = useDispatch();

    useEffect(() => {
        if (year) {
            let yearS = searchParams.get('year')
            if (yearS && yearS in VALUES && yearS !=='0') {
                setSelectedValue(VALUES[yearS]);
            } else {
                setSelectedValue("Выберите год");
            }
        } else {
            let genreS = searchParams.get('genre')
            if (genreS && genreS in VALUES && genreS !== '0') {
                setSelectedValue(VALUES[genreS]);
            } else {
                setSelectedValue("Выберите жанр");
            }
        }
    }, [year, genre, searchParams, VALUES]);


    const handleSelect = (value: string) => {
        dispatch(setPage(1))
        setSelectedValue(VALUES[value]);
        if(year) {
            dispatch(setYear(value));
            let genre = searchParams.get('genre')
            setSearchParams({ genre : genre || '', year: value })
        } else {
            dispatch(setGenre(value));
            let year = searchParams.get('year')
            setSearchParams({ genre: value, year: year || '' })
        }

    };


    return (
        <div className={styles.dropdown}>
            <button className={styles.dropdownButton}>{selectedValue}
                <MenuIcon/>
            </button>
            <div className={styles.content}>
                {Object.keys(VALUES).map((value : string) => (
                    <button key={value} className={styles.optionButton} onClick={() => handleSelect(value)}>{VALUES[value]}</button>
                ))}
            </div>
        </div>
    );
};


