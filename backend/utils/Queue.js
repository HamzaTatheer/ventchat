class Queue {
  // Array is used to implement a Queue
  constructor(getPrintable) {
    this.items = [];
  }

  // enqueue function
  enqueue(element) {
    // adding element to the queue
    this.items.push(element);
  }
  // dequeue function
  dequeue() {
    // removing element from the queue
    // returns underflow when called
    // on empty queue
    if (this.isEmpty()) return "Underflow";
    return this.items.shift();
  }
  // front()
  front() {
    // returns the Front element of
    // the queue without removing it.
    if (this.isEmpty()) return "No elements in Queue";
    return this.items[0];
  }
  // isEmpty()
  isEmpty() {
    // return true if the queue is empty.
    return this.items.length == 0;
  }

  getLength() {
    return this.items.length;
  }

  // printQueue function
  printQueue() {
    var str = "";
    for (var i = 0; i < this.items.length; i++) str += this.items[i].id + " ";
    return str;
  }
}

module.exports = Queue;
