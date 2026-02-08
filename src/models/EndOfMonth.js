import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class EndOfMonth extends StandardModel {}

EndOfMonth.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('eomId', DataTypes.BIGINT),
      eomName: DataTypes.STRING(50),
      eomMonth: DataTypes.INTEGER,
      eomYear: DataTypes.INTEGER,
      status: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_eom', 'EndOfMonth', sequelize)
);

export default EndOfMonth;
