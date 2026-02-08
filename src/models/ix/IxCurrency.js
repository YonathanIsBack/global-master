import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCurrency extends StandardModel { }
class IxCurrencyDt extends StandardModel { }

IxCurrency.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCurrencyId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_currency', 'IxCurrency', sequelize)
);

IxCurrencyDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCurrencyDtId', DataTypes.BIGINT),
      ixCurrencyId: DataTypes.BIGINT,
      currencyCode: DataTypes.STRING(50),
      currencyName: DataTypes.STRING(150),
      symbol: DataTypes.STRING(50),
      countryId: DataTypes.BIGINT,
      countryCode: DataTypes.STRING(50),
      countryName: DataTypes.STRING(150),
      kursLocal: DataTypes.STRING(50),
      kurs: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_currency_dt', 'IxCurrencyDt', sequelize)
);

export {
  IxCurrency,
  IxCurrencyDt
};

