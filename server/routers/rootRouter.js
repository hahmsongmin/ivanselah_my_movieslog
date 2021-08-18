import express from "express";
import {
    postJoin,postLogin,getLogout,postLogSave,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.get("/logout", getLogout);
rootRouter.post("/logsave", postLogSave);

export default rootRouter;