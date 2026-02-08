import DepartmentDto from '../../src/dto/DepartmentDto';
import DataNotFoundException from '../../src/exception/DataNotFoundException.js';
import Department from '../../src/models/Department';
import DepartmentService from '../../src/services/DepartmentService';
import initTestDatabase from '../config/initTestDatabase';

beforeEach(async () => {
  await initTestDatabase();
});

describe('DepartmentService', () => {
  const user = 'USER';
  const ip = 'localhost';

  const createService = () => {
    return new DepartmentService();
  };

  describe('createCurrency', () => {
    const createDepartmentDto = (
      departmentId = null,
      departmentCode = 'HR',
      departmentName = 'Human Resources',
      isActive = 'on',
      userId = '30',
      ip = '192.168.1.100'
    ) => {
      return {
        department_id: departmentId,
        department_code: departmentCode,
        department_name: departmentName,
        isactive: isActive,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: userId,
        user_ip: ip
      };
    };

    it('should save new department to database', async () => {
      const departmentDto = new DepartmentDto(createDepartmentDto());
      const departmentService = createService();
      const expectedResult = {
        departmentId: 1,
        dbId: undefined,
        departmentCode: 'HR',
        departmentName: 'Human Resources',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await departmentService.createOrUpdate(
        departmentDto,
        user,
        ip
      );

      expect(actualResult.departmentId).toEqual(expectedResult.departmentId);
      expect(actualResult.departmentCode).toEqual(expectedResult.departmentCode);
      expect(actualResult.departmentName).toEqual(expectedResult.departmentName);
    });

    it('should save to designated id if provided', async () => {
      const departmentDto = new DepartmentDto(createDepartmentDto(5));
      const departmentService = createService();
      const expectedResult = {
        departmentId: 5,
        dbId: undefined,
        departmentCode: 'HR',
        departmentName: 'Human Resources',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data: actualResult } = await departmentService.createOrUpdate(
        departmentDto,
        user,
        ip
      );

      expect(actualResult.departmentId).toEqual(expectedResult.departmentId);
      expect(actualResult.departmentCode).toEqual(expectedResult.departmentCode);
      expect(actualResult.departmentName).toEqual(expectedResult.departmentName);
    });

    it('should update already existing department if department with same row exist', async () => {
      Department.create({ departmentCode: 'HR' });
      Department.create({ departmentCode: 'BI' });
      const departmentDto = new DepartmentDto(
        createDepartmentDto(1, 'AI', 'Artificial Intelligent')
      );
      const departmentService = createService();
      const expectedResult = {
        departmentId: 1,
        dbId: undefined,
        departmentCode: 'AI',
        departmentName: 'Artificial Intelligent',
        isactive: 'on',
        isdel: undefined,
        cretime: new Date(),
        creby: user,
        modtime: undefined,
        modby: undefined
      };

      const { data, isUpdated } = await departmentService.createOrUpdate(departmentDto, user, ip);
      const actualResult = await Department.findByPk(1);

      expect(data.departmentId).toEqual(expectedResult.departmentId);
      expect(actualResult.departmentId).toEqual(expectedResult.departmentId);
      expect(actualResult.departmentCode).toEqual(expectedResult.departmentCode);
      expect(actualResult.departmentName).toEqual(expectedResult.departmentName);
      expect(actualResult.departmentCode).not.toEqual('HR');
      expect(isUpdated).toBeTruthy();
    });
  });

  describe('deleteDepartment', () => {
    it('should return department with isdel 1 when existing isdel 0', async () => {
      await Department.create({ departmentID: 1, isdel: 0 });
      const requestBody = {
        department_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        isdel: 1,
        user_id: user,
        user_ip: ip
      };
      const departmentDto = new DepartmentDto(requestBody);
      const expectedResult = {
        departmentId: 1,
        isdel: 1,
        modby: 10,
        userIp: ip
      };
      const departmentService = createService();

      const { data: actualResult } = await departmentService.delete(departmentDto, user, ip);

      expect(actualResult.departmentId).toEqual(expectedResult.departmentId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no department was found', async () => {
      const requestBody = {
        id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const departmentDto = new DepartmentDto(requestBody);
      const departmentService = createService();

      await expect(async () => {
        await departmentService.delete(departmentDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });

  describe('restoreDepartment', () => {
    it('should return department with isdel 0 when existing isdel 1', async () => {
      await Department.create({ departmentId: 1, isdel: 1 });
      const requestBody = {
        department_id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const departmentDto = new DepartmentDto(requestBody);
      const expectedResult = {
        departmentId: 1,
        isdel: 0,
        modby: 10,
        userIp: ip
      };
      const departmentService = createService();

      const { data: actualResult } = await departmentService.restore(departmentDto, user, ip);

      expect(actualResult.departmentId).toEqual(expectedResult.departmentId);
      expect(actualResult.isdel).toEqual(expectedResult.isdel);
      expect(actualResult.modby).toEqual(expectedResult.modby);
    });

    it('should return null when no department was found', async () => {
      const requestBody = {
        id: 1,
        creby: '10',
        cretime: '2024-01-01',
        modby: '10',
        modtime: '2024-01-01',
        user_id: user,
        user_ip: ip
      };
      const departmentDto = new DepartmentDto(requestBody);
      const departmentService = createService();

      await expect(async () => {
        await departmentService.restore(departmentDto, user, ip);
      }).rejects.toThrow(DataNotFoundException);
    });
  });
});
