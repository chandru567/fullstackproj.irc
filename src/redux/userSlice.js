// src/redux/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: null,
    },
    reducers: {
        login: (state, action) => {
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.email = null;
        },
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
