import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Payments = sequelize.define('Payments', {
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
  paymentMethod: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING,
    defaultValue: 'ARS',
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'pendiente',
  },
  date: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  mercadopagoPaymentId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mercadopagoStatus: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mercadopagoResponse: {
    type: DataTypes.JSON,
    allowNull: true,
  },
});

export default Payments;