const request = require('supertest');
const app = require('../src/app');

jest.mock('../src/db/pool', () => ({
  query: jest.fn().mockResolvedValue({ rows: [{ ok: 1 }] })
}));

jest.mock('../src/db/redis', () => ({
  getRedis: () => ({
    status: 'ready',
    connect: jest.fn().mockResolvedValue(),
    ping: jest.fn().mockResolvedValue('PONG')
  })
}));

describe('Health endpoint', () => {
  it('returns API health status', async () => {
    const response = await request(app).get('/health');

    expect(response.status).toBe(200);
    expect(response.body.status).toBe('ok');
    expect(response.body.service).toBe('trainshop-api');
  });
});
