const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
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
