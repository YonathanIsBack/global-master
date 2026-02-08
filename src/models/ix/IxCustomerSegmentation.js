import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerSegmentation extends StandardModel { }
class IxCustomerSegmentationDt extends StandardModel { }

IxCustomerSegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerSegmentationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_segmentation', 'IxCustomerSegmentation', sequelize)
);

IxCustomerSegmentationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerSegmentationDtId', DataTypes.BIGINT),
      ixCustomerSegmentationId: DataTypes.BIGINT,
      levelSegmentation: DataTypes.STRING(50),
      customerSegmentationParentId: DataTypes.BIGINT,
      customerSegmentationParentCode: DataTypes.STRING(50),
      customerSegmentationParentName: DataTypes.STRING(150),
      customerSegmentationCode: DataTypes.STRING(50),
      customerSegmentationName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_segmentation_dt', 'IxCustomerSegmentationDt', sequelize)
);

export {
  IxCustomerSegmentation,
  IxCustomerSegmentationDt
};

