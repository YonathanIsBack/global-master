import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerSubsegmentation extends StandardModel { }
class IxCustomerSubsegmentationDt extends StandardModel { }

IxCustomerSubsegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerSubsegmentationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_subsegmentation', 'IxCustomerSubsegmentation', sequelize)
);

IxCustomerSubsegmentationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerSubsegmentationDtId', DataTypes.BIGINT),
      ixCustomerSubsegmentationId: DataTypes.BIGINT,
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
  StandardModel.buildStandardModelInformation('ix_customer_subsegmentation_dt', 'IxCustomerSubsegmentationDt', sequelize)
);

export {
  IxCustomerSubsegmentation,
  IxCustomerSubsegmentationDt
};

