import {combineReducers, configureStore,StoreEnhancer} from "@reduxjs/toolkit";
import {moviesApi} from "../api/moviesApi";
import {isLoggedReducer} from "./isLogged";
import {filmReducer} from "./film";



export const rootReducer = combineReducers({
    [moviesApi.reducerPath]: moviesApi.reducer,
    isLogged : isLoggedReducer,
    film : filmReducer
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