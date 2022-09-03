const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const connection = mysql.createConnection({
  host: "gourmandmiami.com",
  user: "",
  password: "",
  database: "tech_forum",
});

const q = "SHOW TABLES";

connection.query(q, (err, res, fields) => {
  if (err) throw err;

  console.log(res);
});

app.listen(8080, () => console.log("App listening on port 8080!"));
