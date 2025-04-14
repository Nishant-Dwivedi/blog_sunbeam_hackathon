const express = require("express");
const registerationRouter = express.Router();
const bcrypt = require("bcrypt");
const connection = require("../../data-access/connection");

registerationRouter.use(express.json());
registerationRouter.post('/', (req, res, next) => {
    req.log.debug(req.body);
    const { email, password, full_name, phone_no } = req.body;
    if (!email || !password || !full_name || !phone_no) {
        res.status(400).end();
    }
    const hashedPass = bcrypt.hashSync(password, 10);
    const query = `INSERT INTO users(email, password, full_name, phone_no) VALUES("${email}", "${hashedPass}", "${full_name}", "${phone_no}")`;

    connection.query(query, (err, dbRes) => {
        if (!err) {
            req.log.info(dbRes)
            res.send(dbRes);
        } else {
            req.log.error(err)
            res.status(500).end();
        }
    });
});

module.exports = registerationRouter;