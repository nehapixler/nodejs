var express = require("express");
var app = express();
const myLogger = function (req, res, next) {
  console.log("LOGGED");
  next();
};
app.use(myLogger);
app.get("/", function (req, res) {
  res.send("Home Page");
});
app.get("/about", function (req, res) {
  res.send("About page");
});
app.get("/login", function (req, res) {
  res.send("login");
});
app.post("/login", function (req, res) {
  res.send("login");
});
const PORT = process.env.PORT || 5000;
app.listen(5000);
