import axios from "axios";
let movies = [];

const MOVIES_URL = "https://yts.mx/api/v2/";
const client = axios.create({
    baseURL: MOVIES_URL
});

const startAPI = async() => {
    const { 
        data: { 
            data: {movies}
        }
    } = await client.get("/list_movies.json", { params: { limit: 50 }});
};

startAPI();


export const getMovies = () => movies;