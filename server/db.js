import mongoose from "mongoose";

//AWS 데이터베이스, 버지니아 북부 (서버)
//mongodb+srv://ivanselah:gkaquf12@cluster0.xhoby.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", (error) => console.log("❌ DB Error", error));
db.once("open", () => console.log("✅ Connected to DB"));
