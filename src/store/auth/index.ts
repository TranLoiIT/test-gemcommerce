import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {},
    },
    reducers: {
        addUser(state, action) {
            state.user = action.payload;
        },
        updateUser(state, action) {
            state.user = action.payload;
        },
        deleteUser(state, _action) {
            state.user = {};
        },
    },
});

const { actions, reducer } = authSlice;
export const { addUser, updateUser, deleteUser } = actions;
export const authReducer = reducer;
