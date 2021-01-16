//when user joins as listener, we link 2 users and send them to private chat
const Queue = require("../../utils/Queue");
const ventQueueManager = require("./ventQueueManager");
const anonymousChat = require("./anonymousChat");

const isUserLinkPossible = () => {
  return (
    ventQueueManager.isListeneresQueueEmpty() == false &&
    ventQueueManager.isVentersQueueEmpty() == false
  );
};

module.exports = function (socket) {
  socket.on("joinAsListener", function (data) {
    socket.join("listeners");
    socket.emit("QueueLength", ventQueueManager.getListenersQueueLength());
    ventQueueManager.enqueueListener(socket);

    if (isUserLinkPossible() == true) {
      let user1 = ventQueueManager.dequeueListener();
      let user2 = ventQueueManager.dequeueVenter();
      socket.in("listeners").emit("minus");
      socket.to("venters").emit("minus");
      anonymousChat.allow(user1, user2);
      console.log("Connecting together");
    } else {
      console.log("User link not possible");
    }
  });
};
