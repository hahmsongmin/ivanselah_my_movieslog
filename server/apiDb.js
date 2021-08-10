import axios from "axios";

let movies = [];

// const MY_API = "5b42baf14b999aeb69e9bef0f88d55da";
// const MOVIES_SEARCH = `https://api.themoviedb.org/3/search/movie?query=${MOVIE_NAME}&api_key=${MY_API}`

const MOVIES_URL = "https://yts.mx/api/v2/";
const client = axios.create({
    baseURL: MOVIES_URL
});

const startAPI = async() => {
    ({ 
        data: {
             data: {movies}
            }
        } = await client.get("/list_movies.json", { params: { limit: 50 } }));
};

startAPI();

export const getMovies = () => movies;
