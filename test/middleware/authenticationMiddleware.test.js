import app from '../../src/index.js';
import request from 'supertest';
import initTestDatabase from '../config/initTestDatabase';
import Endpoint from '../../src/constants/Endpoint.js';
beforeEach(async () => {
  await initTestDatabase();
});

describe('AuthenticationMiddleware', () => {
  const register = async () => {
    const responsne = await request(app)
      .post(Endpoint.LOGIN + Endpoint.REGISTER)
      .field('username', 'administrator')
      .field('password', 'administrator')
      .expect(201);
  };
  const getToken = async () => {
    const response = await request(app)
      .post(Endpoint.LOGIN)
      .field('username', 'administrator')
      .field('password', 'administrator')
      .expect(200);

    return response.body.data.user.token;
  };

  it('should succesfully call api when given proper token', async () => {
    await register();
    const token = await getToken();

    const response = await request(app)
      .post(Endpoint.SYSTEM + Endpoint.ACTION + Endpoint.SAVE)
      .set('Authorization', `Bearer ${token}`)
      .field('action_id', '1')
      .expect(201);

    const { body } = response;
    expect(body.status).toEqual(201);
    expect(body.message).toEqual('CREATED');
    const { data } = body;
    expect(data.action_id).toEqual("1");
  });

  it('should return Session not valid. Please check your JWT Token when access without tokenn', async () => {
    const response = await request(app)
      .post(Endpoint.SYSTEM + Endpoint.ACTION + Endpoint.SAVE)
      .field('action_id', '1')
      .expect(401);

    const { body } = response;
    expect(body.status).toEqual(401);
    expect(body.message).toEqual('Session not valid. Please check your JWT Token');
  });

  it('should return Session not valid. Please check your JWT Token when access without tokenn', async () => {
    const response = await request(app)
      .post(Endpoint.SYSTEM + Endpoint.ACTION + Endpoint.SAVE)
      .set('Authorization', 'Bearer')
      .field('action_id', '1')
      .expect(401);

    const { body } = response;
    expect(body.status).toEqual(401);
    expect(body.message).toEqual('JWT Error: jwt must be provided');
  });
});
