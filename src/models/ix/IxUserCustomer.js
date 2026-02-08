import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxUserCustomer extends StandardModel { }
class IxUserCustomerDt extends StandardModel { }

IxUserCustomer.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserCustomerId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_user_customer', 'IxUserCustomer', sequelize)
);

IxUserCustomerDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixUserCustomerDtId', DataTypes.BIGINT),
      ixUserCustomerId: DataTypes.BIGINT,
      username: DataTypes.STRING(150),
      customerCode: DataTypes.STRING(150),
      customerName: DataTypes.STRING(150),
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('ix_user_customer_dt', 'IxUserCustomer', sequelize)
);

export {
  IxUserCustomer,
  IxUserCustomerDt
};

