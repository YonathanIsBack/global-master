import TableNotFoundException from '../../src/exception/TableNotFoundException.js';
import { Customer } from '../../src/models/Customer.js';
import SequelizeUtil from '../../src/util/SequelizeUtil.js';
import initTestDatabase from '../config/initTestDatabase.js';

beforeEach(async () => {
  await initTestDatabase();
});

describe('SequelizeUtil', () => {
  describe('getModelByTableName', () => {
    it('should return correct model when given correct table name', () => {
      const tableName = 'ms_customer';
      const expectedResult = Customer;

      const actualResult = SequelizeUtil.getModelByTableName(tableName);

      expect(expectedResult).toEqual(actualResult);
    });

    it('should throw table not found error exception when given incorrect table name', () => {
      const tableName = 'unknown_table_name';

      expect(() => {
        SequelizeUtil.getModelByTableName(tableName);
      }).toThrow(new TableNotFoundException(tableName));
    });
  });
});
