import request from 'supertest';
import app from '../../src/index';
import initTestDatabase from '../config/initTestDatabase';
import Location from '../../src/models/Location';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());
beforeEach(async () => {
  await initTestDatabase();
});

describe('LocationController', () => {
  describe('createLocation', () => {
    it('should return correct information', async () => {
      const response = await request(app)
        .post('/master/location/save')
        .field('location_id', '1')
        .field('location_code', 'PS')
        .field('location_name', 'Pasar Kemis')
        .field('isactive', 'on')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(201);

      const { body } = response;
      expect(body.status).toEqual(201);
      expect(body.message).toEqual('CREATED');
      expect(body.data.location_id).toEqual('1');
    });
  });
  describe('deleteLocation', () => {
    it('should return correct information', async () => {
      await Location.create({ locationId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/location/restore')
        .field('location_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('RESTORED');
      expect(body.data.location_id).toEqual(1);
    });
    it('should return bad request when given improper parameter', async () => {
      await Location.create({ locationId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/location/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;
      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Location not found or exist');
    });
  });
  describe('restoreStratum', () => {
    it('should return correct information', async () => {
      await Location.create({ locationId: 1, isdel: 1 });

      const response = await request(app)
        .post('/master/location/delete')
        .field('location_id', '1')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(200);

      const { body } = response;
      expect(body.status).toEqual(200);
      expect(body.message).toEqual('DELETED');
      expect(body.data.location_id).toEqual(1);
    });

    it('should return bad request when given improper parameter', async () => {
      await Location.create({ locationId: 1, isdel: 0 });

      const response = await request(app)
        .post('/master/location/delete')
        .field('user_id', '30')
        .field('user_ip', '192.168.1.100')
        .expect('Content-Type', /json/)
        .expect(404);

      const { body } = response;
      expect(body.status).toEqual(404);
      expect(body.message).toEqual('Location not found or exist');
    });
  });
});
