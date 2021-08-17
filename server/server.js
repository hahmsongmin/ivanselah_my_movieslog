import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import cors from "cors";
import rootRouter from "./routers/rootRouter";
import MongoStore from "connect-mongo";


const app = express();
app.use(cors());

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({mongoUrl: process.env.DB_URL}),
    })
);

app.use(express.json());
app.use(express.urlencoded( {extended : true } ))


app.use("/", rootRouter);

export default app;