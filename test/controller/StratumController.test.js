import request from 'supertest';
import app from '../../src/index';
import Stratum from '../../src/models/Stratum';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('StratumController', () => {
  describe('createStratum', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/stratum/save')
        .field('stratum_id', '1')
        .field('stratum_code', 'EVE')
        .field('stratum_name', 'EVELYN')
        .field('isactive', 'on')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(201);

      const { body } = response;
      expect(body.status).toEqual(201);
      expect(body.message).toEqual('CREATED');
      expect(body.data.stratum_id).toEqual('1');
    });
  });
  describe('deleteStratum', () => {
    it('should return correct information', async () => {
      await Stratum.create({ stratumId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/stratum/restore')
        .field('stratum_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.stratum_id).toEqual(1);
    });
    it('should return bad request when given improper parameter', async () => {
      await Stratum.create({ stratumId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/stratum/restore')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.data.stratum_id).toEqual(2);
    });
  });
  describe('restoreStratum', () => {
    it('should return correct information', async () => {
      await Stratum.create({ stratumId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/stratum/delete')
        .field('stratum_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.stratum_id).toEqual(1);
    });
    it('should return bad request when given improper parameter', async () => {
      await Stratum.create({ stratumId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/stratum/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;
      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Stratum not found or exist');
    });
  });
});
