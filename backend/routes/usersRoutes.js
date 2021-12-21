import express from 'express';
import { getUsers, registerUser } from '../controllers/userController.js';
import { admin, protect } from '../middlewares/authMiddleWare.js';

const userRoutes = express.Router();

userRoutes.route('/').post(registerUser).get(protect, admin, getUsers);

export default userRoutes;
