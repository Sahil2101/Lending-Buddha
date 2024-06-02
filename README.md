# Lending Buddha Full Stack Application

## Setup

1. **Backend**:
    - Install dependencies: `npm install`
    - Start the server: `node server.js`
    - Ensure MongoDB is running locally

2. **Frontend**:
    - Install dependencies: `npm install`
    - Start the application: `npm start`

## API Endpoints

- `POST /register`: Register a new user
- `POST /login`: Login user and return JWT token
- `POST /users`: Create a new user (protected)
- `GET /users`: Get all users (protected)
- `PUT /users/:id`: Update a user by ID (protected)
- `DELETE /users/:id`: Delete a user by ID (protected)

## Usage

1. Register a new user through the `/register` endpoint.
2. Login with the registered user credentials to get a JWT token.
3. Use the token to access protected endpoints.

## Frontend

- The frontend form allows you to create a user and displays all users from the database.
- Make sure to update the backend URL in the frontend code if needed.
