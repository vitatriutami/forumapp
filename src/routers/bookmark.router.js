const express = require("express");
const bookmarkRouter = express();
const bookmarkController = require("../controllers/bookmark.controller.js");

bookmarkRouter.post("/bookmarks", bookmarkController.handleCreateBookmarks);
bookmarkRouter.get("/bookmarks", bookmarkController.handleGetBookmarks);
bookmarkRouter.delete("/bookmarks/:id", bookmarkController.handleUnbookmarks);


module.exports = bookmarkRouter;