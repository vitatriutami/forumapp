const express = require("express");
const authRouter = express();
const authController = require("../controllers/auth.controller.js");

authRouter.post("/login", authController.handleLogin);
authRouter.post("/register", authController.handleRegister);
authRouter.get("/logout", authController.handleLogout);

module.exports = authRouter;