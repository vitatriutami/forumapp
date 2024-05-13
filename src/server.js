const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const middleware = require("./controllers/middleware.js");
const app = express();
const PORT = 8000;

const authRouter = require("./routers/auth.router.js");
const threadRouter = require("./routers/thread.router.js");
const replyRouter = require("./routers/reply.router.js");
const bookmarkRouter = require("./routers/bookmark.router.js");
const MONGO_DB_URL = require("./config/dburl.config.js");

mongoose.connect(MONGO_DB_URL);

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api", middleware);

// Router
app.use(authRouter);
app.use("/api", threadRouter);
app.use("/api", replyRouter);
app.use("/api", bookmarkRouter);

app.listen(PORT);