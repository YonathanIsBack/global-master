import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCountry extends StandardModel { }
class IxCountryDt extends StandardModel { }

IxCountry.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCountryId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_country', 'IxCountry', sequelize)
);

IxCountryDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCountryDtId', DataTypes.BIGINT),
      ixCountryId: DataTypes.BIGINT,
      countryId: DataTypes.BIGINT,
      countryCode: DataTypes.STRING(50),
      countryName: DataTypes.STRING(150),
      coretaxCountryId: DataTypes.BIGINT,
      coretaxCountryCode: DataTypes.STRING(150),
      coretaxCountryName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50)
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_country_dt', 'IxCountryDt', sequelize)
);

export {
  IxCountry,
  IxCountryDt
};

