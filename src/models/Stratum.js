import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Stratum extends StandardModel { }

Stratum.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('stratumId', DataTypes.BIGINT),
      stratumCode: DataTypes.STRING(5),
      stratumName: DataTypes.STRING(25)
    },
    { withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_stratum', 'Stratum', sequelize)
);

export default Stratum;
