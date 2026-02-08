import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCoretaxCountry extends StandardModel { }
class IxCoretaxCountryDt extends StandardModel { }

IxCoretaxCountry.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxCountryId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_country', 'IxCoretaxCountry', sequelize)
);

IxCoretaxCountryDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCoretaxCountryDtId', DataTypes.BIGINT),
      ixCoretaxCountryId: DataTypes.BIGINT,
      coretaxCountryId: DataTypes.BIGINT,
      coretaxCountryCode: DataTypes.STRING(50),
      coretaxCountryName: DataTypes.STRING(150),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_coretax_country_dt', 'IxCoretaxCountryDt', sequelize)
);

export {
  IxCoretaxCountry,
  IxCoretaxCountryDt
};

