const express = require("express");
const App = express();
const logger = require("pino-http")({
  level:'debug',
  autoLogging:false
});
const cors = require("cors");
require('dotenv').config();

App.use(logger);
App.use(cors());
App.use(express.json());

App.listen(process.env.PORT || 3000, () => {
  console.log("App started on PORT: " + process.env.PORT || 3000);
});


App.get('/', (req, res) => {
  // todo
  res.end();
})