import {useSelector} from "react-redux";
import MovieList from "./MovieList";
const SecondaryContainer = ()=>{
    const movies= useSelector(store=>store.movie);
    if(!movies) return null;
return <div className=" bg-black">
    <div classname="-mt-52  pl-30 relative z-20">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>

<MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>

<MovieList title={"Popular"} movies={movies.nowPlayingMovies}/>

<MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}/>

<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>

    </div>


</div>


}
export default SecondaryContainer;