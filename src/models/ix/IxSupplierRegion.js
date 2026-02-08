import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierRegion extends StandardModel { }
class IxSupplierRegionDt extends StandardModel { }

IxSupplierRegion.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierRegionId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_region', 'IxSupplierRegion', sequelize)
);

IxSupplierRegionDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierRegionDtId', DataTypes.BIGINT),
      ixSupplierRegionId: DataTypes.BIGINT,
      supplierRegionCode: DataTypes.STRING(50),
      supplierRegionName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_region_dt', 'IxSupplierRegionDt', sequelize)
);

export {
  IxSupplierRegion,
  IxSupplierRegionDt
};

