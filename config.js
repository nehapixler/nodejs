var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node",
});
connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log("connected sucessfull");
  }
});
