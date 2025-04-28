import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    // Ensure movies is not null or undefined
    if (!movies) {
        console.log("Movies prop is null or undefined");
        return <div className="text-white">{title}: No movies available.</div>;
    }

    // Convert the movies object to an array if it's not already an array
    const moviesArray = Array.isArray(movies) ? movies : Object.values(movies);

    // Filter valid movies
    const validMovies = moviesArray.filter(
        (movie) => movie?.id && movie?.poster_path && movie?.title
    );

    console.log("Movies prop:", movies);
    console.log("Movies Array:", moviesArray);
    console.log("Valid Movies:", validMovies);

    if (validMovies.length === 0) {
        return <div className="text-white">{title}: No movies available.</div>;
    }

    return (
        <div className="mb-5">
            <h2 className="text-2xl text-white pt-3 capitalize font-bold">{title}</h2>
            <div className="mt-1 flex transition-all overflow-x-auto scrollbar-hide">
                <div className="flex justify-evenly mt-4">
                    {validMovies.map((movie) => (
                        <MovieCard
                            key={movie.id}
                            title={movie.title}
                            posterPath={movie.poster_path}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MovieList;