import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
// fetch trailer video and updating the store with trailervideo
// we use to store data in redux store instead of local state
// so that we can use it in other components as well btw there are two ways of doing this

const getMoviesVideo= async ()=>{
    
    const data= await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",API_OPTIONS);
    const json= await data.json();
    console.log(json);

    const filterData = json.results.filter((video)=>video.type === "Trailer");
    const trailer= filterData.length? filterData[0]: json.results[0];
    console.log(trailer);
    dispatch(addTrailerVideo(trailer));
}


useEffect(()=>{
    getMoviesVideo();
},[])
}
export default useMovieTrailer;