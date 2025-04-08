import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies);
  
  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  console.log("Main Movie:", mainMovie); // Added more descriptive console log

  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
}

export default MainContainer;
