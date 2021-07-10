var express = require("express");
var socketio = require("socket.io");
var http = require("http");
var pairingSocket = require("../sockets/pairing");
var chatSocket = require("../sockets/chat");

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
    socket.join('hello');
    
    pairingSocket(io,socket);
    chatSocket(io,socket);
  });

  return server;
};
