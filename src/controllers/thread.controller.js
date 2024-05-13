require("dotenv").config();
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Thread = require("../models/thread.model.js")
const Session = require("../models/session.model.js")

// cread
async function handleCreateThreads(req, res) {
  const { title, content } = req.body;
  
  const sessionId = req.cookies.session_id;
  if(!sessionId) {
    return res.status(401).json("You don't have access!")
  }
  
  const session = await Session.findById(sessionId)
  if(!session) {
    return res.status(401).json("You don't have access!")
  }

  const newThread = new Thread({
    title,
    content,
    sender: session.userId,
  });
  const savedThread = await newThread.save();
  return res.status(201).json({ message: "A thread is just created!", thread: aNewThread});




}

// read
async function handleGetAllThreads(req, res) {
  const threads = await Thread.find().populate("sender", "email")
  res.status(201).json(threads)
}

async function handleGetAThread(req, res) {
  const { id } = req.params

  try {
    const thread = await Thread.findById(id).populate("sender", "email")
    if(!thread) {
      return res.status(401).json("No thread is found")
    }
    res.status(201).json(thread)
  } catch (error) {
    res.status(501).json("No thread is found")
  }
}

// delete
async function handleDeleteThreads(req, res) {
  const { id } = req.params;

  const sessionId = req.cookies.session_id
  if (!sessionId) {
    return res.status(401).json("You don't have access!")
  }

  const session = await Session.findById(sessionId)
  if(!session) {
    return res.status(401).json("You don't have access!")
  }

  const thread = await Thread.findById(id)
  if(!thread) {
    return res.status(401).json("No thread is found")
  }

  await Thread.findByIdAndDelete(id);
  res.status(201).json("Thread is just deleted")
}

module.exports = { handleCreateThreads, handleGetAllThreads, handleGetAThread, handleDeleteThreads };