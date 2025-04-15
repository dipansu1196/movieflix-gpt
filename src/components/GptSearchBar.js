
// src/components/GptSearchBar.js
import { useSelector } from "react-redux";
import lang from "../utils/lang";

const GptSearchBar = () => {
    const langKey = useSelector((store) => store.config?.lang) || "en";
    
    // Add error handling and default values
    const searchText = lang[langKey]?.search || "Search";
    const placeholderText = lang[langKey]?.gptsearchPlaceholder || "What would you like to watch today?";

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="pt-[20%] flex justify-center">
            <form 
                className="w-1/2 bg-black grid grid-cols-12 rounded-lg"
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    placeholder={placeholderText}
                    className="p-4 m-4 col-span-9 rounded-lg"
                />
                <button 
                    className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg hover:bg-red-800"
                >
                    {searchText}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
