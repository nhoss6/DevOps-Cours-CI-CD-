const express = require('express');
const pool = require('../db/pool');
const { getRedis } = require('../db/redis');

const router = express.Router();

router.get('/', async (req, res) => {
  const checks = { api: 'ok', database: 'unknown', redis: 'unknown' };
  let status = 200;

  try {
    await pool.query('SELECT 1');
    checks.database = 'ok';
  } catch (error) {
    checks.database = 'error';
    status = 503;
  }

  try {
    const redis = getRedis();
    if (redis.status !== 'ready') await redis.connect();
    await redis.ping();
    checks.redis = 'ok';
  } catch (error) {
    checks.redis = 'error';
    status = 503;
  }

  res.status(status).json({
    status: status === 200 ? 'ok' : 'error',
    service: 'trainshop-api',
    checks,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
