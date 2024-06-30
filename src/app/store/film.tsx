import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilmState {
    genre: string;
    release_year : string;
    title : string;
    page: number;
    page_max : number;
}

const initialState: FilmState = {
    genre : '0',
    release_year : '0',
    title : '',
    page: 1,
    page_max : 1
};

export const filmSlice = createSlice({
    name: 'film',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            state.genre = action.payload;
        },
        setYear: (state, action: PayloadAction<string>) => {
            state.release_year = action.payload;
        },
        setTitle: (state, action: PayloadAction<string>) => {
            state.title = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        increment : (state, action: PayloadAction<number>) => {
            state.page = action.payload + 1;
        },
        decrement : (state, action: PayloadAction<number>) => {
            state.page = action.payload - 1;
        },
        setMax: (state, action: PayloadAction<number>) => {
            state.page_max = action.payload;
        }
    },
});

export const { setGenre, setYear, setTitle,  setPage, increment, decrement, setMax } = filmSlice.actions;

export const filmReducer = filmSlice.reducer;