import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerGroup extends StandardModel { }
class IxCustomerGroupDt extends StandardModel { }

IxCustomerGroup.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerGroupId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_group', 'IxCustomerGroup', sequelize)
);

IxCustomerGroupDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerGroupDtId', DataTypes.BIGINT),
      ixCustomerGroupId: DataTypes.BIGINT,
      customerGroupCode: DataTypes.STRING(50),
      customerGroupName: DataTypes.STRING(150),
      isstock: DataTypes.STRING(50),
      isused: DataTypes.TINYINT
    },
    { withIsactive: true, withIsdel: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_group_dt', 'IxCustomerGroupDt', sequelize)
);

export {
  IxCustomerGroup,
  IxCustomerGroupDt
};

