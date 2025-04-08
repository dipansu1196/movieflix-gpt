import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        addUser: (state, action) => {
            state.user = action.payload;  // Directly modify state
        },
        removeUser: (state) => {
            state.user = null;  // Directly modify state
        },
    },
});

export const {addUser, removeUser} = userSlice.actions;
export default userSlice.reducer;
