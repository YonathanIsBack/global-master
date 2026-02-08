import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesAdvancePayment extends StandardModel {}
class SalesAdvancePaymentReject extends StandardModel {}
class SalesAdvancePaymentRequest extends StandardModel {}

SalesAdvancePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesAdvpayId', DataTypes.BIGINT),
      salesOrderId: DataTypes.BIGINT,
      salesOrderCode: DataTypes.STRING(50),
      salesAdvpayCode: DataTypes.STRING(50),
      salesAdvpayCodeTemp: DataTypes.STRING(50),
      salesAdvpayDate: DataTypes.DATE,
      traceId: DataTypes.STRING(50),
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
      vatNo: DataTypes.STRING(50),
      vatTotal: DataTypes.DOUBLE,
      vatDate: DataTypes.DATE,
      totalDp: DataTypes.DOUBLE,
      totalDpUsed: DataTypes.DOUBLE,
      persenVat: DataTypes.DOUBLE,
      totalVat: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      type: DataTypes.STRING(20),
      notes: DataTypes.TEXT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_advanced_payment',
    'SalesAdvancePayment',
    sequelize
  )
);

SalesAdvancePaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesAdvancedPaymentRejectId', DataTypes.BIGINT),
      salesAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_advanced_payment_reject',
    'SalesAdvancePaymentReject',
    sequelize
  )
);

SalesAdvancePaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesAdvancedPaymentRequestId', DataTypes.BIGINT),
      salesAdvancedPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_advanced_payment_request',
    'SalesAdvancePaymentRequest',
    sequelize
  )
);

export { SalesAdvancePayment, SalesAdvancePaymentReject, SalesAdvancePaymentRequest };
