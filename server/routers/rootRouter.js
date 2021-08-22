import express from "express";
import { home, postMyLogInfo, postMyLogDelete,
    postUserEdit,
    postJoin,postLogin,getLogout,postLogSave,
} from "../controllers/rootController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.get("/logout", getLogout);
rootRouter.post("/join", postJoin);
rootRouter.post("/login", postLogin);
rootRouter.post("/logsave", postLogSave);
rootRouter.post("/myLogInfo", postMyLogInfo);
rootRouter.post("/myLogDelete", postMyLogDelete);
rootRouter.post("/userEdit", postUserEdit);



export default rootRouter;