import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportHppAvgRecord extends StandardModel {}

ImportHppAvgRecord.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('hppImportAvgRecordId', DataTypes.BIGINT),
      transactionId: DataTypes.BIGINT,
      transactionDate: DataTypes.DATE,
      transactionCode: DataTypes.STRING(100),
      transactionType: DataTypes.INTEGER,
      itemId: DataTypes.BIGINT,
      currencyId: DataTypes.INTEGER,
      rate: DataTypes.DOUBLE,
      hargaCurrency: DataTypes.DOUBLE,
      qtyIn: DataTypes.INTEGER,
      qtyOut: DataTypes.INTEGER,
      harga: DataTypes.DOUBLE,
      totalQty: DataTypes.BIGINT,
      hargaFix: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation('sm_import_hpp_avg_record', 'ImportHppAvgRecord', sequelize)
);

export default ImportHppAvgRecord;
