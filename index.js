const express = require("express");
const routes = require("./routes/routes");
const session = require("./middleware/session");
const corsMw = require("./middleware/cors");

const PORT = 3001;
const app = express();
app.use(express.json());

// !If you run behind proxy (e.g nginx)
// app.set('trust proxy', 1);

// !Configure Redis
const redisClient = require("./redisConn");

// !Session Middleware
app.options("*", corsMw);
app.use(corsMw);

app.use(session);
app.use("/", routes)


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));


