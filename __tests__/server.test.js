const request = require('supertest');
const app = require('src/server');

describe('Node.js App Routes', () => {
  it('GET / should return 200 and contain welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello from EKS');
  });

  it('GET /test should return 200 and contain test message', async () => {
    const response = await request(app).get('/test');
    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Hello from /test Node!');
  });
});