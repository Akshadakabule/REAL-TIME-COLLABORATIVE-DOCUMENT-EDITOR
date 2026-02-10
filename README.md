# REAL-TIME-COLLABORATIVE-DOCUMENT-EDITOR

 *COMPANY*:CODTECH IT SOLUTIONS

*NAME*: AKSHADA KABULE

*INTERN ID* : CTIS2899

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 4 WEEKS

*MENTOR*: NEELA SANTOSH

## Project Description:-
A web based real time collaborative document editor that allows multiple users to edit the same document simultaneously. Any change made by one user is instantly reflected for all connected users, similar to Google Docs but in a simplified form.

## Features:-
- Real-time text synchronization
- Multiple users can edit the same document
- Instant updates without page refresh
- WebSocket-based communication
- Simple and responsive UI

## Technologies Used:-
*Frontend*
- React.js
- HTML5
- CSS3

*Backend*
- Node.js
- Express.js
- Socket.IO

*Communication*
- WebSockets (via Socket.IO)

## How It Works:-
1.Users open the editor in their browser.
2.When a user types in the text area, the updated content is sent to the server using Socket.IO.
3.The server broadcasts the updated document to all connected clients.
4.All users see the changes instantly in real time.

## Project Structure

collab_editor/
│
├── client/        # React frontend
│
├── server/        # Node.js backend
│   ├── server.js
│   ├── package.json
│
└── README.md

## How to Run the Project:-
1. Start the Backend
    cd server
    npm install
    node server.js

 Server will run at: http://localhost:5000
 
2. Start the Frontend
    cd client
    npm install
    npm start
 Frontend will run at: http://localhost:3000

