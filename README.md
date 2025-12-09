# Event Sourcing Platform

An event sourcing platform for building event-driven applications.

## Features

- Event store
- Event replay
- Snapshot support
- Projections
- Event serialization

## Tech Stack

- **Language**: Node.js
- **Storage**: In-memory (extensible)

## Project Structure

\`\`\`
event-sourcing-platform/
├── src/
│   ├── eventStore.js    # Event store
│   ├── projection.js    # Projections
│   ├── utils/           # Serializers
│   └── index.js         # API server
└── package.json
\`\`\`

## Usage

\`\`\`bash
npm start
\`\`\`

## API Endpoints

- \`POST /events\` - Append event
- \`GET /events/:streamId\` - Get events

---

**POWERED BY L8AB SYSTEMS**
