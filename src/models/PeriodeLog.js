import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PeriodeLog extends StandardModel {}

PeriodeLog.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('periodeLogId', DataTypes.BIGINT),
      periodeId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      username: DataTypes.STRING(50),
      logsType: DataTypes.INTEGER,
      logsId: DataTypes.INTEGER
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('st_periode_log', 'PeriodeLog', sequelize)
);

export default PeriodeLog;
