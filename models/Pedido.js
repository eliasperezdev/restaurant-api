import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Pedido = sequelize.define('Pedido', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
});

export default Pedido;