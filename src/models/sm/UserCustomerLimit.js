import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class UserCustomerLimit extends StandardModel { }

UserCustomerLimit.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('userCustomerLimitId', DataTypes.BIGINT),
      userId: DataTypes.BIGINT,
      customerId: DataTypes.BIGINT,
      limitUsed: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('sm_user_customer_limit', 'UserCustomerLimit', sequelize)
);

export default UserCustomerLimit;
