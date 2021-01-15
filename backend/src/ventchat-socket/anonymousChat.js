//defines what attributes are present inside private chat
const ChatUtils = require("../../utils/ChatUtills");
module.exports.allow = function (sock1, sock2) {
  this.start(sock1);
  this.start(sock2);
};
module.exports.disallow = function (sock1, sock2) {};

module.exports.start = function (socket) {
  const room = (sender, reciever) => {
    return ChatUtils.getChatID(sender, reciever);
  };
  console.log("Start");

  socket.on("startAnonymousChat", function (data) {
    //console.log(data);
    data = JSON.parse(data);
    console.log("Connecting with " + data.to);
    //Contact Authenticator Class for chat security
    const from = socket.id;
    const to = data.to ? data.to : "undefined";
    socket.join(room(from, to));

    socket.on("message", function (data) {
      data = JSON.parse(data);
      if (!data) return;

      //      let mydata = JSON.parse(data);
      //      data = mydata;

      const from = socket.id;
      const to = data.to ? data.to : "undefined";
      const message = data.message;
      if (to == undefined) return;
      socket.in(room(from, to)).emit("message", { message: data.message });
    });

    socket.on("endAnonymousChat", function (data) {
      if (!data) return;
      let mydata = JSON.parse(data);
      data = mydata;

      const from = socket.id;
      const to = data.to ? data.to : "undefined";
      socket.leave(room(from, to));
    });
  });
};
