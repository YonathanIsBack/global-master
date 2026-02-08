import request from 'supertest';
import app from '../../src/index';
import LogAPI from '../../src/models/LogAPI';
import Province from '../../src/models/Province';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('ProvinceController', () => {
  describe('createProvince', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/province/save')
        .field('province_id', '1')
        .field('province_code', 'PS')
        .field('province_name', 'Pasar Kemis')
        .field('country_id', '236')
        .field('isactive', 'on')
        .field('isdel', '0')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(201);

      const { body } = response;
      const log = await LogAPI.findByPk(1);

      expect(body.status).toEqual(201);
      expect(body.message).toEqual('CREATED');
      expect(body.data.province_id).toEqual('1');
      expect(log.dataValues.responseCode).toEqual('201');
    });
  });
  describe('deleteProvince', () => {
    it('should return correct information', async () => {
      await Province.create({ provinceId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/province/restore')
        .field('province_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.province_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/province/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Province not found or exist');
    });
  });
  describe('restoreProvince', () => {
    it('should return correct information', async () => {
      await Province.create({ provinceID: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/province/delete')
        .field('province_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.province_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/province/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Province not found or exist');
    });
  });
});
