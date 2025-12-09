const eventStore = require('./eventStore');

class Projection {
  constructor(name, handler) {
    this.name = name;
    this.handler = handler;
    this.state = {};
  }
  
  processEvents(streamId, fromVersion = 0) {
    const events = eventStore.getEvents(streamId, fromVersion);
    
    for (const event of events) {
      this.handler(this.state, event);
    }
    
    return this.state;
  }
  
  getState() {
    return this.state;
  }
}

module.exports = Projection;
