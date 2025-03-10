import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Delivery = sequelize.define('Delivery', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Orders',
      key: 'id',
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numberPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
});

export default Delivery;