import sequelize from '../config/db.js';
import Users from './Users.js';
import Tables from './Tables.js';
import MenuItems from './MenuItems.js';
import Orders from './Orders.js';
import OrderDetails from './OrderDetails.js';
import Delivery from './Delivery.js';
import Payments from './Payments.js';

// Relaciones
Orders.belongsTo(Tables, { foreignKey: 'tableId' });
Orders.belongsTo(Users, { foreignKey: 'userId' });
OrderDetails.belongsTo(Orders, { foreignKey: 'orderId' });
OrderDetails.belongsTo(MenuItems, { foreignKey: 'menuItemId' });
Delivery.belongsTo(Orders, { foreignKey: 'orderId' });
Payments.belongsTo(Orders, { foreignKey: 'orderId' });

// Función para sincronizar modelos
const syncModels = async () => {
    try {
      await sequelize.sync({ force: true }); // Usar { force: true } solo en desarrollo
      console.log('Modelos sincronizados correctamente');
    } catch (error) {
      console.error('Error al sincronizar modelos:', error);
    }
  };
  
  // Exportar modelos y función de sincronización
  export {
    sequelize,
    Users,
    Tables,
    MenuItems,
    Orders,
    OrderDetails,
    Delivery,
    Payments,
    syncModels,
  };
  