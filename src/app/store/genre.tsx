import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GenreState {
    value: string;
}

const initialState: GenreState = {
    value: '0',
};

export const genreSlice = createSlice({
    name: 'genre',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setGenre } = genreSlice.actions;

export const genreReducer = genreSlice.reducer;