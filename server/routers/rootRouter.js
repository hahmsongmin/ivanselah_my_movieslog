import express from "express";
import {
    postJoin,postLogin,getLogout,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.get("/logout", getLogout);

export default rootRouter;