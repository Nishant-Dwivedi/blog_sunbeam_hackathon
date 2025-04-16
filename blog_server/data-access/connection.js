const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "blogs",
  password: "",//TODO
  multipleStatements:true
});

module.exports = connection;
