import React, {useEffect} from 'react';
import './App.css';
import {MainPage} from '../pages/mainPage/mainPage';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {FilmPage} from "../pages/filmPage/filmPage";
import {useDispatch} from "react-redux";
import {setIsLogged} from "./store/isLogged";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "film/:filmId",
        element: <FilmPage />,
    },
])

function App() {

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (token) {
            dispatch(setIsLogged(true));
        }
    }, [dispatch]);

    return (
        <RouterProvider router={router}/>
    );
}


export default App;
