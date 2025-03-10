import express from 'express';
import { syncModels } from './models/index.js';
import tablesRoutes from './routes/tableRoutes.js';
import menuItemsRoutes from './routes/menuItemRoutes.js'; 
import usersRoutes from './routes/userRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/tables', tablesRoutes);
app.use('/api/menu-items', menuItemsRoutes);
app.use('/api/users', usersRoutes);


// Sincronizar la base de datos y arrancar el servidor
const PORT = process.env.PORT || 3000;
syncModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});