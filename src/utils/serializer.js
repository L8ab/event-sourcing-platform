class EventSerializer {
  serialize(event) {
    return JSON.stringify({
      type: event.type,
      data: event.data,
      metadata: event.metadata || {}
    });
  }
  
  deserialize(jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      throw new Error('Invalid event JSON');
    }
  }
  
  validate(event) {
    if (!event.type) {
      throw new Error('Event type is required');
    }
    if (!event.data) {
      throw new Error('Event data is required');
    }
    return true;
  }
}

module.exports = new EventSerializer();
