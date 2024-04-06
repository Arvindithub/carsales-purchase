// server.mjs
import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './config/db.js'; // Adjust the path as needed

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Your routes and other server configurations here...

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});