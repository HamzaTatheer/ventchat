const express = require("express"),
  cors = require("./config/cors"),
  db = require("./config/db"),
  io = require("./config/io"),
  enviorment = require("./config/enviorment"),
  expressjs = require("./config/expressjs");

module.exports = function () {
  //create instance of express app
  const app = express();

  //connect to mongo db
  db();

  //Configure App according to express

  expressjs(app);

  //Allow cross origin access for express

  cors(app);

  //Set up enviorment varaibles

  enviorment();

  //Set up io communication
  let server = io(app);

  //Open port for communication
  server.listen(process.env.PORT || 5000,'192.168.100.4');
  console.log("Server listening on port "+ (process.env.PORT || 5000));
};
