import styles from "./styles.module.css";
import React, {useState} from "react";
import {Rating} from "../../features/rating/rating";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store/store";
import {selectIsLogged} from "../../app/store/isLogged";


interface MovieCardProps {
    image: string;
    title: string;
    genre: string;
    year: number;
    description: string;
    rating: number;
    id : string;
}


export const FilmCard : React.FC<MovieCardProps> = ({ image, title, genre, year, description, rating, id }) => {

    const navigate = useNavigate();

    const handleFilmClick = (filmId: string) => {
        navigate(`/film/${filmId}`);
    }

    const isLogged = useSelector((state : RootState) => selectIsLogged(state))

    const [ratingNew, setRating] = useState('');

    const handleRatingChange = (newRating: string) => {
        setRating(newRating);
    };


    return (
        <div className={styles.filmCard}>

            <div onClick={() => handleFilmClick(id)} className={styles.click2}>
                <div className={styles.imageDiv}>
                    <img src={image} alt={title} className={styles.image}/>
                </div>

                <div className={styles.titleDiv}>
                    <span className={styles.title}>{title}</span>
                </div>
            </div>

            {isLogged && <Rating className={styles.rating} movieId={id} onChange={handleRatingChange}/>}
            {!isLogged && <div className={styles.empty}></div>}

            <div onClick={() => handleFilmClick(id)} className={styles.click}>
                <div className={styles.names}>
                    <p>Жанр</p>
                    <p>Год выпуска</p>
                    <p>Описание</p>
                </div>

                <div className={styles.values}>
                    <p>{genre}</p>
                    <p className={styles.year}>{year}</p>
                    <p className={styles.description}>{description}</p>
                </div>

                <div className={styles.description}></div>
            </div>

        </div>
    );
}