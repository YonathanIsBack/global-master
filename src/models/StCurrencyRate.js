import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class StCurrencyRate extends StandardModel {}

StCurrencyRate.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('currencyRateId', DataTypes.BIGINT),
      publishDate: DataTypes.DATE,
      currencyRateName: DataTypes.STRING(200),
      note: DataTypes.TEXT
    },
    { withIsdel: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_currency_rate', 'StCurrencyRate', sequelize)
);

export default StCurrencyRate;
