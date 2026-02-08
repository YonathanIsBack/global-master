import { CountryDto } from '../../src/dto/CountryDto.js';
import DataNotFoundException from '../../src/exception/DataNotFoundException.js';
import { Country } from '../../src/models/Country.js';
import CountryService from '../../src/services/CountryService';
import initTestDatabase from '../config/initTestDatabase';

beforeEach(async () => {
  await initTestDatabase();
});

describe('CountryService', () => {
  const user = 'USER';
  const ip = 'localhost';
  describe('createCurrency', () => {
    const createCountryDto = (
      countryId = null,
      rajaOngkirId = 1,
      countryCode = 'US',
      countryName = 'United States',
      isActive = 'on',
      userId = '30',
      ip = '192.168.1.100'
    ) => {
      return {
        country_id: countryId,
        raja_ongkir_id: rajaOngkirId,
        country_code: countryCode,
        country_name: countryName,
        isactive: isActive,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: userId,
        user_ip: ip
      };
    };

    it('should save new country to database', async () => {
      const currencyDto = new CountryDto(createCountryDto());
      const countryService = new CountryService();
      const expectedResult = {
        countryId: 1,
        dbId: undefined,
        rajaOngkirId: 1,
        countryCode: 'US',
        countryName: 'United States',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await countryService.createOrUpdate(currencyDto, user, ip);

      expect(actualResult.countryId).toEqual(expectedResult.countryId);
      expect(actualResult.rajaOngkirId).toEqual(expectedResult.rajaOngkirId);
      expect(actualResult.countryCode).toEqual(expectedResult.countryCode);
      expect(actualResult.countryName).toEqual(expectedResult.countryName);
    });

    it('should save to designated id if provided', async () => {
      const countryDto = new CountryDto(createCountryDto(5));
      const countryService = new CountryService();
      const expectedResult = {
        countryId: 5,
        dbId: undefined,
        rajaOngkirId: 1,
        countryCode: 'US',
        countryName: 'United States',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await countryService.createOrUpdate(countryDto, user, ip);

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
    });

    it('should update already existing country if country with same row exist', async () => {
      Country.create({ countryCode: 'SG' });
      Country.create({ countryCode: 'US' });
      const countryDto = new CountryDto(createCountryDto(2, 1, 'ID', 'Indonesia'));
      const countryService = new CountryService();
      const expectedResult = {
        countryId: 2,
        dbId: undefined,
        rajaOngkirId: 1,
        countryCode: 'ID',
        countryName: 'Indonesia',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data, isUpdated } = await countryService.createOrUpdate(countryDto, user, ip);
      const actualResult = await Country.findByPk(2);

      expect(data.countryId).toEqual(expectedResult.countryId);
      expect(actualResult.countryId).toEqual(expectedResult.countryId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
      expect(actualResult.currencyCode).not.toEqual('USD');
      expect(isUpdated).toBeTruthy();
    });
  });

  describe('deleteCountry', () => {
    it('should return country with isdel 1 when existing isdel 0', async () => {
      await Country.create({ countryId: 1, isdel: 0 });
      const requestBody = {
        country_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        isdel: 1,
        user_id: user,
        user_ip: ip
      };
      const countryDto = new CountryDto(requestBody);
      const expectedResult = {
        countryId: 1,
        isdel: 1,
        modby: 10,
        userIp: ip
      };
      const countryService = new CountryService();

      const { data: actualResult } = await countryService.delete(countryDto, user, ip);

      expect(actualResult.countryId).toEqual(expectedResult.countryId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no country was found', async () => {
      const requestBody = {
        id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const countryDto = new CountryDto(requestBody);
      const countryService = new CountryService();

      await expect(async () => {
        await countryService.delete(countryDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });

  describe('restoreCountry', () => {
    it('should return country with isdel 0 when existing isdel 1', async () => {
      await Country.create({ currencyId: 1, isdel: 1 });
      const requestBody = {
        country_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const countryDto = new CountryDto(requestBody);
      const expectedResult = {
        countryId: 1,
        isdel: 0,
        modby: 10,
        userIp: ip
      };
      const countryService = new CountryService();

      const { data: actualResult } = await countryService.restore(countryDto, user, ip);

      expect(actualResult.countryId).toEqual(expectedResult.countryId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no country was found', async () => {
      const requestBody = {
        country_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const countryDto = new CountryDto(requestBody);
      const countryService = new CountryService();

      await expect(async () => {
        await countryService.restore(countryDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });
});
