import { Tables } from '../models/index.js';

export const getAllTables = async (req, res) => {
  try {
    const tables = await Tables.findAll();
    res.status(200).json(tables);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getTableById = async (req, res) => {
  try {
    const { id } = req.params;
    const table = await Tables.findByPk(id);

    if (!table) {
      return res.status(404).json({ error: 'Mesa no encontrada' });
    }

    res.status(200).json(table);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTable = async (req, res) => {
  try {
    const { number, capacity, status } = req.body;

    const existingTable = await Tables.findOne({ where: { number } });
    if (existingTable) {
      return res.status(400).json({ error: 'El número de mesa ya existe' });
    }

    const newTable = await Tables.create({ number, capacity, status });
    res.status(201).json(newTable);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const updateTable = async (req, res) => {
  try {
    const { id } = req.params;
    const { number, capacity, status } = req.body;

    const table = await Tables.findByPk(id);
    if (!table) {
      return res.status(404).json({ error: 'Mesa no encontrada' });
    }

    if (number) {
      const existingTable = await Tables.findOne({ where: { number } });
      if (existingTable && existingTable.id !== parseInt(id)) {
        return res.status(400).json({ error: 'El número de mesa ya existe' });
      }
    }

    await table.update({ number, capacity, status });
    res.status(200).json(table);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteTable = async (req, res) => {
  try {
    const { id } = req.params;

    const table = await Tables.findByPk(id);
    if (!table) {
      return res.status(404).json({ error: 'Mesa no encontrada' });
    }

    await table.destroy();
    res.status(204).json({ message: 'Mesa eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};