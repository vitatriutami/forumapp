require("dotenv").config();
const User = require("../models/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function handleLogin(req, res) {
  const { email, password } = req.body;

  // 1. Cari user berdasarkan email
  // 2. Cocokkan password user
  // 3. Buat payload/body untuk token
  // 4. Generate token
  // 5. Set token ke cookie user


  // 1. Cari user berdasarkan email
  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ message: "Account is not found" });

  // 2. Cocokkan password user
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) res.status(403).json({ message: "Invalid password" });


  // 3. Buat payload/body untuk token
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };

  // 4. Generate token
  const token = jwt.sign(payload, process.env.JWT_SECRET);

  // 5. Set token ke cookie user
  res.cookie("token", token).send("Login success!");
}

async function handleRegister(req, res) {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });
  const user = await newUser.save();

  res.status(201).json({ message: "User register success", data: user });
}

async function handleLogout(req, res) {
  // delete session from DB
  const session_id = req.cookies?.session_id

  await Session.findByIdAndDelete(session_id)

  return res.send("Logged out successfully!")

}

module.exports = { handleLogin, handleRegister };