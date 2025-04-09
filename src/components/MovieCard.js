import { IMG_CDN_URL } from "../utils/constant";

const MovieCard=({posterPath})=>{
 return (
    <div className="w-44 h-60 ">
        <img alt="MovieCard" src={IMG_CDN_URL+posterPath}/>
    </div>
 )
}
export  default MovieCard;