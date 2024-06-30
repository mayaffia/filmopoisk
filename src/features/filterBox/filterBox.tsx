import styles from "./styles.module.css";
import {Dropdown} from "../../shared/ui/dropdown/dropdown";

export const FilterBox = () => {

    const GENRES : {[key : string] : string} = {
        '0': 'Не выбран',
        comedy: 'Комедия',
        drama: 'Драма',
        action: 'Боевик',
        thriller: 'Триллер',
        horror: 'Ужасы',
        family: 'Семейный',
        cartoon: 'Анимированный',
        fantasy: 'Фэнтези',
        romance: 'Романтика',
        adventure: 'Приключения',
        musical: 'Мьюзикл',
        war: 'Военный',
    }

    const YEARS : {[key : string] : string} = {
        '0': 'Не выбран',
        '2009': '2009',
        '2008': '2008',
        '2007': '2007',
        '2006': '2006',
        '1990-2005': '1990-2005',
        '1950-1989': '1950-1989',
    }

    return (
        <div className={styles.filterBox}>
            <div className={styles.wrapper}>
                <span className={styles.filter}>Фильтр</span>
                <span className={styles.genre}>Жанр</span>
                <Dropdown VALUES={GENRES} year={false} genre={true}/>
                <span className={styles.year}>Год выпуска</span>
                <Dropdown VALUES={YEARS} year={true} genre={false}/>
            </div>
        </div>
    );
}