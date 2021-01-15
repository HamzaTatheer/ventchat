//return queue as singlton
const Queue = require("../../utils/Queue");
var VentersQueue;
var listenersQueue;

getVentersQueue = () => {
  if (VentersQueue == null) VentersQueue = new Queue();

  return VentersQueue;
};

getListenersQueue = () => {
  if (listenersQueue == null) listenersQueue = new Queue();

  return listenersQueue;
};

module.exports.getVentersQueue = getVentersQueue;
module.exports.getListenersQueue = getListenersQueue;
