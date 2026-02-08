import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierSubsegmentation extends StandardModel { }
class IxSupplierSubsegmentationDt extends StandardModel { }

IxSupplierSubsegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierSubsegmentationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_subsegmentation', 'IxSupplierSubsegmentation', sequelize)
);

IxSupplierSubsegmentationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierSubsegmentationDtId', DataTypes.BIGINT),
      ixSupplierSubsegmentationId: DataTypes.BIGINT,
      levelSegmentation: DataTypes.STRING(50),
      supplierSegmentationParentId: DataTypes.BIGINT,
      supplierSegmentationParentCode: DataTypes.STRING(50),
      supplierSegmentationParentName: DataTypes.STRING(150),
      supplierSegmentationCode: DataTypes.STRING(50),
      supplierSegmentationName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.STRING(50),
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_subsegmentation_dt', 'IxSupplierSubsegmentationDt', sequelize)
);

export {
  IxSupplierSubsegmentation,
  IxSupplierSubsegmentationDt
};

