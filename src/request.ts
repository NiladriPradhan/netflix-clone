
const baseURL = "https://api.themoviedb.org/3"
const API_KEY = "b2b8443d6baf278367b3cc21cc065d0c";


const requests = {
    fetch_trending: `${baseURL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetch_netflix_originals: `${baseURL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetch_most_popular_movies: `${baseURL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetch_action_movies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetch_comedy_movies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetch_horror_movies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetch_romantic_movies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetch_documentries_movies: `${baseURL}/discover/movie?api_key=${API_KEY}&with_genres=99`,


};

export default requests;