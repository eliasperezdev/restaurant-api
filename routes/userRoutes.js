import express from 'express';
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser,
} from '../controllers/usersController.js';

const router = express.Router();

router.get('/', getAllUsers); //TODO - Agregar middleware para validar que el usuario sea admin
router.get('/:id', getUserById); //TODO - Agregar middleware para validar que el usuario sea admin
router.post('/', createUser); //TODO - Agregar middleware para validar que el usuario sea admin
router.put('/:id', updateUser); //TODO - Agregar middleware para validar que el usuario sea admin
router.delete('/:id', deleteUser); //TODO - Agregar middleware para validar que el usuario sea admin
router.post('/login', loginUser); 

export default router;