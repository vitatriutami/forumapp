const Reply = require("../models/reply.model.js");

// create
async function handleCreateReplies(req, res) {
  const { threadId, comment, userId } = req.body;

  const newReply = new Reply({
    threadId,
    comment,
    userId,
  });

  const saveReply = await newReply.save();

  res.status(201).json({ message: "New reply is posted", data: saveReply });
}

// read
async function handleGetReplies(req, res) {
  const allReplies = await Reply.find().populate("threadId").populate("userId");

  res.status(201).json({ message: "This is all replies", data: allReplies });
}

// update
async function handleUpdateReplies(req, res) {
  const { comment, threadId ,userId } = req.body;

  const replyId = req.params.id;

  const updateThread = await Thread.findOneAndUpdate(
    { _id: threadId },
    { title, content, userId },
    { new: true }
  );

  res.status(201).json({ message: "A thread is just updated!", data: updateThread });
}


// delete
async function handleDeleteReplies(req, res) {
  const replyId = req.params.id;

  await Reply.findOneAndDelete({ _id: replyId });

  res.status(201).send("Reply is just deleted");
}

module.exports = { handleCreateReplies, handleGetReplies, handleDeleteReplies };