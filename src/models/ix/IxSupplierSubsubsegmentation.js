import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxSupplierSubsubsegmentation extends StandardModel { }
class IxSupplierSubsubsegmentationDt extends StandardModel { }

IxSupplierSubsubsegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierSubsubsegmentationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_supplier_subsubsegmentation', 'IxSupplierSubsubsegmentation', sequelize)
);

IxSupplierSubsubsegmentationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixSupplierSubsubsegmentationDtId', DataTypes.BIGINT),
      ixSupplierSubsubsegmentationId: DataTypes.BIGINT,
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
  StandardModel.buildStandardModelInformation('ix_supplier_subsubsegmentation_dt', 'IxSupplierSubsubsegmentationDt', sequelize)
);

export {
  IxSupplierSubsubsegmentation,
  IxSupplierSubsubsegmentationDt
};

