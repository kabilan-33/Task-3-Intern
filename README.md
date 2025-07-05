# Task-3-Intern📝 Real-Time Collaborative Document Editor
CodTech Internship — Task 3

📌 Task Objective
This project is part of the Full Stack Development Internship at CodTech.
Goal:
✅ Build a real-time collaborative text editor that allows multiple users to edit a shared document simultaneously.

🧠 What This App Does
✨ Provides a web-based text editor where changes sync live across multiple connected clients

🔗 Uses Socket.IO for real-time communication between frontend and backend

🗃️ Maintains shared document state on the server

🖥️ Renders a simple, responsive React UI

🔧 Tech Stack
Layer	Technology
Frontend	React.js
Backend	Node.js + Express + Socket.IO
Deployment	Localhost (React app & Node server)

📂 Folder Structure
pgsql
Copy
Edit
collab-editor/
├── server/
│   ├── index.js               --> Main Node server with Socket.IO
│   ├── socketHandler.js       --> Modular socket event handler
│   └── package.json           --> Server package manifest
└── client/
    ├── src/
    │   └── App.js             --> React collaborative editor component
    └── package.json           --> React app manifest
🚀 How to Build & Run Locally
✅ Step 1: Run the Backend (Socket.IO Server)
From your project folder:

bash
Copy
Edit
cd server
npm install
npm start
You should see:

arduino
Copy
Edit
🚀 Server running on port 4000
✅ Step 2: Run the React Frontend
In a second terminal:

bash
Copy
Edit
cd client
npm install
npm start
Then open your browser at http://localhost:3000.

✅ Step 3: Test Real-Time Collaboration

Open the React app in two or more browser tabs/windows

Type in the textarea → see changes instantly sync across all open tabs

⚙️ How It Works
When a client connects, the server sends the current shared document via the load event.

When a user edits the text, the client emits an edit event → server updates the shared content → broadcasts updated text to all other clients with update.

The client listens for load and update events to sync the textarea content in real time.

📝 Example Logs from Server
When a client connects:

arduino
Copy
Edit
📡 Client connected: F5nG123abc
When a user edits the text:

csharp
Copy
Edit
✏️ Edit received from F5nG123abc: Hello, this is my collaborative editor...
When a client disconnects:

arduino
Copy
Edit
❌ Client disconnected: F5nG123abc
🙌 Completed By
Intern Name: Kabilan.M

Internship: CodTech – Full Stack Development

Task: Task 3 – Real-Time Collaborative Document Editor

Status: ✅ Completed

📚 About
This project demonstrates a minimal, functional implementation of a collaborative document editor — a common feature in productivity tools like Google Docs — using modern web technologies and real-time communication.

🔗 Resources
React Documentation

Express Documentation

Socket.IO Documentation

