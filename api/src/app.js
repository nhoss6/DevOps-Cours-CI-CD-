const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const logger = require('./middleware/logger');
const { client, metricsMiddleware } = require('./metrics');

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(metricsMiddleware);

app.get('/', (req, res) => {
  res.json({
    name: 'TrainShop API',
    version: '1.0.0',
    endpoints: ['/health', '/metrics', '/products', '/orders']
  });
});

app.use('/health', healthRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(JSON.stringify({
    level: 'error',
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack
  }));

  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
