import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface YearState {
    value: string;
}

const initialState: YearState = {
    value: '0',
};

export const yearSlice = createSlice({
    name: 'release_year',
    initialState,
    reducers: {
        setYear: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setYear } = yearSlice.actions;

export const yearReducer = yearSlice.reducer;