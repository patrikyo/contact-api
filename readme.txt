# Contact API

A simple REST API for managing contacts.

## Requirements

- Node.js v18 or later
- npm

## Installation

Install dependencies:
```
npm install
```

## Build

Compile TypeScript:
```
npx tsc
```

## Run

Start the web server:
```
node dist/app.js
```

## API Endpoints

- `POST /api/contacts` — Create a new contact
- `GET /api/contacts/:id` — Get a contact by ID
- `PUT /api/contacts/:id` — Update a contact
- `DELETE /api/contacts/:id` — Delete a contact

## Example Request

```
POST /api/contacts
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123456789",
  "message": "Hello!"
}
```