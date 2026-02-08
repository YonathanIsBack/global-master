import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class StCurrencyRateDetail extends StandardModel {}

StCurrencyRateDetail.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('currencyRateDtId', DataTypes.BIGINT),
      currencyRateId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE
    },
    { withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation(
    'st_currency_rate_dt',
    'StCurrencyRateDetail',
    sequelize
  )
);

export default StCurrencyRateDetail;
