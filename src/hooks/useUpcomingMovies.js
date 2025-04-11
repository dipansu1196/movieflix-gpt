
import { API_OPTIONS } from "../utils/constant";

import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addUpcomingMovies} from '../utils/movieSlice';

const useUpcomingMovies=()=>{
    const dispatch = useDispatch();
    const nowUpcomingMovies = async () => {
        try {
            const data = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
            if (!data.ok) {
                throw new Error(`HTTP error! status: ${data.status}`);
            }
            const json = await data.json();
            console.log(json.results);
            dispatch(addUpcomingMovies(json.results));
        } catch (error) {
            console.error("Failed to fetch upcoming movies:", error);
        }
    };
    useEffect(()=>{
            nowUpcomingMovies();
        }, [])
}
export default useUpcomingMovies;