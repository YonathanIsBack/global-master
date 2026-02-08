import request from 'supertest';
import app from '../../src/index';
import initTestDatabase from "../config/initTestDatabase.js";
import Endpoint from '../../src/constants/Endpoint.js';
import Periode from '../../src/models/Periode.js';
import StCurrencyRate from '../../src/models/StCurrencyRate.js';
import StCurrencyRateDetail from '../../src/models/StCurrencyRateDetail.js';

const register = async () => {
  await request(app)
    .post(Endpoint.LOGIN + Endpoint.REGISTER)
    .field('username', 'administrator')
    .field('password', 'administrator')
    .expect(201);
};

beforeEach(async () => {
  await initTestDatabase();
  await register();
});

describe('sanitationMiddleware', () => {
  const getToken = async () => {
    const response = await request(app)
      .post(Endpoint.LOGIN)
      .field('username', 'administrator')
      .field('password', 'administrator')
      .expect(200);

    return response.body.data.user.token;
  };

  it('should sanitize request body', async () => {
    const token = await getToken();
    const response = await request(app)
      .post(Endpoint.ACCOUNTING + Endpoint.SETTING + Endpoint.PERIODE + Endpoint.SAVE)
      .set('Authorization', `Bearer ${token}`)
      .field('periode_id', '1')
      .field('periode_name', 'Testing Periode')
      .field('start_periode', '0000-00-00')
      .field('end_periode', '')
      .expect(201);

    const actualResult = await Periode.findAll();
    const { dataValues } = actualResult[0];

    expect(dataValues.periodeName).toContain('Testing Periode');
    expect(dataValues.startPeriode).toBeNull();
    expect(dataValues.endPeriode).toBeNull();
  });

  it('should sanitize request body with details', async () => {
    const token = await getToken();
    const response = await request(app)
      .post(Endpoint.SETTING + Endpoint.ACCOUNTING + Endpoint.ST_CURRENCY_RATE + Endpoint.SAVE)
      .set('Authorization', `Bearer ${token}`)
      .field('currency_rate_id', '1')
      .field('publish_date', '0000-00-00')
      .field('currency_rate_name', 'Testing Currency')
      .field('st_currency_rate_dt[0][currency_rate_dt_id]', '1')
      .field('st_currency_rate_dt[0][currency_rate_id]', '1')
      .field('st_currency_rate_dt[0][currency_id]', '1')
      .field('st_currency_rate_dt[0][rate]', '')
      .field('st_currency_rate_dt[0][isdel]', '1')
      .expect(201);

    const actualResult = await StCurrencyRate.findAll();
    const { dataValues } = actualResult[0];
    const actualDetail = await StCurrencyRateDetail.findAll();
    const actualCurrencyRateDetail = actualDetail[0];

    expect(dataValues.publishDate).toBeNull();
    expect(dataValues.currencyRateName).toContain('Testing Currency');
    expect(actualCurrencyRateDetail.rate).toBeNull();
  });
});