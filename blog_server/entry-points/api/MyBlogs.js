const connection = require("../../data-access/connection");
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const myBlogs = require("express").Router()

myBlogs.use(AuthMiddleware);

// GET
myBlogs.get('/', (req, res) => {
    const { userId: id } = req.auth;
    const query = `SELECT * from blogs where id in (select blog_id from user_blog where user_id = ${id});`
    connection.query(query, (err, dbRes) => {
        if (!err) {
            req.log.info(dbRes);
            res.send(dbRes);
        }
        else {
            req.log.error(err);
            res.send(500).end()
        }
    })
})

// POST
myBlogs.post('/', (req, res) => {
    const{userId: id} = req.auth;
    const {title, contents} = req.body;
    if(!title || !contents){
        res.status(400).end()
    }
    
    res.end()
})

module.exports = myBlogs