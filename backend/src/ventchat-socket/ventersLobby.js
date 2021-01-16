//when user joins as venter, we link 2 users and send them to private chat
const Queue = require("../../utils/Queue");
const ventQueueManager = require("./ventQueueManager");
const anonymousChat = require("./anonymousChat");

const isUserLinkPossible = () => {
  let val1 = ventQueueManager.isListeneresQueueEmpty();
  let val2 = ventQueueManager.isVentersQueueEmpty();
  console.log(val1);
  console.log(val2);
  return val1 == false && val2 == false;
};

module.exports = function (socket) {
  socket.on("joinAsVenter", function (data) {
    //additional check needed to ensure that User does not join with same socket

    socket.join("venters");
    socket.emit("QueueLength", ventQueueManager.getVentersQueueLength());
    ventQueueManager.enqueueVenter(socket);

    if (isUserLinkPossible() == true) {
      let user1 = ventQueueManager.dequeueListener();
      let user2 = ventQueueManager.dequeueVenter();
      socket.in("venters").emit("minus");
      socket.to("listeners").emit("minus");
      anonymousChat.allow(user1, user2);
      console.log("Connecting together");
    } else {
      console.log("User link not possible");
    }
  });
};
