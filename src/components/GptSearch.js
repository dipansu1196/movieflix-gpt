import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";
const GptSearch=()=>{
    return (
        <div className="gpt-search">
             <div 
                            className="absolute top-0 left-0 w-screen h-screen bg-cover bg-center bg-no-repeat -z-10"
                            style={{backgroundImage: `url(${BG_URL})`}}
                        >
                            <div className="w-screen h-screen bg-black bg-opacity-50"></div>
                        </div>
        <GptSearchBar/>
        
            </div>
            )
}
export default GptSearch;