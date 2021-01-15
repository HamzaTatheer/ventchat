var io = require("socket.io");
var listenersLobby = require("./listenersLobby");
var ventersLobby = require("./ventersLobby");

module.exports = function (socket) {
  listenersLobby(socket);
  ventersLobby(socket);
};
