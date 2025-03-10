import express from 'express';
import {
  getAllMenuItems,
  getMenuItemById,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
  updateMenuItemStock
} from '../controllers/menuItemsController.js';

const router = express.Router();

router.get('/', getAllMenuItems);
router.get('/:id', getMenuItemById);
router.post('/', createMenuItem); //TODO - Agregar middleware para validar que el usuario sea admin
router.put('/:id', updateMenuItem);  //TODO - Agregar middleware para validar que el usuario sea admin
router.delete('/:id', deleteMenuItem);  //TODO - Agregar middleware para validar que el usuario sea admin
router.put('/:id/stock', updateMenuItemStock); //TODO - Agregar middleware para validar que el usuario sea admin
export default router;