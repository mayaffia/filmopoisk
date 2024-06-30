import styles from "./styles.module.css";
import {Actor} from "../../shared/ui/actor/actor";
import React from "react";


export const Actors = ({film} : any) => {

    console.log(film?.actors)
    return (
        <div>
            <div className={styles.actorsTitle}>
                <span> Актеры</span>
            </div>

            <div className={styles.slider}>
                {film?.actors?.map((actor: { name: string, photo: string }, idx : number) => (
                    <Actor image={actor.photo} name={actor.name} key={idx}/>
                ))}
            </div>
        </div>
)
}