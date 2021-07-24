var express = require("express");
var socketio = require("socket.io");
var http = require("http");
var pairingSocket = require("../sockets/pairing");
var chatSocket = require("../sockets/chat");
var router = require('socket.io-events')();

const { RateLimiterMemory } = require('rate-limiter-flexible');

const rateLimiter = new RateLimiterMemory({
  points: 5, // 5 points
  duration: 1 // per second
});


module.exports = function (app) {
  const server = http.createServer(app);
  const io = socketio(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  router.on(function (socket, args, next) {

    rateLimiter.consume(socket.id) // consume 1 point per event
    .then(() => {
      next();  
    })
    .catch(rejRes => {
      console.log("spamming events");
    });

  });

  io.use(router);

  io.on("connection", (socket) => {
    console.log("Client connected:" + socket.id);
    pairingSocket(io,socket);
    chatSocket(io,socket);
  });

  return server;
};
