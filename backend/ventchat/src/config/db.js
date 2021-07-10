const mongoose = require("mongoose");

module.exports = function () {

  const uri = 'mongodb://root:example@localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
  
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("connected to mongo db"))
    .catch((err) => {
      //throw new Error(err); // used to break program and not run the whole node js server
      console.log(err);
        console.log("error: Could not connect to mongo db")
    });
};