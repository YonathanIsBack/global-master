import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class EndOfMonthLog extends StandardModel {}

EndOfMonthLog.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('eomLogId', DataTypes.BIGINT),
      eomId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      username: DataTypes.STRING(50),
      logsType: DataTypes.INTEGER,
      logsId: DataTypes.INTEGER
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('st_eom_log', 'EndOfMonthLog', sequelize)
);

export default EndOfMonthLog;
