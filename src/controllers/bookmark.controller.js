const Bookmark = require("../models/bookmark.model.js");

async function handleCreateBookmarks (req, res) {
  const { threadId, userId } = req.body;

  const newBookmark = new Bookmark({
    threadId,
    userId,
  });

  const saveBookmark = await newBookmark.save();

  res.status(201).json({ message: "You have successfully added this thread to bookmark!", data: saveBookmark });
}

async function handleGetBookmarks (req, res) {
  const allBookmarks = await Bookmark.find().populate("threadId").populate("userId");
  res.status(201).json({ message: "This is all bookmarks", data: allBookmarks });
}

async function handleUnbookmarks (req, res){
    const bookmarkId = req.params.id

    await Bookmark.findByIdAndDelete(bookmarkId)
  res.status(201).send("This thread has just unbookmarked")
}

module.exports = { handleCreateBookmarks, handleGetBookmarks, handleUnbookmarks }