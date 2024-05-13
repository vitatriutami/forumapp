const express = require("express");
const threadRouter = express();
// const jwt = require("jsonwebtoken");
const threadController = require("../controllers/thread.controller.js");

// crud
threadRouter.post("/threads", threadController.handleCreateThreads)
threadRouter.get("/threads", threadController.handleGetAllThreads)
threadRouter.get("/threads/:id", threadController.handleGetAThread)
threadRouter.delete("/threads/:id", threadController.handleDeleteThreads)





// threadRouter.get("/api/threads", (req, res) => {
//   const token = req.cookies.token;
//   try {
//     const payload = jwt.verify(token, process.env.JWT_SECRET);
//     console.log(payload);
//     res.send("This is all threads");
//   } catch (error) {
//     res.send("You don't have access!");
//   }
// });


module.exports = threadRouter;