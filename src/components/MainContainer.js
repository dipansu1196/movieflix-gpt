// src/components/MainContainer.js
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MainContainer = () => {
  const movies = useSelector(store => store.movie?.nowPlayingMovies);
  
  if (!movies) return null;

  const mainMovie = movies[0];

  return (
    <div className="relative">
      {/* Video Background with Gradient Overlay */}
      <div className="w-screen aspect-video">
        <VideoBackground movieId={mainMovie.id} />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90"></div>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0">
        {/* Title and Buttons Section */}
        <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
        
        {/* Now Playing Movies Section - Positioned at bottom */}
       
      </div>
    </div>
  );
};

export default MainContainer;
