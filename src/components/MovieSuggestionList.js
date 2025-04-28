import React from "react";
import MovieCard from "./MovieCard";

const MovieSuggestionList = ({ title, movies }) => {
    const moviesArray = Array.isArray(movies) ? movies : [];

    return (
        <div className="mb-5">
            <h2 className="text-lg sm:text-2xl text-white pt-3 capitalize font-bold">{title}</h2>
            <div className="mt-1 flex overflow-x-auto scrollbar-hide space-x-4">
                {moviesArray.map((movie, index) => (
                    <MovieCard
                        key={movie.id || index}
                        title={movie.title}
                        posterPath={movie.poster_path}
                    />
                ))}
            </div>
        </div>
    );
};

export default MovieSuggestionList;