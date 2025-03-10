import express from 'express';
import { syncModels } from './models/index.js';
import pedidoRoutes from './routes/pedidoRoutes.js';

const app = express();

app.use(express.json());

// Ruta de prueba - eliminar
app.get('/', (req, res) => {
  res.send('API del restaurante funcionando');
});

// Usar rutas
app.use('/api', pedidoRoutes);


// Sincronizar la base de datos y arrancar el servidor
const PORT = process.env.PORT || 3000;
syncModels().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});