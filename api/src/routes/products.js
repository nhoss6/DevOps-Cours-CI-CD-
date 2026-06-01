const express = require('express');
const pool = require('../db/pool');
const { getRedis } = require('../db/redis');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const redis = getRedis();
    const cacheKey = 'products:list';

    try {
      if (redis.status !== 'ready') await redis.connect();
      const cached = await redis.get(cacheKey);

      if (cached) {
        return res.json({ source: 'cache', data: JSON.parse(cached) });
      }
    } catch (cacheError) {
      console.warn(JSON.stringify({
        level: 'warn',
        message: 'redis unavailable',
        error: cacheError.message
      }));
    }

    const result = await pool.query(
      'SELECT id, name, description, price_cents, stock FROM products ORDER BY id ASC'
    );

    try {
      await redis.set(cacheKey, JSON.stringify(result.rows), 'EX', 30);
    } catch (error) {
      console.warn(JSON.stringify({
        level: 'warn',
        message: 'redis set failed',
        error: error.message
      }));
    }

    res.json({ source: 'database', data: result.rows });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const result = await pool.query(
      'SELECT id, name, description, price_cents, stock FROM products WHERE id = $1',
      [req.params.id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Product not found' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
