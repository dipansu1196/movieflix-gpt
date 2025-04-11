// src/components/VideoTitle.js
const VideoTitle = ({title, overview}) => {
    return (
      <div className="w-screen aspect-video pt-[15%] px-20 absolute">
        <h1 className="text-5xl font-bold text-white">
          {title}
        </h1>
        <p className="py-6 text-white text-lg w-1/4">
          {overview}
        </p>
        <div className="flex gap-3"> 
          <button className="bg-white text-black px-4 py-2 rounded-md text-lg p-4 flex items-center hover:bg-gray-500"> 
            <svg 
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z"/>
            </svg>
            Play
          </button>
          <button className="bg-gray-400 text-white px-4 py-2 rounded-md text-lg p-4 flex items-center hover:bg-gray-600">
            <svg 
              className="w-6 h-6 mr-2"
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
            </svg>
            More Info
          </button>
        </div>
      </div>
    );
  };
  
  export default VideoTitle;
  