import request from 'supertest';
import app from '../../src/index';
import Bank from '../../src/models/Bank';
import LogAPI from '../../src/models/LogAPI';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());

beforeEach(async () => {
  await initTestDatabase();
});

describe('BankController', () => {
  describe('createBank', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/bank/save')
        .field('bank_id', '1')
        .field('bank_code', 'ID')
        .field('bank_name', 'Indonesia')
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
      expect(body.data.bank_id).toEqual('1');
      expect(log.dataValues.responseCode).toEqual('201');
    });
  });
  describe('restoreBank', () => {
    it('should return correct information', async () => {
      await Bank.create({ bankId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/bank/restore')
        .field('bank_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.bank_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/bank/restore')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;

      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.bank_id).toEqual(1);
    });
  });
  describe('deleteBank', () => {
    it('should return correct information', async () => {
      await Bank.create({ bankId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/bank/delete')
        .field('bank_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.bank_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/bank/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Bank not found or exist');
    });
  });
});
