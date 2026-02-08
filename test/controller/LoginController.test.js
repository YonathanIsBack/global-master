import request from 'supertest';
import Endpoint from '../../src/constants/Endpoint.js';
import app from '../../src/index.js';
import initTestDatabase from '../config/initTestDatabase';
beforeEach(async () => {
  await initTestDatabase();
});

const register = async () => {
  const responsne = await request(app)
    .post(Endpoint.LOGIN + Endpoint.REGISTER)
    .field('username', 'administrator')
    .field('password', 'administrator')
    .expect(201);
};
describe('LoginController', () => {
  describe('login', () => {
    it('should return username and jwt token when success', async () => {
      await register();
      const response = await request(app)
        .post('/auth')
        .field('username', 'administrator')
        .field('password', 'administrator')
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('LOGIN');
      const { data } = body;
      expect(data.user.username).toEqual('administrator');
    });
    it('should return unauthorized and message user not valid when given invalid user', async () => {
      await register();
      const response = await request(app)
        .post('/auth')
        .field('username', 'admiistrator')
        .field('password', 'admiistrator')
        .expect(401);

      const { body } = response;
      expect(body.status).toEqual(401);
      expect(body.message).toEqual('User not valid');
    });
  });
});
