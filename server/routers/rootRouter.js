import express from "express";
import { home, postMyLogInfo, postMyLogDelete,
    postJoin,postLogin,getLogout,postLogSave,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.get("/logout", getLogout);
rootRouter.post("/logsave", postLogSave);
rootRouter.post("/myLogInfo", postMyLogInfo);
rootRouter.post("/myLogDelete", postMyLogDelete);

export default rootRouter;