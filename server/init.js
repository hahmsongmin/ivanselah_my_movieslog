import "./db";
import "./models/Movie";
import app from "./server";

const PORT = 7777;

const openServer = () => 
console.log(`✅ Server Open on port http://localhost:${PORT} 🚀`);

app.listen(PORT, openServer);