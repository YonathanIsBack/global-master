import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesPayment extends StandardModel {}
class ExportSalesPaymentAdvance extends StandardModel {}
class ExportSalesPaymentCoa extends StandardModel {}
class ExportSalesPaymentCoaS extends StandardModel {}
class ExportSalesPaymentCoaT extends StandardModel {}
class ExportSalesPaymentCoaTotal extends StandardModel {}
class ExportSalesPaymentDeposit extends StandardModel {}
class ExportSalesPaymentDt extends StandardModel {}
class ExportSalesPaymentReject extends StandardModel {}
class ExportSalesPaymentRequest extends StandardModel {}

ExportSalesPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentId', DataTypes.BIGINT),
      exportSalesPaymentCode: DataTypes.STRING(50),
      exportSalesPaymentCodeTemp: DataTypes.STRING(50),
      exportSalesPaymentDate: DataTypes.DATE,
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.STRING(50),
      exportSalesInvId: DataTypes.STRING(500),
      exportSalesInvCode: DataTypes.STRING(500),
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
      paymentDate: DataTypes.DATEONLY,
      paymentClearDate: DataTypes.DATEONLY,
      isvat: DataTypes.TINYINT,
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
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment',
    'ExportSalesPayment',
    sequelize
  )
);

ExportSalesPaymentAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentAdvpayId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesAdvpayId: DataTypes.BIGINT,
      exportSalesAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_advpay',
    'ExportSalesPaymentAdvance',
    sequelize
  )
);
ExportSalesPaymentCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentCoaId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerName: DataTypes.STRING(50),
      coaSubleadgerCode: DataTypes.STRING(50),
      payment: DataTypes.BIGINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      clearDate: DataTypes.DATE,
      value: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_coa',
    'ExportSalesPaymentCoa',
    sequelize
  )
);
ExportSalesPaymentCoaS.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentCoaSId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerName: DataTypes.STRING(50),
      coaSubleadgerCode: DataTypes.STRING(50),
      payment: DataTypes.BIGINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      clearDate: DataTypes.DATE,
      value: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_coa_s',
    'ExportSalesPaymentCoaS',
    sequelize
  )
);
ExportSalesPaymentCoaT.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentCoaTId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerName: DataTypes.STRING(50),
      coaSubleadgerCode: DataTypes.STRING(50),
      payment: DataTypes.BIGINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      clearDate: DataTypes.DATE,
      value: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_coa_t',
    'ExportSalesPaymentCoaT',
    sequelize
  )
);
ExportSalesPaymentCoaTotal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentCoaTotalId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      total: DataTypes.DOUBLE,
      type: DataTypes.STRING(50)
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_coa_total',
    'ExportSalesPaymentCoaTotal',
    sequelize
  )
);

ExportSalesPaymentDeposit.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentDepositId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      exportSalesDepositId: DataTypes.BIGINT,
      exportSalesDepositDate: DataTypes.DATE,
      exportSalesDepositCode: DataTypes.STRING(50),
      nominal: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_deposit',
    'ExportSalesPaymentDeposit',
    sequelize
  )
);

ExportSalesPaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentDtId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesInvDtId: DataTypes.BIGINT,
      exportSalesInvCode: DataTypes.STRING(25),
      exportSalesInvDate: DataTypes.DATE,
      total: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_dt',
    'ExportSalesPaymentDt',
    sequelize
  )
);

ExportSalesPaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentRejectId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_reject',
    'ExportSalesPaymentReject',
    sequelize
  )
);

ExportSalesPaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesPaymentRequestId', DataTypes.BIGINT),
      exportSalesPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_payment_request',
    'ExportSalesPaymentRequest',
    sequelize
  )
);

export {
  ExportSalesPayment,
  ExportSalesPaymentAdvance,
  ExportSalesPaymentCoa,
  ExportSalesPaymentCoaS,
  ExportSalesPaymentCoaT,
  ExportSalesPaymentCoaTotal,
  ExportSalesPaymentDeposit,
  ExportSalesPaymentDt,
  ExportSalesPaymentReject,
  ExportSalesPaymentRequest
};
