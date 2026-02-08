import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesPayment extends StandardModel { }
class SalesPaymentAdvance extends StandardModel { }
class SalesPaymentCoa extends StandardModel { }
class SalesPaymentCoaTotal extends StandardModel { }
class SalesPaymentDeposit extends StandardModel { }
class SalesPaymentDt extends StandardModel { }
class SalesPaymentInvoice extends StandardModel { }
class SalesPaymentReject extends StandardModel { }
class SalesPaymentRequest extends StandardModel { }

SalesPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentId', DataTypes.BIGINT),
      salesPaymentCode: DataTypes.STRING(50),
      salesPaymentCodeTemp: DataTypes.STRING(50),
      salesPaymentDate: DataTypes.INTEGER,
      salesOrderId: DataTypes.BIGINT,
      salesOrderCode: DataTypes.STRING(500),
      salesInvId: DataTypes.STRING(500),
      salesInvCode: DataTypes.STRING(500),
      type: DataTypes.TINYINT,
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      customerBankId: DataTypes.INTEGER,
      swiftCode: DataTypes.STRING(50),
      customerPaymentId: DataTypes.BIGINT,
      customerBankAccountNo: DataTypes.STRING(25),
      customerBankAccountName: DataTypes.STRING(150),
      bankId: DataTypes.INTEGER,
      bankCompanyId: DataTypes.INTEGER,
      bankAccountNo: DataTypes.STRING(25),
      bankAccountName: DataTypes.STRING(150),
      branch: DataTypes.STRING(100),
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      notes: DataTypes.TEXT,
      coaBankId: DataTypes.INTEGER,
      coaId: DataTypes.INTEGER,
      coaSubleadgerId: DataTypes.INTEGER,
      paymentMethod: DataTypes.INTEGER,
      paymentNo: DataTypes.STRING(25),
      paymentDate: DataTypes.DATE,
      paymentClearDate: DataTypes.DATE,
      isvat: DataTypes.INTEGER,
      totalCoa: DataTypes.DOUBLE,
      totalInvoice: DataTypes.DOUBLE,
      totalPayment: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalDeposit: DataTypes.DOUBLE,
      sisaInvoice: DataTypes.DOUBLE,
      gain: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment', 'SalesPayment', sequelize)
);

SalesPaymentAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentAdvpayId', DataTypes.BIGINT),
      salesInvAdvpayId: DataTypes.BIGINT,
      salesPaymentId: DataTypes.BIGINT,
      salesInvId: DataTypes.BIGINT,
      salesAdvpayId: DataTypes.BIGINT,
      salesAdvpayCode: DataTypes.BIGINT,
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_advpay', 'SalesPaymentAdvance', sequelize)
);

SalesPaymentCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentCoaId', DataTypes.BIGINT),
      salesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaName: DataTypes.STRING(50),
      coaCode: DataTypes.STRING(50),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerCode: DataTypes.STRING(50),
      coaSubleadgerName: DataTypes.STRING(50),
      payment: DataTypes.BIGINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      clearDate: DataTypes.DATE,
      value: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_coa', 'SalesPaymentCoa', sequelize)
);

SalesPaymentCoaTotal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentCoaTotalId', DataTypes.BIGINT),
      salesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      total: DataTypes.DOUBLE,
      type: DataTypes.STRING(50)
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_coa_total', 'SalesPaymentCoaTotal', sequelize)
);

SalesPaymentDeposit.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentDepositId', DataTypes.BIGINT),
      salesInvDepositId: DataTypes.BIGINT,
      salesPaymentId: DataTypes.BIGINT,
      salesInvId: DataTypes.BIGINT,
      salesDepositId: DataTypes.BIGINT,
      salesDepositDate: DataTypes.DATE,
      salesDepositCode: DataTypes.STRING(50),
      nominal: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_deposit', 'SalesPaymentDeposit', sequelize)
);

SalesPaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentDtId', DataTypes.BIGINT),
      salesPaymentId: DataTypes.BIGINT,
      salesInvId: DataTypes.BIGINT,
      salesInvDtId: DataTypes.BIGINT,
      salesInvCode: DataTypes.STRING(50),
      salesInvDate: DataTypes.DATEONLY,
      total: DataTypes.DOUBLE,
      totalAdvPayment: DataTypes.DOUBLE,
      totalDeposit: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_dt', 'SalesPaymentDt', sequelize)
);

SalesPaymentInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentInvoiceId', DataTypes.BIGINT),
      salesPaymentId: DataTypes.INTEGER,
      invoiceId: DataTypes.INTEGER,
      invoiceCode: DataTypes.STRING(12),
      invoiceDate: DataTypes.DATE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_inv', 'SalesPaymentInvoice', sequelize)
);

SalesPaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentRejectId', DataTypes.BIGINT),
      salesPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_reject', 'SalesPaymentReject', sequelize)
);

SalesPaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesPaymentRequestId', DataTypes.BIGINT),
      salesPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_payment_request', 'SalesPaymentRequest', sequelize)
);

export {
  SalesPayment,
  SalesPaymentAdvance,
  SalesPaymentCoa,
  SalesPaymentCoaTotal,
  SalesPaymentDeposit,
  SalesPaymentDt,
  SalesPaymentInvoice,
  SalesPaymentReject,
  SalesPaymentRequest
};
