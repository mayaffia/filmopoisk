import styles from "./styles.module.css";
import {PagLeft} from "../paginationIcons/pagLeft";
import {PagRight} from "../paginationIcons/pagRight";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store/store";
import {decrement, increment} from "../../../app/store/film";
import {PagLeftDis} from "../paginationIcons/pagLeftDis";
import {PagRightDis} from "../paginationIcons/pagRightDis";


export const Pagination = () => {

    const page = useSelector((state: RootState) => state.film.page);
    const max = useSelector((state: RootState) => state.film.page_max);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment(page));
    }

    const handleDecrement = () => {
        dispatch(decrement(page));
    }

    return (
        <div className={styles.pagination}>
            {page === 1 && <button disabled> <PagLeftDis/> </button>}
            {page > 1 && <button onClick={handleDecrement}> <PagLeft/> </button>}
            <span className={styles.page}>{page}</span>
            {page === max && <button onClick={handleIncrement} disabled> <PagRightDis/> </button>}
            {page !== max && <button onClick={handleIncrement}> <PagRight/> </button>}
        </div>
    )
}