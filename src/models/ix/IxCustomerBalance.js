import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";

const sequelize = DatabaseConnectionSingleton.getConnection();

class IxCustomerBalance extends StandardModel { }
class IxCustomerBalanceDt extends StandardModel { }

IxCustomerBalance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerBalanceId', DataTypes.BIGINT),
      fileName: DataTypes.STRING(50),
      totalData: DataTypes.INTEGER,
      totalInsert: DataTypes.INTEGER,
      totalUpdate: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_balance', 'IxCustomerBalance', sequelize)
);

IxCustomerBalanceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('ixCustomerBalanceDtId', DataTypes.BIGINT),
      ixCustomerBalanceId: DataTypes.BIGINT,
      invoiceNumber: DataTypes.STRING(50),
      ref: DataTypes.STRING(50),
      customerCode: DataTypes.STRING(50),
      customerName: DataTypes.STRING(100),
      trx: DataTypes.STRING(100),
      tempo: DataTypes.STRING(50),
      invoiceDate: DataTypes.STRING(100),
      tempoDate: DataTypes.STRING(50),
      saldo: DataTypes.STRING(100),
      status: DataTypes.TINYINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('ix_customer_balance_dt', 'IxCustomerBalanceDt', sequelize)
);

export {
  IxCustomerBalance,
  IxCustomerBalanceDt
};

