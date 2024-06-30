
import React, {useEffect, useState} from 'react';
import styles from "./styles.module.css";
import {Star} from "../../shared/ui/starIcons/star";
import {StarEmpty} from "../../shared/ui/starIcons/starEmpty";
import {StarHover} from "../../shared/ui/starIcons/starHover"
import {moviesApi} from "../../app/api/moviesApi";


interface RatingProps {
    className?: string;
    movieId : string;
    onChange(rating: string) : void;
}

export const Rating :React.FC<RatingProps> = ({className, movieId, onChange}) => {

    const userId = localStorage.getItem('authToken');
    const ratingKey = `${userId}-${movieId}`;

    const [rating, setRatingS] = useState(Number(localStorage.getItem(ratingKey)));
    const [hover, setHover] = useState(0);
    const [rateMovie, {data, error}] = moviesApi.useRateMovieMutation();


    useEffect(() => {
        if (onChange) {
            onChange(data?.newAverageRate);
        }
    }, [data, onChange]);


    const handleRatingChange = async (currentRating: number) => {
        setRatingS(currentRating);
        localStorage.setItem(ratingKey, String(currentRating));
        rateMovie({ movieId : movieId, user_rate: currentRating })

        rateMovie({ movieId : movieId, user_rate: currentRating }).unwrap().then().catch((error) => console.log('Failed to rate movie:', error))
    };

    const renderIcon = (star: {isHovered: boolean, isClicked: boolean}) => {
        if (star.isClicked) {
            return <Star />;
        } else if (star.isHovered) {
            return <StarHover />;
        } else {
            return <StarEmpty />;
        }
    }

    return (
        <div className={`${styles.rating} ${className}`}>

            <div className={styles.stars}>
                {[...Array(5)].map((star, index) => {
                    const currentRating = index + 1;
                    const starState = {
                        isHovered: currentRating <= hover,
                        isClicked: currentRating <= rating
                    };

                    // @ts-ignore
                    return (
                        <label key={index}>
                            <input
                                key={star}
                                type="radio"
                                name="rating"
                                value={currentRating}
                                onChange={() => handleRatingChange(currentRating)}
                            />
                            <span
                                className={styles.star}
                                onMouseEnter={() => setHover(currentRating)}
                                onMouseLeave={() => setHover(0)}
                            >
                            {renderIcon(starState)}
            </span>
                        </label>
                    );
                })}
            </div>

            <div className={styles.numbers}>
                <span className={styles.textnum}>1</span>
                <span className={styles.textnum}>2</span>
                <span className={styles.textnum}>3</span>
                <span className={styles.textnum}>4</span>
                <span className={styles.textnum}>5</span>
            </div>
        </div>
    );
}