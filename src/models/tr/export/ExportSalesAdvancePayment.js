import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesAdvancePayment extends StandardModel {}
class ExportSalesAdvancePaymentReject extends StandardModel {}
class ExportSalesAdvancePaymentRequest extends StandardModel {}

ExportSalesAdvancePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesAdvpayId', DataTypes.BIGINT),
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.STRING(50),
      exportSalesAdvpayCode: DataTypes.STRING(50),
      exportSalesAdvpayCodeTemp: DataTypes.STRING(50),
      exportSalesAdvpayDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      customerBankId: DataTypes.INTEGER,
      customerBankAccountNo: DataTypes.STRING(25),
      customerBankAccountName: DataTypes.STRING(150),
      bankId: DataTypes.INTEGER,
      bankCompanyId: DataTypes.INTEGER,
      bankAccountNo: DataTypes.STRING(25),
      bankAccountName: DataTypes.STRING(150),
      coaId: DataTypes.BIGINT,
      taxNo: DataTypes.STRING(25),
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      percentOrder: DataTypes.DOUBLE,
      totalOrder: DataTypes.DOUBLE,
      totalDp: DataTypes.DOUBLE,
      totalDpUsed: DataTypes.DOUBLE,
      persenVat: DataTypes.FLOAT,
      totalVat: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      notes: DataTypes.TEXT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_advanced_payment', 'ExportSalesAdvancedPayment', sequelize)
);

ExportSalesAdvancePaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesAdvancedPaymentRejectId', DataTypes.BIGINT),
      exportSalesAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_advanced_payment_reject', 'ExportSalesAdvancedPaymentReject', sequelize)
);

ExportSalesAdvancePaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesAdvancedPaymentRequestId', DataTypes.BIGINT),
      exportSalesAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_advanced_payment_request', 'ExportSalesAdvancedPaymentRequest', sequelize)
);
export { ExportSalesAdvancePayment, ExportSalesAdvancePaymentReject, ExportSalesAdvancePaymentRequest };
