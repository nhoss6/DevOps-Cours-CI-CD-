const client = require('prom-client');

client.collectDefaultMetrics({ prefix: 'trainshop_api_' });

const httpRequestDuration = new client.Histogram({
  name: 'trainshop_http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.05, 0.1, 0.3, 0.5, 1, 2, 5]
});

function metricsMiddleware(req, res, next) {
  const start = process.hrtime();

  res.on('finish', () => {
    const diff = process.hrtime(start);
    const duration = diff[0] + diff[1] / 1e9;

    httpRequestDuration
      .labels(req.method, req.route?.path || req.path, String(res.statusCode))
      .observe(duration);
  });

  next();
}

module.exports = { client, metricsMiddleware };
