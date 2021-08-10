import express from "express";
import cors from "cors";
import "./apiDb";
import "./db";
import rootRouter from "./routers/rootRouter";

const app = express();

const PORT = 7777;

app.use(cors());

app.use("/", rootRouter);
// app.use("/users", usersRouter);
// app.use("/movies", moviesRouter);

const openServer = () => console.log(`✅ Server Open on port http://localhost:${PORT} 🚀`);

app.listen(PORT, openServer);