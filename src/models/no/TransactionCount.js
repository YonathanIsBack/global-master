import { DataTypes } from 'sequelize';
import StandardModel from '../StandardModel.js';
import DatabaseConnectionSingleton from '../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class TransactionCount extends StandardModel {}

TransactionCount.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('noTransactionCountId', DataTypes.BIGINT),
      noTransactionId: DataTypes.BIGINT,
      transactionYear: DataTypes.BIGINT,
      transactionMonth: DataTypes.BIGINT,
      transactionWeek: DataTypes.BIGINT,
      transactionDays: DataTypes.BIGINT,
      currentNumber: DataTypes.BIGINT
    },
    {}
  ),

  StandardModel.buildStandardModelInformation('no_transaction_count', 'TransactionCount', sequelize)
);

export default TransactionCount;
