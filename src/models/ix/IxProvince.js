import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxProvince extends StandardModel { }
class IxProvinceDt extends StandardModel { }

IxProvince.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixProvinceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_province', 'IxProvince', sequelize)
);

IxProvinceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixProvinceDtId', DataTypes.BIGINT),
      ixProvinceId: DataTypes.BIGINT,
      countryId: DataTypes.BIGINT,
      countryCode: DataTypes.STRING(50),
      countryName: DataTypes.STRING(150),
      provinceCode: DataTypes.STRING(50),
      provinceName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50)
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_province_dt', 'IxProvinceDt', sequelize)
);

export {
  IxProvince,
  IxProvinceDt
};

