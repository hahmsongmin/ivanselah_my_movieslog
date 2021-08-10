import { getMovies } from "../apiDb";

export const home = (req, res) => {
    const { movieTitle } = req.query;
    console.log(movieTitle);
    return res.json({ movies : getMovies()})
};
export const getJoin = (req, res) => {};
export const postJoin = (req, res) => {};
export const getLogin = (req, res) => {};
export const postLogin = (req, res) => {};
export const Search = (req, res) => {};