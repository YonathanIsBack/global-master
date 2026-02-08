import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
import StandardModel from './StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class Transaction extends StandardModel {}

Transaction.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('noTransactionId', DataTypes.BIGINT),
      noTransactionName: DataTypes.STRING(50),
      noTransactionPrefix: DataTypes.STRING(25),
      digit: DataTypes.TINYINT,
      resetTime: DataTypes.TINYINT,
      coaId: DataTypes.BIGINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('no_transaction', 'Transaction', sequelize)
);

export default Transaction;
