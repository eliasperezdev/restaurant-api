import { MenuItems } from '../models/index.js';

export const getAllMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItems.findAll();
    res.status(200).json(menuItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMenuItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const menuItem = await MenuItems.findByPk(id);

    if (!menuItem) {
      return res.status(404).json({ error: 'Ítem del menú no encontrado' });
    }

    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;

    const existingMenuItem = await MenuItems.findOne({ where: { name } });
    if (existingMenuItem) {
      return res.status(400).json({ error: 'El nombre del ítem ya existe' });
    }

    const newMenuItem = await MenuItems.create({ name, description, price, category, stock });
    res.status(201).json(newMenuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar el stock de un ítem del menú
export const updateMenuItemStock = async (req, res) => {
    try {
      const { id } = req.params;
      const { stock } = req.body;
  
      const menuItem = await MenuItems.findByPk(id);
      if (!menuItem) {
        return res.status(404).json({ error: 'Ítem del menú no encontrado' });
      }
  
      // Actualizar el stock
      await menuItem.update({ stock });
      res.status(200).json(menuItem);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export const updateMenuItem = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, category, stock } = req.body;

    const menuItem = await MenuItems.findByPk(id);
    if (!menuItem) {
      return res.status(404).json({ error: 'Ítem del menú no encontrado' });
    }

    if (name) {
      const existingMenuItem = await MenuItems.findOne({ where: { name } });
      if (existingMenuItem && existingMenuItem.id !== parseInt(id)) {
        return res.status(400).json({ error: 'El nombre del ítem ya existe' });
      }
    }

    await menuItem.update({ name, description, price, category, stock });
    res.status(200).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMenuItem = async (req, res) => {
  try {
    const { id } = req.params;

    const menuItem = await MenuItems.findByPk(id);
    if (!menuItem) {
      return res.status(404).json({ error: 'Ítem del menú no encontrado' });
    }

    await menuItem.destroy();
    res.status(204).json({ message: 'Ítem del menú eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};