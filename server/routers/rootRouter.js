import express from "express";
import { home, postMyLogInfo,
    postJoin,postLogin,getLogout,postLogSave,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.get("/logout", getLogout);
rootRouter.post("/logsave", postLogSave);
rootRouter.post("/myLogInfo", postMyLogInfo);

export default rootRouter;