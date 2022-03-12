const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://mean:mean@cluster0.px2cz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("Connection Failed");
  });

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.post("/api/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  console.log(post);
  res.status(201).json({
    message: "Post Added successfully",
  });
});

app.get("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "asdasfadf233e",
      title: "First Post",
      content: "This is coming from server",
    },
    {
      id: "asd234rewsdg23ew",
      title: "Second Post",
      content: "This is coming from server",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

module.exports = app;
