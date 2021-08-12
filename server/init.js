import "./db";
import "./models/Movie";
import "./apiDb";
import app from "./server";

const PORT = 7775;

const openServer = () => 
console.log(`✅ Server Open on port http://localhost:${PORT} 🚀`);

app.listen(PORT, openServer);