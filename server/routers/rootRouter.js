import express from "express";
import { home,
    postJoin,postLogin,getLogout,postLogSave,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.get("/logout", getLogout);
rootRouter.post("/logsave", postLogSave);

export default rootRouter;