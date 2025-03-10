import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const OrderDetails = sequelize.define('OrderDetails', {
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
  menuItemId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'MenuItems',
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  note: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default OrderDetails;