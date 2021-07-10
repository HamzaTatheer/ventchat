//require("./src/app")(); //start application
const Queue = require("./utils/Queue");
const express = require("express");

//create instance of express app
const app = express();



let q = new Queue("testingit");    


q.enqueue("Hello World").then(result => console.log("Message sent. ID:", result))
.catch(err => console.log(err));


setTimeout(()=>{
    q.dequeue().then((value)=>{
        console.log(value);
    })
},2000);


app.listen(3000,()=>{
      console.log("Server listening on port 3000");
})

