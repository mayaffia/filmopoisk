import styles from "./styles.module.css";
import {Slider} from "../../shared/ui/slider/slider";
import {Actor} from "../../shared/ui/actor/actor";
import React from "react";


export const Actors = ({film} : any) => {
    return (
        <div>
            <div className={styles.actorsTitle}>
                <span> Актеры</span>
            </div>

           <Slider/>
            <div className={styles.slider}>
                {film?.actors?.map((actor: { name: string, photo: string }) => (
                    <Actor image={actor.photo} key={actor.name} name={actor.name}/>
                ))}
            </div>
        </div>
)
}