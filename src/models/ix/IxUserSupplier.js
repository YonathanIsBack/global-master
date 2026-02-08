import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxUserSupplier extends StandardModel { }
class IxUserSupplierDt extends StandardModel { }

IxUserSupplier.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserSupplierId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_user_supplier', 'IxUserSupplier', sequelize)
);

IxUserSupplierDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserSupplierDtId', DataTypes.BIGINT),
      ixUserSupplierId: DataTypes.BIGINT,
      username: DataTypes.STRING(150),
      supplierCode: DataTypes.STRING(150),
      supplierName: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_user_supplier_dt', 'IxUserSupplierDt', sequelize)
);

export {
  IxUserSupplier,
  IxUserSupplierDt
};

