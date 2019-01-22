var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
  var thing = req.params.thing;
  res.render("love.ejs", { thingVar: thing });
});

app.get("/posts", function(req, res) {
  var posts = [
    { title: "Post 1", author: "Nic" },
    { title: "Post 2", author: "Alex" },
    { title: "Post 3", author: "Charlie" }
  ];
  res.render("post.ejs", { posts: posts });
});

app.listen(5500, function() {
  console.log("server is running!");
});
