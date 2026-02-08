import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Currency extends StandardModel {}

Currency.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('currencyId', DataTypes.INTEGER),
      dbId: DataTypes.INTEGER,
      companyParentId: DataTypes.INTEGER,
      currencyCode: DataTypes.STRING(5),
      currencyName: DataTypes.STRING(50),
      currencySymbol: DataTypes.STRING(5),
      countryId: DataTypes.INTEGER,
      kursLocal: DataTypes.DOUBLE,
      kurs: DataTypes.DOUBLE,
      syncType: DataTypes.STRING(250),
      syncTime: DataTypes.DATE
    },
    { withDbId: true, withIsactive: true, withIsdel: true, withIsused: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ms_currency', 'Currency', sequelize)
);

export default Currency;
