import styles from "./styles.module.css";
import {Rating} from "../../features/rating/rating";
import React, { useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store/store";
import {moviesApi} from "../../app/api/moviesApi";
import {selectIsLogged} from "../../app/store/isLogged";


export const BigFilmCard = ({filmId} : any) => {

    const isLogged = useSelector((state : RootState) => selectIsLogged(state))

    const {data : film, error} = moviesApi.useGetMovieByIdQuery(filmId);

    if (error) {
        console.log("Error getting film", error)
    }

    const [rating, setRating] = useState(null);

    const handleRatingChange = (newRating: any) => {
        setRating(newRating);
    };

    return (
        <div className={styles.filmCard}>
            <img className={styles.image} src={film.poster}/>

            <div>
                <span className={styles.title}>{film.title}</span>

                <div className={styles.texts}>
                    <div className={styles.genre}>
                        <span className={styles.name}>Жанр: </span>
                        <span className={styles.value}>{film.genre}</span>
                    </div>

                    <div className={styles.genre}>
                        <span className={styles.name}>Год выпуска: </span>
                        <span className={styles.value}>{film.release_year}</span>
                    </div>

                    <div className={styles.genre}>
                        <span className={styles.name}>Рейтинг: </span>
                        {!rating && <span className={styles.value}>{film.rating}</span>}
                        {rating && <span className={styles.value}>{rating}</span>}
                    </div>


                    <span className={styles.name}>
                        Описание
                    </span>

                    <div className={styles.desc}>
                        <span className={styles.description}>{film.description}</span>
                    </div>
                </div>

            </div>

            {isLogged && <Rating className={styles.rating} movieId={film.id} onChange={handleRatingChange}/>}
            {!isLogged && <div className={styles.empty}></div>}

        </div>
    )
}