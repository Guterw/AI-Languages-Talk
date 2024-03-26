// backend/controllers/userController.js
import User from '../models/userModel.js';

// Obtém todos os usuários
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Usa o método findAll() para buscar todos os usuários no banco de dados
    res.json(users);
  } catch (error) {
    console.error('Erro ao obter usuários:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};

// Cria um novo usuário
export const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email }); // Usa o método create() para criar um novo usuário no banco de dados
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};
