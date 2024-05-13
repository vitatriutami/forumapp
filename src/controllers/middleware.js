const Session = require("../models/session.model.js");

async function middleware(req, res, next) {
  const sessionId = req.cookies?.session_id;
  if (!sessionId) {
    return res.send("You don't have access!");
  }

  const session = await Session.findOne({ _id: sessionId });
  if (!session) {
    return res.send(
      "You don't have access!"
    );
  }
  next();
}

module.exports = middleware;