import request from 'supertest';
import Endpoint from '../../src/constants/Endpoint.js';
import app from '../../src/index';
import LogAPI from '../../src/models/LogAPI.js';
import initTestDatabase from '../config/initTestDatabase.js';
beforeEach(async () => {
  await initTestDatabase();
});

describe('logMiddleware', () => {
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

  it('should save log to database when accessing API', async () => {
    const expectedIpAddress = '127.0.0.1';
    const expectedTime = 1;
    const expectedRtime = 2;
    const expectedCreby = 10;
    await register();
    const token = await getToken();
    const response = await request(app)
      .post(Endpoint.SYSTEM + Endpoint.ACTION + Endpoint.SAVE)
      .set('Authorization', `Bearer ${token}`)
      .field('action_id', '1')
      .field('user_ip', expectedIpAddress)
      .field('time', expectedTime)
      .field('rtime', expectedRtime)
      .field('creby_log', expectedCreby)
      .expect(201);

    const actualResult = await LogAPI.findAll();
    const { dataValues } = actualResult[2];

    expect(dataValues.id).toEqual(3);
    expect(dataValues.uri).toContain(Endpoint.ACTION + Endpoint.SAVE);
    expect(dataValues.method).toEqual('POST');
    expect(dataValues.params).toEqual(
      '{"action_id":"1","user_ip":"127.0.0.1","time":"1","rtime":"2","creby_log":"10"}'
    );
    expect(dataValues.apiKey).toEqual(token.substring(0, 40));
    expect(dataValues.ipAddress).toEqual(expectedIpAddress);
    expect(dataValues.time).toEqual(expectedTime);
    expect(dataValues.rtime).toEqual(expectedRtime);
    expect(JSON.parse(dataValues.authorized)).toEqual(response.body);
    expect(dataValues.responseCode).toContain(response.body.status.toString());
    expect(dataValues.creby).toEqual(expectedCreby.toString());
  });

  it('should save error log when failed to access api', async () => {
    const expectedIpAddress = '127.0.0.1';
    const expectedTime = 1;
    const expectedRtime = 2;
    const expectedCreby = 10;
    const response = await request(app)
      .post(Endpoint.SYSTEM + Endpoint.ACTION + Endpoint.SAVE)
      .set('Authorization', `Bearer `)
      .field('action_id', '1')
      .field('user_ip', expectedIpAddress)
      .field('time', expectedTime)
      .field('rtime', expectedRtime)
      .field('creby_log', expectedCreby)
      .expect(401);

    const actualResult = await LogAPI.findAll();
    const { dataValues } = actualResult[0];

    expect(dataValues.id).toEqual(1);
    expect(dataValues.uri).toContain(Endpoint.ACTION + Endpoint.SAVE);
    expect(dataValues.method).toEqual('POST');
    expect(dataValues.params).toEqual(
      '{"action_id":"1","user_ip":"127.0.0.1","time":"1","rtime":"2","creby_log":"10"}'
    );
    expect(dataValues.apiKey).toEqual('');
    expect(dataValues.ipAddress).toEqual(expectedIpAddress);
    expect(dataValues.time).toEqual(expectedTime);
    expect(dataValues.rtime).toEqual(expectedRtime);
    expect(JSON.parse(dataValues.authorized)).toEqual(response.body);
    expect(dataValues.responseCode).toContain(response.body.status.toString());
    expect(dataValues.creby).toEqual(expectedCreby.toString());
  });
});
