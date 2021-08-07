import { getMovies } from "../db";

export const home = (req, res) => {
    return res.end(JSON.stringify({movies : getMovies}));
};
export const getJoin = (req, res) => {};
export const postJoin = (req, res) => {};
export const getLogin = (req, res) => {};
export const postLogin = (req, res) => {};
export const Search = (req, res) => {};