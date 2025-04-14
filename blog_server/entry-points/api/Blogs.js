const Blogs = require("express").Router();
const connection = require("../../data-access/connection");

// GET all blogs
Blogs.get("", (req, res) => {
    console.log("GET: /blogs");
    const query = `SELECT * FROM blogs;`;
    connection.query(query, (err, dbRes) => {
        if (!err && dbRes.length != 0) {
            req.log.info(dbRes);
            res.send(dbRes);
        }
        else {
            req.log.error(err);
            res.status(500).end();
        }
    });
});

module.exports = Blogs;
