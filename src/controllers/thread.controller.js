require("dotenv").config();
const Thread = require("../models/thread.model.js");
// const Session = require("../models/session.model.js");


// create
async function handleCreateThreads(req, res) {
  const { title, content, userId } = req.body;

  const newThread = new Thread({
    title,
    content,
    userId,
  });
  const saveThread = await newThread.save();
  return res.status(201).json({ message: "A thread is just created!", data: saveThread });
}

// read
async function handleGetAllThreads(req, res) {
  const allThreads = await Thread.find().populate("userId");
  res.status(201).json({ message: "This is all threads", data: allThreads });
}

async function handleGetAThread(req, res) {
  const threadId = req.params.id;

  try {
    const aThread = await Thread.findById(threadId).populate("userId");
    if (!aThread) {
      return res.status(401).json("No thread is found");
    }
    res.status(201).json(aThread);
  } catch (error) {
    res.status(401).json("No thread is found");
  }

}

// update
async function handleUpdateThreads(req, res) {
  const { title, content, userId } = req.body;

  const threadId = req.params.id;

  const updateThread = await Thread.findOneAndUpdate(
    { _id: threadId },
    { title, content, userId },
    { new: true }
  );

  res.status(201).json({ message: "A thread is just updated!", data: updateThread });
}


// delete
async function handleDeleteThreads(req, res) {
  const threadId = req.params.id;

  await Thread.findByIdAndDelete(id);
  res.status(201).json("A thread is just deleted");
}

module.exports = { handleCreateThreads, handleGetAllThreads, handleGetAThread, handleUpdateThreads, handleDeleteThreads };