var express = require("express");
var socketio = require("socket.io");
var http = require("http");
var ventchat = require("../ventchat-socket/ventchat");

module.exports = function (app) {
  const server = http.createServer(app);
  const io = socketio(server);

  io.on("connection", (socket) => {
    console.log("Client connected:" + socket.id);
    ventchat(socket);
  });

  return server;
};
