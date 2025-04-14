require('dotenv').config();
const express = require("express");
const authenticationRouter = express.Router();
const connection = require("../../data-access/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

authenticationRouter.use(express.json());

authenticationRouter.post('/', (req, res, next) => {
    req.log.debug(req.body);
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).end();
    }
    const query = `SELECT * FROM users where email = "${email}";`
    connection.query(query, (err, dbRes) => {
        if (!err && dbRes.length != 0) {
            const { password: passwordHash } = dbRes[0];
            const isPasswordCorrect = bcrypt.compareSync(password, passwordHash);
            if (isPasswordCorrect) {
                const { id } = dbRes[0];
                const payload = { id };
                const token = jwt.sign(payload, process.env.SECRET_KEY);
                res.send({
                    status: "authentication successful",
                    token
                });
            } else {
                res.status(401).end();
            }
        } else if (err) {
            res.status(500).end();
        } else if (dbRes.length == 0) {
            res.status(403).end();
        }
    });
});

module.exports = authenticationRouter;