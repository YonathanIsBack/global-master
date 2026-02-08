import request from 'supertest';
import app from '../../src/index';
import Currency from '../../src/models/Currency';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('CurrencyController', () => {
  describe('createCurrency', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/currency/save')
        .field('currency_id', '1')
        .field('currency_code', 'IDR')
        .field('currency_name', 'Rupiah')
        .field('currency_symbol', 'Rp')
        .field('country_id', '1')
        .field('isactive', 'on')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(201);

      const { body } = response;
      expect(body.status).toEqual(201);
      expect(body.message).toEqual('CREATED');
      expect(body.data.currency_id).toEqual('1');
    });
    it('should return correct information when given empty id', async () => {
      const response = await request(app)
        .post('/master/currency/save')
        .field('currency_code', 'IDR')
        .field('currency_name', 'Rupiah')
        .field('currency_symbol', 'Rp')
        .field('country_id', '1')
        .field('isactive', 'on')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(400);

      const { body } = response;

      expect(body.status).toEqual(400);
      expect(body.message).toEqual('Validation Failed');
    });
  });
  describe('deleteCurrency', () => {
    it('should return correct information', async () => {
      await Currency.create({ currencyId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/currency/delete')
        .field('currency_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.currency_id).toEqual(1);
    });
  });
  describe('restoreCurrency', () => {
    it('should return correct information', async () => {
      await Currency.create({ currencyId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/currency/restore')
        .field('currency_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.currency_id).toEqual(1);
    });
  });
});
