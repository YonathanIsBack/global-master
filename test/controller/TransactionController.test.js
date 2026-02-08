import request from 'supertest';
import app from '../../src/index';
import LogAPI from '../../src/models/LogAPI';
import Transaction from '../../src/models/Transaction.js';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('TransactionController', () => {
  describe('createTransaction', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/transaction/save')
        .field('no_transaction_id', '1')
        .field('no_transaction_name', 'SEND MEMORY')
        .field('no_transaction_prefix', 'PIS')
        .field('digit', '5')
        .field('reset_time', '1')
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
      expect(body.data.no_transaction_id).toEqual('1');
      expect(log.dataValues.responseCode).toEqual('201');
    });
  });
});
