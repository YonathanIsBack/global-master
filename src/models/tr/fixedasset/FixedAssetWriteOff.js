import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class FixedAssetWriteOff extends StandardModel {}
class FixedAssetWriteOffDt extends StandardModel {}

FixedAssetWriteOff.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetWriteOffId', DataTypes.DOUBLE),
      fixedAssetWriteOffCode: DataTypes.STRING(50),
      fixedAssetWriteOffCodeTemp: DataTypes.STRING(50),
      fixedAssetWriteOffDate: DataTypes.DATE,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_write_off', 'FixedAssetWriteOff', sequelize)
);

FixedAssetWriteOffDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('fixedAssetWriteOffDtId', DataTypes.BIGINT),
      fixedAssetWriteOffId: DataTypes.BIGINT,
      fixedAssetId: DataTypes.BIGINT,
      qty: DataTypes.DOUBLE,
      faValue: DataTypes.DOUBLE,
      salvageValue: DataTypes.DOUBLE,
      note: DataTypes.TEXT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_fixed_asset_write_off_dt', 'FixedAssetWriteOffDt', sequelize)
);

export { FixedAssetWriteOff, FixedAssetWriteOffDt };
