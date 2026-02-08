import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerSubsubsegmentation extends StandardModel { }
class IxCustomerSubsubsegmentationDt extends StandardModel { }

IxCustomerSubsubsegmentation.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerSubsubsegmentationId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_subsubsegmentation', 'IxCustomerSubsubsegmentation', sequelize)
);

IxCustomerSubsubsegmentationDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerSubsubsegmentationDtId', DataTypes.BIGINT),
      ixCustomerSubsubsegmentationId: DataTypes.BIGINT,
      levelSegmentation: DataTypes.STRING(50),
      customerSegmentationParentId: DataTypes.BIGINT,
      customerSegmentationParentCode: DataTypes.STRING(50),
      customerSegmnetationParentName: DataTypes.STRING(150),
      customerSegmentationCode: DataTypes.STRING(50),
      customerSegmentationName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_subsubsegmentation_dt', 'IxCustomerSubsubsegmentationDt', sequelize)
);

export {
  IxCustomerSubsubsegmentation,
  IxCustomerSubsubsegmentationDt
};

