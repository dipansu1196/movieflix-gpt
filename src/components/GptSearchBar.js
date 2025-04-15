// src/components/GptSearchBar.js
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/lang";
import openai from "../utils/openai";
import { setMovieResults, setLoading, setError } from "../utils/gptSlice";
import { API_OPTIONS } from "../utils/constant";

const GptSearchBar = () => {
    const [searchError, setSearchError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const searchInput = useRef(null);
    const dispatch = useDispatch();
    const langKey = useSelector((store) => store.config?.lang) || "en";

    // TMDB search function
    const searchMovieTmdb = async (movie) => {
        try {
            const data = await fetch(
                'https://api.themoviedb.org/3/search/movie?query=' + 
                movie + 
                '&include_adult=false&language=en-US&page=1',
                API_OPTIONS
            );
            const json = await data.json();
            return json.results[0];
        } catch (error) {
            console.error("TMDB API Error:", error);
            return null;
        }
    };

    const handleGptSearchClick = async (e) => {
        e.preventDefault();

        if (!searchInput.current.value) {
            setSearchError("Please enter a search term");
            return;
        }

        setIsLoading(true);
        setSearchError(null);
        dispatch(setError(null));

        try {
            const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + 
                searchInput.current.value + 
                " only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

            const completion = await openai.chat.completions.create({
                model: "deepseek/deepseek-r1-zero:free",
                messages: [
                    {
                        role: "user",
                        content: gptQuery
                    }
                ]
            });

            console.log("Raw API Response:", completion);

            if (!completion?.choices?.[0]?.message?.content) {
                throw new Error("Invalid response format from API");
            }

            const movieList = completion.choices[0].message.content;
            console.log("Movie List:", movieList);

            const movies = movieList
                .split(',')
                .map(movie => movie.trim())
                .filter(movie => movie && movie.length > 0);

            console.log("Processed Movies:", movies);

            if (movies.length === 0) {
                throw new Error("No movies found in response");
            }

            // Search TMDB for each movie
            const promiseArray = movies.map(movie => searchMovieTmdb(movie));
            const tmdbResults = await Promise.all(promiseArray);
            console.log("TMDB Results:", tmdbResults);

            // Filter out null results and update store
            const validResults = tmdbResults.filter(result => result !== null);
            dispatch(setMovieResults(validResults));
            searchInput.current.value = "";

        } catch (error) {
            console.error("GPT API Error:", error);
            setSearchError(
                error.message || "Failed to get movie recommendations. Please try again."
            );
            dispatch(setError("Failed to fetch recommendations"));
        } finally {
            setIsLoading(false);
            dispatch(setLoading(false));
        }
    };

    return (
        <div className="pt-[10%] flex flex-col items-center">
            <form 
                className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
                onSubmit={handleGptSearchClick}
            >
                <input 
                    ref={searchInput}
                    type="text" 
                    placeholder={lang[langKey]?.gptsearchPlaceholder || "What would you like to watch today?"}
                    className="p-4 m-4 col-span-9 rounded-lg text-black"
                    disabled={isLoading}
                />
                <button 
                    className={`col-span-3 m-4 py-2 px-4 text-white rounded-lg ${
                        isLoading 
                            ? "bg-gray-600 cursor-not-allowed" 
                            : "bg-red-700 hover:bg-red-800 transition-colors"
                    }`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        </div>
                    ) : (
                        lang[langKey]?.search || "Search"
                    )}
                </button>
            </form>

            {/* Error Message */}
            {searchError && (
                <div className="p-4 mt-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    {searchError}
                </div>
            )}

            {/* Loading Message */}
            {isLoading && (
                <div className="mt-4 text-white">
                    Searching for the best movie recommendations...
                </div>
            )}
        </div>
    );
};

export default GptSearchBar;
