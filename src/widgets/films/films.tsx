
import {FilmCard} from "../../entities/filmCard/filmCard";
import styles from "./styles.module.css";
import {moviesApi} from "../../app/api/moviesApi";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store/store";
import {Loader} from "../../shared/ui/loader/loader";
import {Pagination} from "../../shared/ui/pagination/pagination";
import {setMax} from '../../app/store/film';


export const Films = () => {

    const dispatch = useDispatch();


    const genre = useSelector((state: RootState) => state.film.genre);
    const release_year = useSelector((state: RootState) => state.film.release_year);
    const title = useSelector((state: RootState) => state.film.title);
    const page = useSelector((state: RootState) => state.film.page);



    const {data: movies, error, isLoading} = moviesApi.useGetMoviesQuery({
        genre: genre !== '0' ? genre : undefined,
        release_year: release_year !== '0' ? release_year : undefined,
        title: title !== '' ? title : undefined,
        page: page,
        limit: 10
    });

    if (error) {
        console.log("Error getting films", error)
    }


    const total_pages = movies?.total_pages
    dispatch(setMax(total_pages))

    return (
        <div className={styles.films}>

            {isLoading && (
                <Loader/>
            )}

            {!isLoading && movies?.search_result?.map((movie: {
                id: string;
                poster: string;
                title: string;
                description: string;
                genre: string;
                rating: number;
                release_year: number;
            }) => (
                <FilmCard key={movie.id} image={movie.poster} title={movie.title}
                              description={movie.description} genre={movie.genre}
                              rating={movie.rating} year={movie.release_year} id={movie.id}/>

            ))}

            {!isLoading && movies.search_result.length > 0 && (
                <Pagination/>

            )}

            {!isLoading && movies.search_result.length === 0 && (
                <div className={styles.nofilms}>
                    <span className={styles.textBold}>Фильмы не найдены</span>
                    <span className={styles.text}>Измените запрос и поробуйте снова</span>
                </div>
            )}

        </div>
    );
}