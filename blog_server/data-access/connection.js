const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "blogs",
  password: "6474268",
});

module.exports = connection;
