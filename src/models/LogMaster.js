import { DataTypes } from 'sequelize';
import StandardModel from './StandardModel.js';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class LogMaster extends StandardModel {}

LogMaster.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('logMasterId', DataTypes.BIGINT),
      restoreLogMasterId: DataTypes.BIGINT,
      id: DataTypes.BIGINT,
      page: DataTypes.STRING(50),
      before: DataTypes.TEXT,
      after: DataTypes.TEXT,
      status: DataTypes.INTEGER,
      cretime: DataTypes.DATE,
      creby: DataTypes.INTEGER,
      ip: DataTypes.STRING(50)
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('log_master', 'LogMaster', sequelize)
);

export default LogMaster;
