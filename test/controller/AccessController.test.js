import { faker } from '@faker-js/faker';
import request from 'supertest';
import app from '../../src/index';
import Access from '../../src/models/Access.js';
import initTestDatabase from '../config/initTestDatabase.js';

jest.mock('../../src/middleware/authenticationMiddleware.js', () =>
  jest.fn(() => jest.fn((req, res, next) => next()))
);
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());

beforeEach(async () => {
  await initTestDatabase();
});

describe('AccessController', () => {
  describe('create', () => {
    it('should save correctly', async () => {
      const expectedaccess_id = '1';
      const expecteduser_group_id = '1';
      const expectedaction = faker.word.verb();
      const expectedpage_controller = faker.word.noun();
      const expectedcretime = faker.date.anytime().toISOString();
      const expectedcreby = faker.number.int({ min: 0, max: 10 });
      const expectedmodtime = faker.date.anytime().toISOString();
      const expectedmodby = faker.number.int({ min: 0, max: 10 });
      const response = await request(app)
        .post('/master/access/save')
        .field('access_id', expectedaccess_id)
        .field('user_group_id', expecteduser_group_id)
        .field('action', expectedaction)
        .field('page_controller', expectedpage_controller)
        .field('cretime', expectedcretime)
        .field('creby', expectedcreby)
        .field('modtime', expectedmodtime)
        .field('modby', expectedmodby)
        .expect('Content-Type', /json/)
        .expect(201);

      const { body: actualResult } = response;
      const [databaseResult] = await Access.findAll();

      expect(actualResult.status).toEqual(201);
      expect(actualResult.message).toEqual('CREATED');
      const { data: actualData } = actualResult;
      expect(actualData.access_id).toEqual(expectedaccess_id);
      expect(actualData.user_group_id).toEqual(expecteduser_group_id);
      expect(actualData.action).toEqual(expectedaction);
      expect(actualData.page_controller).toEqual(expectedpage_controller);
      expect(actualData.cretime).toEqual(expectedcretime);
      expect(actualData.modtime).toEqual(expectedmodtime);
      expect(databaseResult.dataValues.accessId).toEqual(parseInt(expectedaccess_id));
      expect(databaseResult.dataValues.userGroupId).toEqual(parseInt(expecteduser_group_id));
      expect(databaseResult.dataValues.action).toEqual(expectedaction);
      expect(databaseResult.dataValues.pageController).toEqual(expectedpage_controller);
    });
  });
  describe('restore', () => {});
  describe('delete', () => {});
});
