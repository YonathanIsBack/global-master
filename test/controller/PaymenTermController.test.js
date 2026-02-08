import request from 'supertest';
import app from '../../src/index';
import PaymentTerm from '../../src/models/PaymentTerm.js';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('PaymentTermController', () => {
  describe('createPaymentTerm', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/termofpayment/save')
        .field('payment_term_id', '1')
        .field('payment_term_name', '365 Days')
        .field('due_date', '365')
        .field('early_payment_days', '0')
        .field('early_payment_disc', '0')
        .field('isdefault', '')
        .field('ispay', 'on')
        .field('isactive', 'on')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(201);

      const { body } = response;

      expect(body.status).toEqual(201);
      expect(body.message).toEqual('CREATED');
      expect(body.data.payment_term_id).toEqual('1');
    });
  });
  describe('deletePaymentTerm', () => {
    it('should return correct information', async () => {
      await PaymentTerm.create({ paymentTermId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/termofpayment/delete')
        .field('payment_term_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.payment_term_id).toEqual(1);
    });
    it('should return bad request when given improper parameter', async () => {
      await PaymentTerm.create({ paymentTermId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/termofpayment/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;
      expect(body.status).toEqual(404);
      expect(body.message).toEqual('PaymentTerm not found or exist');
    });
  });
  describe('restorePaymentTerm', () => {
    it('should return correct information', async () => {
      await PaymentTerm.create({ paymentTermId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/termofpayment/restore')
        .field('payment_term_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.payment_term_id).toEqual(1);
    });
    it('should return bad request when given improper information', async () => {
      await PaymentTerm.create({ paymentTermId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/termofpayment/restore')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.payment_term_id).toEqual(2);
    });
  });
});
