const categoriesRouter = require("express").Router();
const connection = require("../../data-access/connection")

// GET
categoriesRouter.get('/', (req, res) => {
    const query = `SELECT * FROM categories;`
    connection.query(query, (err, dbRes) => {
        if (!err) {
            req.log.info(dbRes)
            res.send(dbRes);
        }
        else {
            req.log.error(err);
            res.status(500).end()
        }
    })
})

// POST
categoriesRouter.post('/', (req, res) => {
    const { title, description } = req.body;
    const query = `insert into categories(title, description) values("${title}", "${description}");`
    connection.query(query, (err, dbRes) => {
        if (!err) {
            req.log.info(dbRes)
            res.send(dbRes)
        }
        else {
            req.log.error(err);
            res.status(500).end()
        }
    })
})

module.exports = categoriesRouter