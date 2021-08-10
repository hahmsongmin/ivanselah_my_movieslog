import express from "express";
import cors from "cors";
import rootRouter from "./routers/rootRouter";

const app = express();

app.use(cors());

app.use("/", rootRouter);
// app.use("/users", usersRouter);
// app.use("/movies", moviesRouter);

export default app;