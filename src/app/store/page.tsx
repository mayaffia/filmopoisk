import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageState {
    value: number;
    max: number;
}

const initialState: PageState = {
    value: 1,
    max : 1
};

export const PageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.value = action.payload;
        },
        increment : (state, action: PayloadAction<number>) => {
            state.value = action.payload + 1;
        },
        decrement : (state, action: PayloadAction<number>) => {
            state.value = action.payload - 1;
        },
        setMax: (state, action: PayloadAction<number>) => {
            state.max = action.payload;
        }
    },
});

export const { setPage, increment, decrement, setMax } = PageSlice.actions;

export const pageReducer = PageSlice.reducer;