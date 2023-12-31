const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");
const Post = require("./models/Post");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const uploadMiddleware = multer({ dest: "uploads/" });
const fs = require("fs");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());
//set static(public) folder
app.use("/uploads", express.static(__dirname + "/uploads"))


//Database Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

app.get("/", (req, res) => {
  res.send("<h1>'This a ReSTful for SE NPRU Blog'</h1>");
});

app.get("/posts", async (req, res) => {
  res.json(
    await Post.find()
      .populate("author", ["username"])
      .sort({ createdAr: -1 })
      .limit(20)
  );
});

//User Register
const salt = bcrypt.genSaltSync(10);
app.post("/register", async (req, res) => {
  const { username, password } = req.body; //resac
  try {
    const userDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
});

//User login
const secret = process.env.SECRET;
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const userDoc = await User.findOne({ username });
  const isMatchedPassword = bcrypt.compareSync(password, userDoc.password);
  if (isMatchedPassword) {
    //logged in
    jwt.sign({ username, id: userDoc }, secret, {}, (err, token) => {
      if (err) throw err;
      //Save data in cookie
      res.cookie("token", token).json({
        id: userDoc.id,
        username,
      });
    });
  } else {
    res.status(400).json("wrong credentials");
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json("ok");
});

//Create Post
app.post("/post", uploadMiddleware.single("file"), async (req, res) => {
  const { originalname, path } = req.file;
  const parts = originalname.split(".");
  const ext = parts[parts.length - 1];
  const newPath = path + "." + ext;
  fs.renameSync(path, newPath);
  const { token } = req.cookies;
  jwt.verify(token, secret, async (err, info) => {
    if (err) throw err;
    const { title, summary, content } = req.body;
    const postDoc = await Post.create({
      title,
      summary,
      content,
      cover: newPath,
      author: info.id,
    });
    res.json(postDoc);
  });
});

const POST = process.env.POST;
app.listen(POST, () => {
  console.log("Server is running on http://localhost:" + POST);
});
