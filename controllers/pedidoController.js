import Orders from '../models/Orders.js';

export const createOrder = async (req, res) => {
  try {
    const order = await Orders.create(req.body);
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getOrder = async (req, res) => {
  try {
    const orders = await Orders.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};