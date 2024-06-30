import {combineReducers, configureStore,StoreEnhancer} from "@reduxjs/toolkit";
import {moviesApi} from "../api/moviesApi";
import {genreReducer} from "./genre";
import {yearReducer} from "./year";
import {titleReducer} from "./title";
import {isLoggedReducer} from "./isLogged";
import {pageReducer} from "./page";



export const rootReducer = combineReducers({
    [moviesApi.reducerPath]: moviesApi.reducer,
    genre: genreReducer,
    release_year : yearReducer,
    title : titleReducer,
    isLogged : isLoggedReducer,
    page : pageReducer,
})

export const setupStore = (rootReducer: any, applyMiddleware1: StoreEnhancer<{ dispatch: unknown }>) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(moviesApi.middleware)
    })
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']