import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Tables = sequelize.define('Tables', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: true,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'Libre', //Libre / ocupada
  },
});

export default Tables;