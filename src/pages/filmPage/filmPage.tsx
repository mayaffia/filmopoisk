
import {Header} from "../../widgets/header/header";
import styles from "./styles.module.css"
import React from "react";
import {useParams} from "react-router-dom";
import {BigFilmCard} from "../../entities/bigFilmCard/bigFilmCard";
import {moviesApi} from "../../app/api/moviesApi";
import {Loader} from "../../shared/ui/loader/loader";
import {Actors} from "../../entities/actors/actors";


export const FilmPage = () => {
    const {filmId} = useParams();
    const {data: film, error, isLoading} = moviesApi.useGetMovieByIdQuery(filmId);

    if (error) {
        console.log("Error getting film", error)
    }

    return (
        <div>
            <Header/>
            {isLoading && <Loader className={styles.loader}/>}
            {!isLoading && <>
            <BigFilmCard filmId={filmId}/>
                <Actors film={film}/>
            </>}
        </div>
    )
}

