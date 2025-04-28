// src/utils/gptSlice.js
import { createSlice } from '@reduxjs/toolkit';

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        movieResults: [],
        showGptSearch: false,
        isLoading: false,
        error: null,
        movieNames:null,
       
    },
    reducers: {
        setMovieResults: (state, action) => {
            const {movieNames,movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        toggleGptSearch: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { setMovieResults, toggleGptSearch, setLoading, setError } = gptSlice.actions;
export default gptSlice.reducer;
