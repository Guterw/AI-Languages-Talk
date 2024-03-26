// backend/routes/userRoutes.js
import express from 'express';
const router = express.Router();
import { getAllUsers, createUser } from '../controllers/userController.js';

// Rota para obter todos os usuários
router.get('/users', getAllUsers);

// Rota para criar um novo usuário
router.post('/users', createUser);

export default router;
