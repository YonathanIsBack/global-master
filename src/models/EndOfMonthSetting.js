import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class EndOfMonthSetting extends StandardModel {}

EndOfMonthSetting.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('eomSettingId', DataTypes.BIGINT),
      tanggal: DataTypes.INTEGER,
      startMonthEom: DataTypes.INTEGER,
      startYearEom: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_eom_setting', 'EndOfMonthSetting', sequelize)
);

export default EndOfMonthSetting;
