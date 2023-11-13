import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Ryan Giggs' },
    { id: '1', name: 'Paul Scholes' },
    { id: '2', name: 'Gary Naville' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer