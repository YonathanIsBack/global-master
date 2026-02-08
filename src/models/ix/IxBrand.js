import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxBrand extends StandardModel { }
class IxBrandDt extends StandardModel { }

IxBrand.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBrandId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_brand', 'IxBrand', sequelize)
);

IxBrandDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixBrandDtId', DataTypes.BIGINT),
      ixBrandId: DataTypes.BIGINT,
      supplierGroupId: DataTypes.BIGINT,
      supplierGroupCode: DataTypes.STRING(50),
      supplierGroupName: DataTypes.STRING(150),
      supplierId: DataTypes.BIGINT,
      supplierCode: DataTypes.STRING(50),
      supplierName: DataTypes.STRING(150),
      brandId: DataTypes.BIGINT,
      brandCode: DataTypes.STRING(50),
      brandName: DataTypes.STRING(150),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_brand_dt', 'IxBrandDt', sequelize)
);

export {
  IxBrand,
  IxBrandDt
};

