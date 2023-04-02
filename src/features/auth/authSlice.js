import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accessToken: '',
    user: {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.user = action.payload.user;
        },
        logout: (state) => {
            state.accessToken = "";
            state.user = {};
        }
    }
});

export default authSlice.reducer;
export const { login, logout } = authSlice.actions;