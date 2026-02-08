import request from 'supertest';
import app from '../../src/index';
import LogAPI from '../../src/models/LogAPI';
import { Tax } from '../../src/models/Tax.js';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('TaxController', () => {
  describe('createTax', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/tax/save')
        .field('tax_id', '1')
        .field('tax_name', 'PPN99')
        .field('tax_type', 'on')
        .field('percentage', '99')
        .field('note', 'Crazy Rich')
        .field('defaults', 'on')
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
      expect(body.data.tax_id).toEqual('1');
      expect(log.dataValues.responseCode).toEqual('201');
    });
  });
  describe('deleteTax', () => {
    it('should return correct information', async () => {
      await Tax.create({ taxId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/tax/restore')
        .field('tax_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.tax_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/tax/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Tax not found or exist');
    });
  });
  describe('restoreCountry', () => {
    it('should return correct information', async () => {
      await Tax.create({ taxId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/tax/delete')
        .field('tax_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.tax_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/tax/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Tax not found or exist');
    });
  });
});
