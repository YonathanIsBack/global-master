import request from 'supertest';
import Endpoint from '../../src/constants/Endpoint';
import app from '../../src/index';
import initTestDatabase from '../config/initTestDatabase.js';
import SalesmanCommissionBuilder from '../builder/SalesmanBuilder';

jest.mock('../../src/middleware/authenticationMiddleware.js', () => jest.fn(() => jest.fn((req, res, next) => next())));
jest.mock('../../src/util/documentation/swaggerProps.js', () => jest.fn());

beforeEach(async () => {
  await initTestDatabase();
});

describe('SalesmanCommission', () => {
  describe('create', () => {
    it('should save correctly', async () => {
      const salesmanCommission = SalesmanCommissionBuilder.buildDto();

      const response = await request(app)
        .post(Endpoint.SETTING + Endpoint.SALES + Endpoint.SALESMAN_COMMISSION + Endpoint.SAVE)
        .field('salesman_commission_id', salesmanCommission.salesman_commission_id)
        .field('company_parent_id', salesmanCommission.company_parent_id)
        .field('name', salesmanCommission.name)
        .field('salesman_id', salesmanCommission.salesman_id)
        .field('sales_commission', salesmanCommission.sales_commission)
        .field('product_id', salesmanCommission.product_id)
        .field('product_commission', salesmanCommission.product_commission)
        .field('supplier_group_id', salesmanCommission.supplier_group_id)
        .field('supplier_group_commission', salesmanCommission.supplier_group_commission)
        .field('category_id', salesmanCommission.category_id)
        .field('category_commission', salesmanCommission.category_commission)
        .field('isinvoice', salesmanCommission.isinvoice)
        .field('invoice_commission', salesmanCommission.invoice_commission)
        .field('term', salesmanCommission.term)
        .field('term_day', salesmanCommission.term_day)
        .field('term_percent', salesmanCommission.term_percent)
        .field('commission', salesmanCommission.commission)
        .field('value', salesmanCommission.value)
        .field('calculation', salesmanCommission.calculation)
        .expect('Content-Type', /json/)
        .expect(201);

      const { body: actualResult } = response;

      expect(actualResult.status).toEqual(201);
      expect(actualResult.message).toEqual('CREATED');
      expect(salesmanCommission.name).toEqual(actualResult.data.name);
      expect(salesmanCommission.sales_commission).toEqual(actualResult.data.sales_commission);
      expect(salesmanCommission.product_commission).toEqual(actualResult.data.product_commission);
      expect(salesmanCommission.supplier_group_commission).toEqual(actualResult.data.supplier_group_commission);
      expect(salesmanCommission.category_commission).toEqual(actualResult.data.category_commission);
      expect(salesmanCommission.invoice_commission).toEqual(actualResult.data.invoice_commission);
      expect(salesmanCommission.value).toEqual(actualResult.data.value);
    });
  });
  describe('restore', () => {});
  describe('delete', () => {});
});
