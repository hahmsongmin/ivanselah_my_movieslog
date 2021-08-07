import express from "express";
import {
    home,
    getJoin, postJoin,
    getLogin, postLogin,
    Search } from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.get("/search", Search);

export default rootRouter;