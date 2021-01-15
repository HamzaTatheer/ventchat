let QueuesInstance = require("./QueuesSingleton");
let ventersQueue = QueuesInstance.getVentersQueue();
let listenersQueue = QueuesInstance.getListenersQueue();

module.exports.enqueueVenter = (sock) => {
  ventersQueue.enqueue(sock);
};

module.exports.enqueueListener = (sock) => {
  listenersQueue.enqueue(sock);
};
module.exports.dequeueVenter = () => {
  return ventersQueue.dequeue();
};
module.exports.dequeueListener = () => {
  return listenersQueue.dequeue();
};

module.exports.isVentersQueueEmpty = () => {
  console.log(ventersQueue.printQueue());
  return ventersQueue.isEmpty();
};
module.exports.isListeneresQueueEmpty = () => {
  console.log(listenersQueue.printQueue());
  return listenersQueue.isEmpty();
};
