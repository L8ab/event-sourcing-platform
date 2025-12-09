const express = require('express');
const eventStore = require('./eventStore');

const app = express();
app.use(express.json());

app.post('/events', (req, res) => {
  const { streamId, event } = req.body;
  const result = eventStore.append(streamId, event);
  res.json(result);
});

app.get('/events/:streamId', (req, res) => {
  const events = eventStore.getEvents(req.params.streamId);
  res.json(events);
});

const PORT = process.env.PORT || 3007;
app.listen(PORT, () => {
  console.log(`Event Sourcing Platform running on port ${PORT}`);
});
