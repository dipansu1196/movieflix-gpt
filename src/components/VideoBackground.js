import { useSelector } from 'react-redux';
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({movieId}) => {
    const trailerVideo = useSelector(store => store.movie?.trailerVideo);
    useMovieTrailer(movieId);

    return (
        <div className="w">
           <iframe 
             className="w-screen aspect-video"
             src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&showinfo=0&rel=0`}
             title="YouTube video player"
             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
             autoPlay
           ></iframe>
        </div>
    )
}
export default VideoBackground;
