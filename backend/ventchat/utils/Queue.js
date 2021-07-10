const RSMQPromise = require("rsmq-promise");

class Queue {
  // Array is used to implement a Queue
  constructor(name) {
    this.rsmq = new RSMQPromise({
      host: "127.0.0.1", 
      port: 6379
    });
    
    this.name = name;
  }

  // enqueue function
  enqueue(element) {
    return this.rsmq.sendMessage({ qname: this.name, message:element });
  }
  // dequeue function
  async dequeue() {
    let answer;
    await this.rsmq.receiveMessage({qname: this.name}).then((result)=>{
      answer = result;
      console.log("inside dq:"+answer);
    })
    return answer;
  }
 
  // isEmpty()
  async isEmpty() {
    let isEmpty = true;
    
    await this.rsmq.getQueueAttributes({qname:this.name}).then((result)=>{
      if(result.msgs == 0)
        isEmpty =false;
    });
    
    return isEmpty;
  }

  async getLength() {
    let length = 0;
    
    await this.rsmq.getQueueAttributes({qname:this.name}).then((result)=>{
      length = result.msgs;
    });

    return isEmpty;
  }

  // printQueue function
  printQueue() {
    print("Empty");
  }
}

module.exports = Queue;
