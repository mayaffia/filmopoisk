import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IsLoggedState {
    value: boolean;
}

const initialState: IsLoggedState = {
    value: false,
};

export const isLoggedSlice = createSlice({
    name: 'isLogged',
    initialState,
    reducers: {
        setIsLogged: (state, action: PayloadAction<boolean>) => {
            state.value = action.payload;
        },
    },
});

export const { setIsLogged } = isLoggedSlice.actions;

export const isLoggedReducer = isLoggedSlice.reducer;