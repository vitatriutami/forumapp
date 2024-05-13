const mongoose = require("mongoose");
const { Schema } = mongoose;

const replySchema = new Schema({
  reply: String,
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  threadId: { type: Schema.Types.ObjectId, ref: "Thread" }
});

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;