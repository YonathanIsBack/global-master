import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class HppAvgFix extends StandardModel { }

HppAvgFix.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('hppAvgFixId', DataTypes.BIGINT),
      itemId: DataTypes.BIGINT,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      hargaCurrency: DataTypes.DOUBLE,
      harga: DataTypes.DOUBLE,
      // hargaCurrencyT: DataTypes.DOUBLE,
      // hargaT: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_hpp_avg_fix', 'HppAvgFix', sequelize)
);

export default HppAvgFix;
