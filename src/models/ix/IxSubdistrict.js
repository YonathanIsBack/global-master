import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSubdistrict extends StandardModel { }
class IxSubdistrictDt extends StandardModel { }

IxSubdistrict.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSubdistrictId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_subdistrict', 'IxSubdistrict', sequelize)
);

IxSubdistrictDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSubdistrictDtId', DataTypes.BIGINT),
      ixSubdistrictId: DataTypes.BIGINT,
      countryId: DataTypes.BIGINT,
      countryCode: DataTypes.STRING(50),
      countryName: DataTypes.STRING(150),
      provinceId: DataTypes.BIGINT,
      provinceCode: DataTypes.STRING(50),
      provinceName: DataTypes.STRING(150),
      cityId: DataTypes.BIGINT,
      cityCode: DataTypes.STRING(50),
      cityName: DataTypes.STRING(150),
      districtId: DataTypes.BIGINT,
      districtCode: DataTypes.STRING(50),
      districtName: DataTypes.STRING(150),
      subdistrictCode: DataTypes.STRING(50),
      subdistrictName: DataTypes.STRING(150),
      postalCode: DataTypes.STRING(50),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_subdistrict_dt', 'IxSubdistrictDt', sequelize)
);

export {
  IxSubdistrict,
  IxSubdistrictDt
};

