// GptMovieSuggestions.js
import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
const GptMovieSuggestions = () => {
    const { movieResults, movieNames } = useSelector((store) => store.gpt);

    if (!movieNames || !movieResults || movieNames.length === 0 || movieResults.length === 0) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="text-white text-xl md:text-2xl font-semibold p-4 rounded-lg 
                    bg-gradient-to-r from-gray-800/60 to-black/60 backdrop-blur-sm">
                    No movie suggestions available
                </div>
            </div>
        );
    }

    return (
        <div className="px-4 md:px-8 py-8 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
            {/* Section Title */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    Recommended Movies
                </span>
            </h2>

            {/* Movies Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
                {movieResults.map((movie, index) => (
                    <div 
                        key={movieNames[index]} 
                        className="relative group cursor-pointer"
                    >
                        {/* Movie Card Container */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 
                            hover:scale-105 hover:shadow-2xl">
                            
                            {/* Movie Poster */}
                            <div className="aspect-[2/3] relative">
                                <MovieCard 
                                    posterPath={movie?.poster_path}
                                    title={movieNames[index]}
                                />
                                
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                </div>
                            </div>

                            {/* Movie Info Overlay */}
                            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full 
                                group-hover:translate-y-0 transition-transform duration-300 bg-black/80 backdrop-blur-sm">
                                <h3 className="text-white font-bold text-sm md:text-base mb-2 truncate">
                                    {movieNames[index]}
                                </h3>
                                {movie.vote_average && (
                                    <div className="flex items-center gap-2">
                                        <span className="text-yellow-400">★</span>
                                        <span className="text-white text-sm">
                                            {movie.vote_average.toFixed(1)}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Elements */}
            <div className="fixed top-0 left-0 w-full h-40 bg-gradient-to-b from-black to-transparent 
                pointer-events-none z-10"></div>
            <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent 
                pointer-events-none z-10"></div>
        </div>
    );
};

export default GptMovieSuggestions;

