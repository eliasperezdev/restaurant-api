import express from 'express';
import {
  getAllTables,
  getTableById,
  createTable,
  updateTable,
  deleteTable,
} from '../controllers/tablesController.js';

const router = express.Router();

// Rutas para Mesas
router.get('/', getAllTables);
router.get('/:id', getTableById);
router.post('/', createTable); //TODO - Agregar middleware para validar que el usuario sea admin
router.put('/:id', updateTable); //TODO - Agregar middleware para validar que el usuario sea admin
router.delete('/:id', deleteTable); //TODO - Agregar middleware para validar que el usuario sea admin

export default router;