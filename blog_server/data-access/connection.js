const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "blogs",
  password: "6474268",
  multipleStatements:true
});

module.exports = connection;
