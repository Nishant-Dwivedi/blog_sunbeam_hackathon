const jwt = require("jsonwebtoken");

function AuthMiddleware(req, res, next){
    const {token} = req.headers;
    try{
        const {id} = jwt.verify(token, process.env.SECRET_KEY);
        // populates the req object with an auth property which has the userId on successful authentication of the jwt
        const auth = {
            userId : id
        }
        req.auth = auth;
        next()
    }
    catch(err){
        req.log.error(err)
        res.status(403).end()
    }
  
}

module.exports = AuthMiddleware