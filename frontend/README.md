# Netflix Login Clone

This is a simple clone of the Netflix login page built for an assignment. It uses React for the frontend and Express.js for the backend.

## Features
- UI that looks like the Netflix login page.
- Created with React and Vite.
- Styling is done with Tailwind CSS.
- Basic frontend form validation.
- Connects to an Express backend to verify login credentials.

## How to run the project

You need to run both the frontend and backend servers.

### 1. Run the Backend
1. Open a terminal and go to the `backend` folder.
2. Run `npm install` (if you haven't already).
3. Run `node server.js` to start the backend server on port 5000.

### 2. Run the Frontend
1. Open a new terminal and go to the `frontend` folder.
2. Run `npm install` (if you haven't already).
3. Run `npm run dev` to start the frontend server on port 3000.
4. Open your browser and go to `http://localhost:3000`.

## Testing the Login
- Use the following credentials to test a successful login:
  - **Email:** `karthi@gmail.com`
  - **Password:** `123`
- If you use the correct login, you will be taken to a dummy dashboard page.
- If you leave the fields empty or type the wrong info, it will show an error.
