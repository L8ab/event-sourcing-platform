class EventStore {
  constructor() {
    this.events = [];
    this.snapshots = new Map();
  }
  
  append(streamId, event) {
    const eventWithMetadata = {
      ...event,
      streamId,
      timestamp: Date.now(),
      version: this.getNextVersion(streamId)
    };
    
    this.events.push(eventWithMetadata);
    return eventWithMetadata;
  }
  
  getEvents(streamId, fromVersion = 0) {
    return this.events.filter(
      e => e.streamId === streamId && e.version >= fromVersion
    );
  }
  
  createSnapshot(streamId, state, version) {
    this.snapshots.set(`${streamId}:${version}`, {
      streamId,
      state,
      version,
      timestamp: Date.now()
    });
  }
  
  getSnapshot(streamId, version) {
    return this.snapshots.get(`${streamId}:${version}`);
  }
  
  getNextVersion(streamId) {
    const events = this.getEvents(streamId);
    return events.length > 0 ? events[events.length - 1].version + 1 : 1;
  }
}

module.exports = new EventStore();
