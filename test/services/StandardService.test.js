import { faker } from '@faker-js/faker';
import DatabaseConnectionSingleton from '../../src/configs/DatabaseConnection.js';
import CurrencyDto from '../../src/dto/CurrencyDto.js';
import { CustomerDto } from '../../src/dto/CustomerDto.js';
import LocationDto from '../../src/dto/LocationDto';
import DataNotFoundException from '../../src/exception/DataNotFoundException.js';
import TableNotFoundException from '../../src/exception/TableNotFoundException.js';
import Currency from '../../src/models/Currency';
import { Customer, CustomerCode } from '../../src/models/Customer.js';
import Location from '../../src/models/Location';
import LogMaster from '../../src/models/LogMaster.js';
import { UserCustomer } from '../../src/models/User.js';
import StandardService from '../../src/services/StandardService';
import initTestDatabase from '../config/initTestDatabase';

beforeEach(async () => {
  await initTestDatabase();
});

describe('StandardService', () => {
  const user = 'USER';
  const ip = 'localhost';

  const logMasterDto = {
    log_master_id: '1',
    restore_log_master_id: '',
    id: '1',
    page: 'master/company',
    before:
      '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}',
    after:
      '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}',
    status: '2',
    cretime: '2023-09-05 15:49:01',
    creby: '24',
    ip: '192.168.1.21'
  };

  const createCurrencyDto = (
    currencyId = undefined,
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
  describe('createOrUpdate', () => {
    const createLocationDto = (
      locationId = undefined,
      locationCode = 'PS',
      locationName = 'Pasar Kemis',
      isActive = 'on',
      userId = '30',
      ip = '192.168.1.100'
    ) => {
      return {
        location_id: locationId,
        location_code: locationCode,
        location_name: locationName,
        isactive: isActive,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: userId,
        user_ip: ip
      };
    };

    it('should save new data to database', async () => {
      const locationDto = new LocationDto(createLocationDto());
      const standardService = new StandardService(Location);
      const expectedResult = {
        locationId: 1,
        locationCode: 'PS',
        locationName: 'Pasar Kemis',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await standardService.createOrUpdate(locationDto);

      expect(actualResult.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.locationCode).toEqual(expectedResult.locationCode);
      expect(actualResult.locationName).toEqual(expectedResult.locationName);
    });

    it('should save to designated id if provided', async () => {
      const locationDto = new LocationDto(createLocationDto(5));
      const standardService = new StandardService(Location);
      const expectedResult = {
        locationId: 5,
        locationCode: 'PS',
        locationName: 'Pasar Kemis',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await standardService.createOrUpdate(locationDto);

      expect(actualResult.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.locationCode).toEqual(expectedResult.locationCode);
      expect(actualResult.locationName).toEqual(expectedResult.locationName);
    });

    it('should save to table detail when given correct table name and array of data', async () => {
      const userCustomer = {
        user_customer_id: '1',
        user_id: '1',
        customer_id: '1'
      };
      const customerDto = new CustomerDto({
        customer_id: '1',
        ms_user_customer: [userCustomer]
      });
      const standardService = new StandardService(Customer);

      const { data: actualResult, details } = await standardService.createOrUpdate(customerDto);
      const { dataValues: detailsResult } = await UserCustomer.findByPk(1);

      expect(actualResult.customerId).toEqual('1');
      expect(details[0].ms_user_customer[0].insert.userCustomerId).toEqual('1');
      expect(details[0].ms_user_customer[0].insert.userId).toEqual('1');
      expect(details[0].ms_user_customer[0].insert.customerId).toEqual('1');
      expect(detailsResult.userCustomerId).toEqual(
        Number(details[0].ms_user_customer[0].insert.userCustomerId)
      );
      expect(detailsResult.userId).toEqual(Number(details[0].ms_user_customer[0].insert.userId));
      expect(detailsResult.customerId).toEqual(
        Number(details[0].ms_user_customer[0].insert.customerId)
      );
    });

    it('should not save data when given table name but no data passed', async () => {
      const customerDto = new CustomerDto({
        customer_id: '1',
        ms_user_customer: []
      });
      const standardService = new StandardService(Customer);

      const { data: actualResult, details } = await standardService.createOrUpdate(customerDto);
      const actualLength = (await UserCustomer.findAll()).length;

      expect(actualResult.customerId).toEqual('1');
      expect(actualLength).toEqual(0);
    });

    it('should throw error when given details data with unknown table name', async () => {
      const userCustomer = {
        user_customer_id: '1',
        user_id: '1',
        customer_id: '1'
      };
      const customerDto = new CustomerDto({
        customer_id: '1',
        unknown_table: [userCustomer]
      });
      const standardService = new StandardService(Customer);

      await expect(async () => {
        await standardService.createOrUpdate(customerDto);
      }).rejects.toThrow(new TableNotFoundException('unknown_table'));
    });

    it('should able to save multiple data without problem', async () => {
      const userCustomer = [...Array(10).keys()].map((index) => ({
        user_customer_id: index,
        user_id: index,
        customer_id: '1'
      }));
      const customerCode = [...Array(10).keys()].map((index) => ({
        customer_code_id: index,
        reset_type: '1',
        year: '1',
        month: '1',
        segmentation_code: faker.internet.domainWord(),
        current_number: 0
      }));
      const customerDto = new CustomerDto({
        customer_id: '1',
        ms_user_customer: userCustomer,
        ms_customer_code: customerCode
      });
      const standardService = new StandardService(Customer);

      const { data: actualResult } = await standardService.createOrUpdate(customerDto, user, ip);
      const actualUserCustomers = await UserCustomer.findAll();
      const actualCustomerCodes = await CustomerCode.findAll();

      expect(actualResult.customerId).toEqual('1');
      expect(actualUserCustomers.length).toEqual(10);
      expect(actualCustomerCodes.length).toEqual(10);
    });

    it('should update already existing country if country with same row exist', async () => {
      Location.create({ locationCode: 'PS' });
      Location.create({ locationCode: 'JB' });
      Location.create({ locationCode: 'JK' });
      Location.create({ locationCode: 'JU' });
      Location.create({ locationCode: 'JT' });
      const locationDto = new LocationDto(createLocationDto(2, 'TG', 'Tangerang'));
      const standardService = new StandardService(Location);
      const expectedResult = {
        locationId: 2,
        locationCode: 'TG',
        locationName: 'Tangerang',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data, isUpdated } = await standardService.createOrUpdate(locationDto, user, ip);
      const actualResult = await Location.findByPk(2);

      expect(data.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.locationCode).toEqual(expectedResult.locationCode);
      expect(actualResult.locationName).toEqual(expectedResult.locationName);
      expect(actualResult.locationCode).not.toEqual('JB');
      expect(isUpdated).toBeTruthy();
    });

    it('should insert to new row when no id was provided', async () => {
      Location.create({ locationCode: 'PS' });
      Location.create({ locationCode: 'JB' });
      Location.create({ locationCode: 'JK' });
      Location.create({ locationCode: 'JU' });
      Location.create({ locationCode: 'JT' });
      const locationDto = new LocationDto(createLocationDto(undefined, 'TG', 'Tangerang'));
      const standardService = new StandardService(Location);
      const expectedResult = {
        locationId: 6,
        locationCode: 'TG',
        locationName: 'Tangerang',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data, isUpdated } = await standardService.createOrUpdate(locationDto, user, ip);
      const actualResults = await Location.findAll();
      const locationCodes = ['PS', 'JB', 'JK', 'JU', 'JT', 'TG'];
      actualResults.forEach((actualResult, index) => {
        expect(actualResult.dataValues.locationCode).toEqual(locationCodes[index]);
      });
      const actualResult = await Location.findByPk(6);
      expect(data.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.locationCode).toEqual(expectedResult.locationCode);
      expect(actualResult.locationName).toEqual(expectedResult.locationName);
      expect(actualResult.locationCode).not.toEqual('JB');
      expect(isUpdated).toBeFalsy();
    });

    it('should only update given column', async () => {
      await Location.create({ locationCode: 'PS', locationName: 'Pasar Kemis' });
      const locationDto = new LocationDto({
        location_id: 1,
        location_name: 'Pasar Kemis Tambahan'
      });
      const standardService = new StandardService(Location);

      const { data: actualResult, isUpdated } = await standardService.createOrUpdate(
        locationDto,
        user,
        ip
      );
      const databaseResult = await Location.findByPk(1);

      expect(actualResult.locationCode).toEqual('PS');
      expect(actualResult.locationName).toEqual('Pasar Kemis Tambahan');
      expect(databaseResult.dataValues.locationCode).toEqual('PS');
      expect(databaseResult.dataValues.locationName).toEqual('Pasar Kemis Tambahan');
      expect(isUpdated).toBeTruthy();
    });

    it('should save log master when dto gives log_master data', async () => {
      await Location.create({ locationCode: 'PS', locationName: 'Pasar Kemis' });
      const locationDto = new LocationDto({
        location_id: 1,
        location_name: 'Pasar Kemis Tambahan',
        log_master: logMasterDto
      });
      const standardService = new StandardService(Location);

      const { data: actualResult, isUpdated } = await standardService.createOrUpdate(
        locationDto,
        user,
        ip
      );
      const databaseResult = await Location.findByPk(1);
      const logMasterResult = await LogMaster.findByPk(1);

      expect(actualResult.locationCode).toEqual('PS');
      expect(actualResult.locationName).toEqual('Pasar Kemis Tambahan');
      expect(databaseResult.dataValues.locationCode).toEqual('PS');
      expect(databaseResult.dataValues.locationName).toEqual('Pasar Kemis Tambahan');
      expect(isUpdated).toBeTruthy();
      const logMasterActual = logMasterResult.dataValues;
      expect(logMasterActual.logMasterId).toEqual(1);
      expect(logMasterActual.restoreLogMasterId).toEqual('');
      expect(logMasterActual.id).toEqual(1);
      expect(logMasterActual.page).toEqual('master/company');
      expect(logMasterActual.before).toEqual(
        '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}'
      );
      expect(logMasterActual.after).toEqual(
        '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}'
      );
      expect(logMasterActual.status).toEqual(2);
      expect(logMasterActual.creby).toEqual(24);
      expect(logMasterActual.ip).toEqual('192.168.1.21');
    });

    it('should not save log master when not given any log master data', async () => {
      await Location.create({ locationCode: 'PS', locationName: 'Pasar Kemis' });
      const locationDto = new LocationDto({
        location_id: 1,
        location_name: 'Pasar Kemis Tambahan'
      });
      const standardService = new StandardService(Location);

      const { data: actualResult, isUpdated } = await standardService.createOrUpdate(
        locationDto,
        user,
        ip
      );
      const databaseResult = await Location.findByPk(1);
      const actualLogMasterLength = (await LogMaster.findAll()).length;

      expect(actualResult.locationCode).toEqual('PS');
      expect(actualResult.locationName).toEqual('Pasar Kemis Tambahan');
      expect(databaseResult.dataValues.locationCode).toEqual('PS');
      expect(databaseResult.dataValues.locationName).toEqual('Pasar Kemis Tambahan');
      expect(isUpdated).toBeTruthy();
      expect(actualLogMasterLength).toEqual(0);
    });
  });

  describe('delete', () => {
    it('should return data with isdel 1 when existing isdel 0 and save to log master', async () => {
      await Location.create({ locationId: 1, isdel: 0 });
      const requestBody = {
        location_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        isdel: 1,
        user_id: user,
        user_ip: ip,
        log_master: logMasterDto
      };
      const locationDto = new LocationDto(requestBody);
      const expectedResult = {
        locationId: 1,
        isdel: 1,
        modby: 10,
        userIp: ip
      };
      const locationService = new StandardService(Location);

      const { data: actualResult } = await locationService.delete(locationDto, user, ip);

      expect(actualResult.locationId).toBeDefined();
      expect(actualResult.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);

      const logMasterResult = await LogMaster.findByPk(1);
      const logMasterActual = logMasterResult.dataValues;
      expect(logMasterActual.logMasterId).toEqual(1);
      expect(logMasterActual.restoreLogMasterId).toEqual('');
      expect(logMasterActual.id).toEqual(1);
      expect(logMasterActual.page).toEqual('master/company');
      expect(logMasterActual.before).toEqual(
        '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}'
      );
      expect(logMasterActual.after).toEqual(
        '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}'
      );
      expect(logMasterActual.status).toEqual(2);
      expect(logMasterActual.creby).toEqual(24);
      expect(logMasterActual.ip).toEqual('192.168.1.21');
    });

    it('should return null when no data was found', async () => {
      const requestBody = {
        location_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const locationDto = new LocationDto(requestBody);
      const standardService = new StandardService(Location);

      await expect(async () => {
        await standardService.delete(locationDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });

  describe('restore', () => {
    it('should return data with isdel 0 when existing isdel 1', async () => {
      await Location.create({ locationId: 1, isdel: 1 });
      const requestBody = {
        location_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip,
        log_master: logMasterDto
      };
      const locationnDto = new LocationDto(requestBody);
      const expectedResult = {
        locationId: 1,
        isdel: 0,
        modby: 10,
        userIp: ip
      };
      const standardService = new StandardService(Location);

      const { data: actualResult } = await standardService.restore(locationnDto, user, ip);

      expect(actualResult.locationId).toBeDefined();
      expect(actualResult.locationId).toEqual(expectedResult.locationId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);

      const logMasterResult = await LogMaster.findByPk(1);
      const logMasterActual = logMasterResult.dataValues;
      expect(logMasterActual.logMasterId).toEqual(1);
      expect(logMasterActual.restoreLogMasterId).toEqual('');
      expect(logMasterActual.id).toEqual(1);
      expect(logMasterActual.page).toEqual('master/company');
      expect(logMasterActual.before).toEqual(
        '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}'
      );
      expect(logMasterActual.after).toEqual(
        '{"general":[{"name":"admin124","publish_time":"2023-09-06 12:00","note":"","isdel":0,"isactive":1,"cretime":"2023-09-06 09:31:41","creby":"32","company_parent_id":"1","db_id":"1"}]}'
      );
      expect(logMasterActual.status).toEqual(2);
      expect(logMasterActual.creby).toEqual(24);
      expect(logMasterActual.ip).toEqual('192.168.1.21');
    });

    it('should return null when no country was found', async () => {
      const requestBody = {
        location_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const locationDto = new LocationDto(requestBody);
      const standardService = new StandardService(Location);

      await expect(async () => {
        await standardService.restore(locationDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });
  describe('insert', () => {
    it('should save new data to model', async () => {
      const model = Currency;
      const currencyDto = new CurrencyDto(createCurrencyDto());
      const standardService = new StandardService(model);
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

      const transaction = await DatabaseConnectionSingleton.getConnection().transaction();
      const actualResult = await standardService.insert(currencyDto.toModel(), transaction);
      transaction.commit();

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
    });
  });

  describe('update', () => {
    it('should update already existing currency if currency with same row exist', async () => {
      Currency.create({ currencyCode: 'IDR' });
      Currency.create({ currencyCode: 'USD' });
      const model = Currency;
      const currencyDto = new CurrencyDto(createCurrencyDto(2, 'SGD', 'SGD', 'SG'));
      const standardService = new StandardService(model);
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

      const transaction = await DatabaseConnectionSingleton.getConnection().transaction();
      const actualResult = await standardService.update(currencyDto.toModel(), transaction);
      transaction.commit();

      expect(actualResult.currencyId).toEqual(expectedResult.currencyId);
      expect(actualResult.currencyCode).toEqual(expectedResult.currencyCode);
      expect(actualResult.currencyName).toEqual(expectedResult.currencyName);
      expect(actualResult.currencySymbol).toEqual(expectedResult.currencySymbol);
      expect(actualResult.currencyCode).not.toEqual('USD');
    });
  });

  describe('deleteRow', () => {
    it('should physically delete data by row', async () => {
      Currency.create({ currencyCode: 'USD' });
      const currencyService = new StandardService(Currency);

      currencyService.deleteRow({ currencyId: 1 });
      const actualResult = await Currency.findAll();

      expect(actualResult.length).toEqual(0);
    });
  });

  describe('insertTransaction', () => {
    it('should insert header, detail, log master, log transaksi, transaction count', () => {
      const currencyDetail = {
        currency_rate_dt_id: "1",
        currency_rate_id: "1",
        currency_id: "1",
        rate: "1",
        isdel: "0",
      }
      const currency = {
        currency_rate_id: "1",
        publish_date: "2025-02-11 12:00:00",
        currency_rate_name: "KURS ACUAN 110224",
        note: "",
        isdel: "0",
        cretime: "2025-02-11 14:14:47",
        creby: "20",
        modtime: "2025-02-11 14:40:49",
        modby: "28",
      }
    });
  });
});
