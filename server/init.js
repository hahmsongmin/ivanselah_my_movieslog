<<<<<<< HEAD
import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User";
import "./models/MyLog";
import app from "./server.js";

const PORT = process.env.PORT || 7777;

const openServer = () =>
  console.log(`✅ Server Open on port http://localhost:${PORT} 🚀`);

app.listen(PORT, openServer);
=======
import "regenerator-runtime";
import "dotenv/config";
import "./db";
import "./models/User";
import "./models/MyLog";
import app from "./server.js";

const PORT = process.env.PORT || 7777;

const openServer = () =>
  console.log(`✅ Server Open on port http://localhost:${PORT} 🚀`);

app.listen(PORT, openServer);
>>>>>>> 8c644885d6c4ca0cf7010d7fa26afc1e1872c354
