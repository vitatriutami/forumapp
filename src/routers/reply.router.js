const express = require("express");
const replyRouter = express();

replyRouter.get("/replies", (req, res) => res.send("This is all replies"));

module.exports = replyRouter;