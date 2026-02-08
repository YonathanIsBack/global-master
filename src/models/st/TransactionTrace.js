import { DataTypes } from "sequelize";
import DatabaseConnectionSingleton from "../../configs/DatabaseConnection.js";
import StandardModel from "../StandardModel.js";
const sequelize = DatabaseConnectionSingleton.getConnection();

class TransactionTrace extends StandardModel { }

TransactionTrace.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('transactionTraceId', DataTypes.BIGINT),
      trSalesLocal: DataTypes.BIGINT,
      trSalesExport: DataTypes.BIGINT,
      trOffshoreSales: DataTypes.BIGINT,
      trPurchaseLocal: DataTypes.BIGINT,
      trPurchaseImport: DataTypes.BIGINT,
      trOffshorePurchase: DataTypes.BIGINT,
    },
    { withIsactive: true, withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('st_transaction_trace', 'TransactionTrace', sequelize)
);


export default TransactionTrace;