import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierGroup extends StandardModel { }
class IxSupplierGroupDt extends StandardModel { }

IxSupplierGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierGroupId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_group', 'IxSupplierGroup', sequelize)
);

IxSupplierGroupDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierGroupDtId', DataTypes.BIGINT),
      ixSupplierGroupId: DataTypes.BIGINT,
      supplierGroupCode: DataTypes.STRING(50),
      supplierGroupName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_group_dt', 'IxSupplierGroupDt', sequelize)
);

export {
  IxSupplierGroup,
  IxSupplierGroupDt
};

