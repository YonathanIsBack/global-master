import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesDeposit extends StandardModel {}

ExportSalesDeposit.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesDepositId', DataTypes.BIGINT),
      exportSalesDepositCode: DataTypes.STRING(50),
      exportSalesDepositDate: DataTypes.DATE,
      exportSalesDepositCloseDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.BIGINT,
      note: DataTypes.STRING(2000),
      deposit: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      coaId: DataTypes.BIGINT,
      coaSubleadgerId: DataTypes.BIGINT,
      coaIdTo: DataTypes.BIGINT,
      coaSubleadgerIdTo: DataTypes.BIGINT,
      paymentType: DataTypes.TINYINT,
      status: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_deposit',
    'ExportSalesDeposit',
    sequelize
  )
);
export { ExportSalesDeposit };
