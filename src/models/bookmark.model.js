const mongoose = require("mongoose");
const { Schema } = mongoose;

const bookmarkSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  threadId: { type: Schema.Types.ObjectId, ref: "Thread" }
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);

module.exports = Bookmark;