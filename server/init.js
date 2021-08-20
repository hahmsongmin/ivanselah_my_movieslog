import "dotenv/config";
import "./db";
import "./models/User";
import "./models/MyLog";
import app from "./server";

const PORT = 7777;

const openServer = () => 
console.log(`✅ Server Open on port http://localhost:${PORT} 🚀`);

app.listen(PORT, openServer);