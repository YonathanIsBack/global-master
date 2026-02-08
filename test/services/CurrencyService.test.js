import CurrencyDto from '../../src/dto/CurrencyDto';
import DataNotFoundException from '../../src/exception/DataNotFoundException.js';
import Currency from '../../src/models/Currency';
import CurrencyService from '../../src/services/CurrencyService';
import initTestDatabase from '../config/initTestDatabase';

beforeEach(async () => {
  await initTestDatabase();
});

describe('CurrencyService', () => {
  const user = 'USER';
  const ip = 'localhost';
  describe('createCurrency', () => {
    const createCurrencyDto = (
      currencyId = null,
      currencyCode = 'IDR',
      currencyName = 'IDR',
      currencySymbol = 'Rp',
      countryId = 1,
      isActive = 'on',
      userId = '30',
      ip = '192.168.1.100'
    ) => {
      return {
        currency_id: currencyId,
        currency_code: currencyCode,
        currency_name: currencyName,
        currency_symbol: currencySymbol,
        country_id: countryId,
        isactive: isActive,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: userId,
        user_ip: ip
      };
    };

    it('should save new currency to database', async () => {
      const currencyDto = new CurrencyDto(createCurrencyDto());
      const currencyService = new CurrencyService();
      const expectedResult = {
        currencyId: 1,
        dbId: undefined,
        companyParentId: undefined,
        currencyCode: 'IDR',
        currencyName: 'IDR',
        currencySymbol: 'Rp',
        countryId: 1,
        kursLocal: undefined,
        kurs: undefined,
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await currencyService.createOrUpdate(currencyDto, user, ip);

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
    });

    it('should save to designated id if provided', async () => {
      const currencyDto = new CurrencyDto(createCurrencyDto(5));
      const currencyService = new CurrencyService();
      const expectedResult = {
        currencyId: 5,
        dbId: undefined,
        companyParentId: undefined,
        currencyCode: 'IDR',
        currencyName: 'IDR',
        currencySymbol: 'Rp',
        countryId: 1,
        kursLocal: undefined,
        kurs: undefined,
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await currencyService.createOrUpdate(currencyDto, user, ip);

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
    });

    it('should update already existing currency if currency with same row exist', async () => {
      Currency.create({ currencyCode: 'IDR' });
      Currency.create({ currencyCode: 'USD' });
      const currencyDto = new CurrencyDto(createCurrencyDto(2, 'SGD', 'SGD', 'SG'));
      const currencyService = new CurrencyService();
      const expectedResult = {
        currencyId: 2,
        dbId: null,
        companyParentId: null,
        currencyCode: 'SGD',
        currencyName: 'SGD',
        currencySymbol: 'SG',
        countryId: 1,
        kursLocal: null,
        kurs: null,
        isactive: 'on',
        isdel: null,
        cretime: null,
        creby: null,
        modtime: new Date(),
        modby: user
      };

      const { data, isUpdated } = await currencyService.createOrUpdate(currencyDto, user, ip);
      const actualResult = await Currency.findByPk(2);

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
      expect(actualResult.currencyCode).not.toEqual('USD');
      expect(isUpdated).toBeTruthy();
    });
  });

  describe('deleteCurrency', () => {
    it('should return currency with isdel 1 when existing isdel 0', async () => {
      await Currency.create({ currencyId: 1, isdel: 0 });
      const requestBody = {
        currency_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        isdel: 1,
        user_id: user,
        user_ip: ip
      };
      const currencyDto = new CurrencyDto(requestBody);
      const expectedResult = {
        currencyId: 1,
        isdel: 1,
        modby: 10
      };
      const currencyService = new CurrencyService();

      const { data: actualResult } = await currencyService.delete(currencyDto, user, ip);

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no currency was found', async () => {
      const requestBody = {
        id: 1,
        user_id: user,
        user_ip: ip
      };
      const currencyDto = new CurrencyDto(requestBody);
      const currencyService = new CurrencyService();

      await expect(async () => {
        await currencyService.delete(currencyDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });

  describe('restoreCurrency', () => {
    it('should return currency with isdel 0 when existing isdel 1', async () => {
      await Currency.create({ currencyId: 1, isdel: 1 });
      const requestBody = {
        currency_id: 1,
        creby: '10',
        cretime: '01-01-2024',
        modby: '10',
        modtime: '01-01-2024',
        user_id: user,
        user_ip: ip
      };
      const currencyDto = new CurrencyDto(requestBody);
      const expectedResult = {
        currencyId: 1,
        isdel: 0,
        modby: 10,
        userIp: ip
      };
      const currencyService = new CurrencyService();

      const { data: actualResult } = await currencyService.restore(currencyDto, user, ip);

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no currency was found', async () => {
      const requestBody = {
        id: 1,
        user_id: user,
        user_ip: ip
      };
      const currencyDto = new CurrencyDto(requestBody);
      const currencyService = new CurrencyService();

      await expect(async () => {
        await currencyService.restore(currencyDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });
});
