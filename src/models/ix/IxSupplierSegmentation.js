import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierSegmentation extends StandardModel { }
class IxSupplierSegmentationDt extends StandardModel { }

IxSupplierSegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierSegmentationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_segmentation', 'IxSupplierSegmentation', sequelize)
);

IxSupplierSegmentationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierSegmentationDtId', DataTypes.BIGINT),
      ixSupplierSegmentationId: DataTypes.BIGINT,
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
  StandardModel.buildStandardModelInformation('ix_supplier_segmentation_dt', 'IxSupplierSegmentationDt', sequelize)
);

export {
  IxSupplierSegmentation,
  IxSupplierSegmentationDt
};

