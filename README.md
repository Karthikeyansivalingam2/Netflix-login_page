# Week 11: Netflix Login Page Clone

This project replicates the Netflix login page with a React frontend and a Node.js with Express backend to meet the assignment requirements.

## What is inside:
1. **Frontend Folder (`/frontend`)**: Developed with React and Vite. UI styled with Tailwind CSS to match the Netflix dark theme. Handles basic validation and communicates with the backend API.
2. **Backend Folder (`/backend`)**: A very simple Node.js Express server to handle login requests and check credentials without needing a real database.

## How to test the project

**Step 1: Start the backend server**
1. Open a terminal.
2. Go into the backend folder: `cd backend`
3. If this is the first time, run: `npm install`
4. Start the server: `node server.js`

**Step 2: Start the frontend website**
1. Open a second terminal window.
2. Go into the frontend folder: `cd frontend`
3. If this is the first time, run: `npm install`
4. Start the server: `npm run dev`
5. Open up `http://localhost:3000` in your web browser.

## Login Details
Because there is no real database, you must test the login using these hard-coded mock credentials:
* **Email:** `karthi@gmail.com`
* **Password:** `123`

If login is correct, you are taken to the Dashboard page! If it's wrong or empty, it throws an error warning.
