import axios from 'axios';
import {setIsLogged} from "../../../app/store/isLogged";


interface AuthProps {
    username: string;
    password: string;
}


export const login = ({ username, password }: AuthProps) => {

    return async (dispatch: (arg0: { payload: boolean; type: "isLogged/setIsLogged"; }) => void): Promise<void> => {
        try {
            const response = await axios.post('http://localhost:3030/api/v1/login',
                { "username" : username, "password" : password });
            const token = response.data.token;
            setToken(token);
            dispatch(setIsLogged(true));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(setIsLogged(false));
            }
        }
    };
};


function setToken(token : string) {
    localStorage.setItem('authToken', token);
}

function removeToken() {
    localStorage.removeItem('authToken');
}

function getToken() {
    return localStorage.getItem('authToken');
}

export const logout = () => (dispatch: (arg0: { type: string; }) => void) => {
    removeToken();
    dispatch(setIsLogged(false));
};


export const checkAuth = () => (dispatch: (arg0: { type: string; payload?: string; }) => void) => {
    const token = getToken();
    if (token) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: token });
    } else {
        dispatch({ type: 'LOGOUT' });
    }
};