import StratumDto from '../../src/dto/StratumDto';
import DataNotFoundException from '../../src/exception/DataNotFoundException.js';
import Stratum from '../../src/models/Stratum';
import StratumService from '../../src/services/StratumService';
import initTestDatabase from '../config/initTestDatabase';

beforeEach(async () => {
  await initTestDatabase();
});

describe('LocationService', () => {
  const user = 'USER';
  const ip = 'localhost';
  describe('createStratum', () => {
    const createStratumDto = (
      locationId = null,
      stratumCode = 'EVE',
      stratumName = 'Evelyn',
      isActive = 'on',
      userId = '30',
      ip = '192.168.1.100'
    ) => {
      return {
        location_id: locationId,
        stratum_code: stratumCode,
        stratum_name: stratumName,
        isactive: isActive,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: userId,
        user_ip: ip
      };
    };

    it('should save new stratum to database', async () => {
      const stratumDto = new StratumDto(createStratumDto());
      const stratumService = new StratumService();
      const expectedResult = {
        stratumId: 1,
        stratumCode: 'EVE',
        stratumName: 'Evelyn',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await stratumService.createOrUpdate(stratumDto, user, ip);

      expect(actualResult.stratumId).toEqual(expectedResult.stratumId);
      expect(actualResult.stratumCode).toEqual(expectedResult.stratumCode);
      expect(actualResult.stratumName).toEqual(expectedResult.stratumName);
    });
  });

  describe('deleteStratum', () => {
    it('should return stratum with isdel 1 when existing isdel 0', async () => {
      await Stratum.create({ stratumId: 1, isdel: 0 });
      const requestBody = {
        stratum_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        isdel: 1,
        user_id: user,
        user_ip: ip
      };
      const countryDto = new StratumDto(requestBody);
      const expectedResult = {
        stratumId: 1,
        isdel: 1,
        modby: 10,
        userIp: ip
      };
      const stratumService = new StratumService();

      const { data: actualResult } = await stratumService.delete(countryDto, user, ip);

      expect(actualResult.stratumId).toEqual(expectedResult.stratumId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no country was found', async () => {
      const requestBody = {
        stratum_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const stratumDto = new StratumDto(requestBody);
      const stratumService = new StratumService();

      await expect(async () => {
        await stratumService.delete(stratumDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });

  describe('restoreStratum', () => {
    it('should return country with isdel 0 when existing isdel 1', async () => {
      await Stratum.create({ stratumId: 1, isdel: 1 });
      const requestBody = {
        stratum_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const stratumDto = new StratumDto(requestBody);
      const expectedResult = {
        stratumId: 1,
        isdel: 0,
        modby: 10,
        userIp: ip
      };
      const stratumService = new StratumService();

      const { data: actualResult } = await stratumService.restore(stratumDto, user, ip);

      expect(actualResult.stratumId).toEqual(expectedResult.stratumId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no country was found', async () => {
      const requestBody = {
        stratum_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const stratumDto = new StratumDto(requestBody);
      const stratumService = new StratumService();

      await expect(async () => {
        await stratumService.restore(stratumDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });
});
