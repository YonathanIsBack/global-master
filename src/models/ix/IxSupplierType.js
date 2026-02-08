import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierType extends StandardModel { }
class IxSupplierTypeDt extends StandardModel { }

IxSupplierType.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierTypeId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_type', 'IxSupplierType', sequelize)
);

IxSupplierTypeDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierTypeDtId', DataTypes.BIGINT),
      ixSupplierTypeId: DataTypes.BIGINT,
      supplierTypeCode: DataTypes.STRING(50),
      supplierTypeName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_type_dt', 'IxSupplierTypeDt', sequelize)
);

export {
  IxSupplierType,
  IxSupplierTypeDt
};

