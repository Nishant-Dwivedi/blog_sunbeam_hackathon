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
    const { userId: id } = req.auth;
    const { title, contents, category_id } = req.body;
    if (!title || !contents || !category_id) {
        res.status(400).end()
    }
    // TRANSACTION
    // insert blog
    // fetch the blog id (auto incremented) and add it to user_blog
    // add the blog id (auto incremented) and add it to category_blog
    const query = `
START TRANSACTION;
INSERT INTO blogs(title, contents) VALUES (?, ?);
SET @blog_id = LAST_INSERT_ID();
INSERT INTO user_blog(user_id, blog_id) VALUES (?, @blog_id);
INSERT INTO blog_category(blog_id, category_id) VALUES (@blog_id, ?);
COMMIT;
`;

    connection.query(query, [title, contents, id, category_id], (err, dbRes) => {
        if (!err) {
            req.log.info(dbRes)
            res.send(dbRes)
        }
        else {
            req.log.error(err)
            res.status(500).end();
        }
    })
})

// UPDATE
myBlogs.put('/', (req, res) => {
    const { userId: id } = req.auth;
    const { title, contents, category_id, blog_id } = req.body;
    if (!title || !contents || !category_id || !blog_id) {
        res.status(400).end();
    }

    // fetch the user id associated with blog_id

    const queryGetUserId = `SELECT user_id from user_blog where blog_id=${blog_id};`
    connection.query(queryGetUserId, (err, dbRes) => {
        if (!err) {
            const { user_id: userIdInDb } = dbRes[0];
            if (id == userIdInDb) {
                // TRANSACTION
                // if this user_id matches the user_id in the req_payload, update the 
                // category id and the blog content
                const queryUpdateBlog = `START TRANSACTION;
                UPDATE blogs SET title=?, contents=? where id=?;
                UPDATE blog_category SET category_id=? where blog_id=?;
                COMMIT;
                `
                connection.query(queryUpdateBlog, [title, contents, blog_id, category_id, blog_id], (err, dbRes) => {
                    if(!err){
                        req.log.info(dbRes)
                        res.send(dbRes)
                    }
                    else{
                        req.log.error(err)
                        res.status(500).end();
                    }
                })
            }
            else {
                res.status(401).send()
            }
        }
        else {
            res.status(500).end()
        }
    })
})

// DELETE
myBlogs.delete('/:blogId', (req, res) =>{
    const {userId} = req.auth;
    const blog_id = req.params.blogId;
    const queryGetUserId = `SELECT user_id from user_blog where blog_id=${blog_id};`
    connection.query(queryGetUserId, (err, dbRes) => {
        if(!err){
            const{user_id : userIdInDb} = dbRes[0];
            if(userIdInDb == userId){
                // delete the blog
                const queryDeleteBlog = `DELETE from blogs where id = ${blog_id};`;
                connection.query(queryDeleteBlog, (err, dbRes) => {
                    if(!err){
                        req.log.info(dbRes)
                        res.send(dbRes);
                    }
                    else{
                        req.log.error(err)
                        res.status(500).end();
                    }
                })
            }
            else{
                res.status(401).end()
            }
        }
        else{
            res.status(500).end();
        }
    })
})

module.exports = myBlogs