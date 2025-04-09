// src/components/MovieList.js
import MovieCard from   "../components/MovieCard";
const MovieList = ({title, movies}) => {
    if (!movies) return null;
    if (!Array.isArray(movies)) return null;

    return (
        <div className="py-6">
            <h1 className="text-3xl font-bold py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex gap-4">
                    {movies.map(movie => (
                        <MovieCard 
                            key={movie.id} 
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;
