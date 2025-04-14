const express = require("express");
const App = express();
const logger = require("pino-http")({
  level: "debug",
  autoLogging: false,
});
const cors = require("cors");
require("dotenv").config();
const BlogsRouter = require("./entry-points/api/Blogs");
const RegisterationRouter = require("./entry-points/api/Registration")
const AuthenticationRouter = require("./entry-points/api/Authentication")
const CategoriesRouter = require("./entry-points/api/Categories")
const MyBlogsRouter = require("./entry-points/api/MyBlogs")

App.use(logger);
App.use(cors());
App.use(express.json());

App.listen(process.env.PORT || 3000, () => {
  console.log("App started on PORT: " + process.env.PORT || 3000);
});


// BLOGS
// GET /blogs -> view all blogs
App.use("/blogs", BlogsRouter);

// MYBLOGS
// GET /myblogs/ -> view blogs created by user: userId(token)
// POST /myblogs/ -> create a blog for user: userId(token)
// UPDATE /myblogs/ -> update blog(token); user-blog
// DELETE /myblogs/:blogId -> delete blog(token)
App.use('/myblogs', MyBlogsRouter)

// CATEGORIES
// GET /categories -> view all categories
// POST /categories -> add category
App.use('/categories', CategoriesRouter)


// REGISTER
// POST /register -> register user
App.use('/register', RegisterationRouter);

// AUTHENTICATE
// POST /auhtenticate -> login
App.use('/authenticate', AuthenticationRouter)

