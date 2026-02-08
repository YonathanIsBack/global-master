import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class LocalHppAvg extends StandardModel {}

LocalHppAvg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('hppLocalAvgId', DataTypes.BIGINT),
      transactionId: DataTypes.BIGINT,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(100),
      transactionType: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      harga: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('sm_local_hpp_avg', 'LocalHppAvg', sequelize)
);

export default LocalHppAvg;
