import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class HppAvg extends StandardModel {}

HppAvg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('hppAvgId', DataTypes.BIGINT),
      transactionId: DataTypes.BIGINT,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(100),
      transactionType: DataTypes.INTEGER,
      itemId: DataTypes.BIGINT,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      hargaCurrency: DataTypes.DOUBLE,
      qty: DataTypes.INTEGER,
      harga: DataTypes.DOUBLE,
      totalQty: DataTypes.BIGINT,
      hargaFix: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('sm_hpp_avg', 'HppAvg', sequelize)
);

export default HppAvg;
