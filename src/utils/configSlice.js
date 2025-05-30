
import {createSlice} from   '@reduxjs/toolkit';
const configSlice= createSlice({
    name: 'config',
    initialState: {
        config: {
           lang:"en",
           gptSearchEnabled:true,
        }
    },
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})
export const {changeLanguage} = configSlice.actions;
export default configSlice.reducer;