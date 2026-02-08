import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportHppAvgFix extends StandardModel { }

ImportHppAvgFix.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('hppImportAvgFixId', DataTypes.BIGINT),
      itemId: DataTypes.BIGINT,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      hargaCurrency: DataTypes.DOUBLE,
      harga: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('sm_import_hpp_avg_fix', 'ImportHppAvgFix', sequelize)
);

export default ImportHppAvgFix;
