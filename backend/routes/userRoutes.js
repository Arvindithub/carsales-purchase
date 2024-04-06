// routes/userRoutes.js
import express from 'express';
import { getUsers } from '../controllers/userController.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    await getUsers(req, res);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;