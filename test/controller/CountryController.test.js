import request from 'supertest';
import app from '../../src/index';
import { Country } from '../../src/models/Country.js';
import LogAPI from '../../src/models/LogAPI';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());

beforeEach(async () => {
  await initTestDatabase();
});

describe('CountryController', () => {
  describe('createCountry', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/country/save')
        .field('country_id', '1')
        .field('country_code', 'ID')
        .field('country_name', 'Indonesia')
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
      expect(body.data.country_id).toEqual('1');
      expect(log.dataValues.responseCode).toEqual('201');
    });
  });
  describe('restoreCountry', () => {
    it('should return correct information', async () => {
      await Country.create({ countryId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/country/restore')
        .field('country_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.country_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/country/restore')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.country_id).toEqual(1);
    });
  });
  describe('deleteCountry', () => {
    it('should return correct information', async () => {
      await Country.create({ countryId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/country/delete')
        .field('country_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.country_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/country/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Country not found or exist');
    });
  });
});
