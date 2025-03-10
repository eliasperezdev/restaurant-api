import express from 'express';
import { createOrder, getOrder } from '../controllers/pedidoController.js';

const router = express.Router();

router.post('/orders', createOrder);
router.get('/orders', getOrder);

export default router;