import getDatabaseConfig from '../configs/databaseConfig.js';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import TableNotFoundException from '../exception/TableNotFoundException.js';

class SequelizeUtil {
  static getModelByTableName(tableName) {
    const availableModel = DatabaseConnectionSingleton.getConnection().models;

    for (const model in availableModel) {
      if (availableModel[model].tableName === tableName) {
        return availableModel[model];
      }
    }

    throw new TableNotFoundException(tableName);
  }
}

export default SequelizeUtil;
