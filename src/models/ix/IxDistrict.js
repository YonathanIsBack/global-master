import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxDistrict extends StandardModel { }
class IxDistrictDt extends StandardModel { }

IxDistrict.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixDistrictId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_district', 'IxDistrict', sequelize)
);

IxDistrictDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixDistrictDtId', DataTypes.BIGINT),
      ixDistrictId: DataTypes.BIGINT,
      countryId: DataTypes.BIGINT,
      countryCode: DataTypes.STRING(50),
      countryName: DataTypes.STRING(150),
      provinceId: DataTypes.INTEGER,
      provinceCode: DataTypes.STRING(50),
      provinceName: DataTypes.STRING(150),
      cityId: DataTypes.BIGINT,
      cityCode: DataTypes.STRING(50),
      cityName: DataTypes.STRING(150),
      districtCode: DataTypes.STRING(50),
      districtName: DataTypes.STRING(150),
      postalCode: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_district_dt', 'IxDistrictDt', sequelize)
);

export {
  IxDistrict,
  IxDistrictDt
};

