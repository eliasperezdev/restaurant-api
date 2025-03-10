import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Orders = sequelize.define('Orders', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tableId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Tables',
      key: 'id',
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'Users',
      key: 'id',
    },
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  type: {
    type: DataTypes.STRING,
    defaultValue: 'local',
  },
});

export default Orders;