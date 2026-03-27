import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
import { Coa } from './Coa.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class AutoCode extends StandardModel {}
class AutoCodeCount extends StandardModel {}
class AutoJurnal extends StandardModel {}

AutoCode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('autoCodeId', DataTypes.BIGINT),
      autoCodeType: DataTypes.TINYINT,
      autoCodePrefix: DataTypes.STRING(20),
      digit: DataTypes.INTEGER,
      resetTime: DataTypes.STRING(10)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_auto_code', 'AutoCode', sequelize)
);

AutoCodeCount.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('autoCodeCountId', DataTypes.BIGINT),
      autoCodeId: DataTypes.BIGINT,
      autoYear: DataTypes.STRING(10),
      autoMonth: DataTypes.STRING(15),
      autoDays: DataTypes.STRING(10),
      currentNumber: DataTypes.INTEGER
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ms_auto_code_count', 'AutoCodeCount', sequelize)
);

AutoJurnal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('autoJurnalId', DataTypes.BIGINT),
      coaId: DataTypes.BIGINT,
      autoJurnalName: DataTypes.STRING(100)
    },
    { withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_auto_jurnal', 'AutoJurnal', sequelize)
);

AutoJurnal.hasOne(Coa, { foreignKey: 'coaId' });

export { AutoCode, AutoCodeCount, AutoJurnal };
