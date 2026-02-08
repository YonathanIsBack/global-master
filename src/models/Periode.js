import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Periode extends StandardModel {}

Periode.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('periodeId', DataTypes.BIGINT),
      periodeName: DataTypes.STRING(50),
      startPeriode: DataTypes.DATE,
      endPeriode: DataTypes.DATE,
      status: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_periode', 'Periode', sequelize)
);

export default Periode;
