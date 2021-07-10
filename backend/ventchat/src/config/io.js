var express = require("express");
var socketio = require("socket.io");
var http = require("http");
var paringSocket = require("../sockets/pairing");

module.exports = function (app) {
  const server = http.createServer(app);
  const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });


  io.on("connection", (socket) => {
    console.log("Client connected:" + socket.id);
    paringSocket(socket);
  });

  return server;
};
