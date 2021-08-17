import express from "express";
import {
    postJoin,postLogin,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);

export default rootRouter;