import { DataTypes } from 'sequelize';
import StandardModel from './StandardModel.js';
import DatabaseConnectionSingleton from '../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class LogTransaksi extends StandardModel { }

LogTransaksi.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('logTransaksiId', DataTypes.BIGINT),
      id: DataTypes.BIGINT,
      transactionCode: DataTypes.STRING(50),
      transactionType: DataTypes.INTEGER,
      page: DataTypes.STRING(50),
      before: DataTypes.TEXT,
      after: DataTypes.TEXT,
      status: DataTypes.STRING(25),
      ip: DataTypes.STRING(50)
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('log_transaksi', 'LogTransaksi', sequelize)
);

export default LogTransaksi;
