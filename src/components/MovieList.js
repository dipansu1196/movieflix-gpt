// src/components/MovieList.js
import MovieCard from "../components/MovieCard";

const MovieList = ({ title, movies }) => {
    if (!movies) return null;
    if (!Array.isArray(movies)) return null;

    return (
        <div className='mb-5'>


                <h2 className='text-2xl text-white pt-3 capitalize font-bold'>{title}</h2>

                <div className='mt-1  flex transition-all overflow-x-auto scrollbar-hide'>



                    <div className='flex justify-evenly mt-4 '>

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



