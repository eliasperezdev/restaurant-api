import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const MenuItems = sequelize.define('MenuItems', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false, //"entrada", "plato principal", "postre", "bebida"
  },
  price: {
    type: DataTypes.DECIMAL,
  },
});

export default MenuItems;