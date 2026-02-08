import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCity extends StandardModel { }
class IxCityDt extends StandardModel { }

IxCity.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCityId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_city', 'IxCity', sequelize)
);

IxCityDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCityDtId', DataTypes.BIGINT),
      ixCityId: DataTypes.BIGINT,
      rajaOngkirId: DataTypes.INTEGER,
      countryId: DataTypes.BIGINT,
      countryCode: DataTypes.STRING(50),
      countryName: DataTypes.STRING(150),
      provinceId: DataTypes.INTEGER,
      provinceCode: DataTypes.STRING(50),
      provinceName: DataTypes.STRING(150),
      cityCode: DataTypes.STRING(50),
      cityName: DataTypes.STRING(150),
      postalCode: DataTypes.STRING(20),
      status: { type: DataTypes.BIGINT, field: 'STATUS' },
      note: DataTypes.TEXT,
    },
    { withIsactive: true, withIsdel: true, withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_city_dt', 'IxCityDt', sequelize)
);

export {
  IxCity,
  IxCityDt
};

