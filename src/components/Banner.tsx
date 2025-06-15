import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import requests from "../request";
import { Button } from "./ui/button";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  overview: string;
  backdrop_path: string;
}

const Banner = () => {
  const [randomBanner, setRandomBanner] = useState<Movie | null>(null);
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  const fetchData = useCallback(async () => {
    try {
      const res = await axios.get(requests.fetch_netflix_originals);
      const results: Movie[] = res.data.results;
      const randomMovie = results[Math.floor(Math.random() * results.length)];
      setRandomBanner(randomMovie);
    } catch (error) {
      console.error("Failed to fetch banner:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePlay = () => {
    if (trailerUrl) {
      setTrailerUrl(""); // Close trailer if already playing
    } else {
      movieTrailer(
        randomBanner?.title ||
          randomBanner?.name ||
          randomBanner?.original_name ||
          ""
      )
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get("v") || "");
          } else {
            console.warn("Trailer URL not found for this movie.");
            setTrailerUrl(""); // Optional: clear trailer state
          }
        })
        .catch((error) => {
          console.error("Trailer not found:", error);
          setTrailerUrl(""); // Prevent crashing if no trailer
        });
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  if (!randomBanner) {
    return (
      <div className="w-full h-[360px] bg-gray-800 animate-pulse flex items-center justify-center text-white">
        Loading Banner...
      </div>
    );
  }

  return (
    <div className="relative w-full h-[360px]">
      {randomBanner.backdrop_path && (
        <img
          src={`https://image.tmdb.org/t/p/original/${randomBanner.backdrop_path}`}
          alt={randomBanner.title || randomBanner.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute left-0 top-0 flex flex-col justify-center w-full h-full px-4 md:px-8 text-white bg-gradient-to-r from-black/60 via-black/30 to-transparent">
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg mb-2">
          {randomBanner.title || randomBanner.name || "No Title"}
        </h1>
        <div className="flex space-x-4 mb-2">
          <Button onClick={handlePlay}>Play</Button>
          <Button>My List</Button>
        </div>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-[60%] leading-snug md:leading-relaxed">
          {randomBanner.overview
            ? randomBanner.overview.slice(0, 150) + "..."
            : "No description available."}
        </p>
      </div>

      {/* Show YouTube trailer below Banner */}
      {trailerUrl && (
        <div className="mt-4 px-4 md:px-8">
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}

      {trailerUrl === "" && (
        <p className="text-center text-white mt-2">No trailer available.</p>
      )}
    </div>
  );
};

export default Banner;
