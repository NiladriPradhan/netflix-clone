import "../styles/row.css";

import axios from "axios";
import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

interface Movie {
  id: number;
  title?: string;
  name?: string;
  original_name?: string;
  poster_path: string;
}

interface Props {
  title: string;
  fetchUrl: string;
}

const Row: React.FC<Props> = ({ title, fetchUrl }) => {
  const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string>("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(fetchUrl);
        setMovies(res.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchMovie();
  }, [fetchUrl]);

  const handleClick = (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close trailer if already open
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url!).search);
          setTrailerUrl(urlParams.get("v") || "");
        })
        .catch((error) => console.error("Trailer not found:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="mb-6 px-4">
      <h1 className="text-lg capitalize font-semibold mb-2 text-white">
        {title}
      </h1>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie?.title || movie?.name}
            className="w-40 object-cover rounded cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
};

export default Row;
