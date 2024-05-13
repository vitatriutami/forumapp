const express = require("express");
const replyRouter = express();
const replyController = require("../controllers/reply.controller.js");

replyRouter.post("/replies", replyController.handleCreateReplies);
replyRouter.get("/replies", replyController.handleGetReplies);
replyRouter.patch("/replies/:id", replyController.handleUpdateReplies);
replyRouter.delete("/replies/:id", replyController.handleDeleteReplies);


module.exports = replyRouter;