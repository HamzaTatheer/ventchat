const express = require("express"),
  cors = require("./config/cors"),
  io = require("./config/io"),
  enviorment = require("./config/enviorment"),
  expressjs = require("./config/expressjs");

module.exports = function () {
  //create instance of express app
  const app = express();

  //Configure App according to express

  expressjs(app);

  //Allow cross origin access for express

  cors(app);

  //Set up enviorment varaibles

  enviorment();

  //Set up io communication

  let server = io(app);
  server.listen(process.env.PORT || 5000);
  console.log("Server listening on port "+ (process.env.PORT || 5000));
};
