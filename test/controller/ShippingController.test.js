import request from 'supertest';
import app from '../../src/index';
import LogAPI from '../../src/models/LogAPI';
import Shipping from '../../src/models/Shipping';
import initTestDatabase from '../config/initTestDatabase';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('ShippingController', () => {
  describe('createShipping', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/shipping/save')
        .field('shipping_id', '1')
        .field('shipping_name', 'SAP Express')
        .field('isactive', 'on')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(201);

      const { body } = response;
      const log = await LogAPI.findByPk(1);

      expect(body.status).toEqual(201);
      expect(body.message).toEqual('CREATED');
      expect(body.data.shipping_id).toEqual('1');
      expect(log.dataValues.responseCode).toEqual('201');
    });
  });
  describe('deleteBank', () => {
    it('should return correct information', async () => {
      await Shipping.create({ shippingId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/shipping/restore')
        .field('shipping_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.shipping_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/shipping/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Shipping not found or exist');
    });
  });
  describe('restoreBank', () => {
    it('should return correct information', async () => {
      await Shipping.create({ shippingId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/shipping/delete')
        .field('shipping_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.shipping_id).toEqual(1);
    });
    it('should return bad request with information', async () => {
      const response = await request(app)
        .post('/master/shipping/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;

      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Shipping not found or exist');
    });
  });
});
