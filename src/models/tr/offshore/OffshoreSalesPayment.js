import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshoreSalesPayment extends StandardModel { }
class OffshoreSalesPaymentDt extends StandardModel { }
class OffshoreSalesPaymentCoa extends StandardModel { }
class OffshoreSalesPaymentReject extends StandardModel { }
class OffshoreSalesPaymentRequest extends StandardModel { }

OffshoreSalesPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesPaymentId', DataTypes.BIGINT),
      offshoreSalesPaymentCode: DataTypes.STRING(150),
      offshoreSalesPaymentCodeTemp: DataTypes.STRING(150),
      offshoreSalesPaymentDate: DataTypes.DATEONLY,
      offshoreSalesInvoiceId: DataTypes.BIGINT,
      offshoreSalesInvoiceCode: DataTypes.STRING(150),
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.BIGINT,
      customerBankId: DataTypes.BIGINT,
      customerPaymentId: DataTypes.BIGINT,
      customerBankAccountNo: DataTypes.STRING(100),
      customerBankAccountName: DataTypes.STRING(150),
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      notes: DataTypes.TEXT,
      totalCoa: DataTypes.DOUBLE,
      totalInvoice: DataTypes.DOUBLE,
      totalPayment: DataTypes.DOUBLE,
      sisaInvoice: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_sales_payment', 'OffshoreSalesPayment', sequelize)
);

OffshoreSalesPaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesPaymentDtId', DataTypes.BIGINT),
      offshoreSalesPaymentId: DataTypes.BIGINT,
      offshoreSalesInvId: DataTypes.BIGINT,
      offshoreSalesInvDtId: DataTypes.BIGINT,
      offshoreSalesInvCode: DataTypes.STRING(150),
      creditNoteTotal: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_sales_payment_dt', 'OffshoreSalesPaymentDt', sequelize)
);

OffshoreSalesPaymentCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesPaymentCoaId', DataTypes.BIGINT),
      offshoreSalesPaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(150),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerName: DataTypes.STRING(150),
      coaSubleadgerCode: DataTypes.STRING(100),
      payment: DataTypes.STRING(100),
      paymentNumber: DataTypes.STRING(100),
      paymentDate: DataTypes.DATEONLY,
      clearDate: DataTypes.DATEONLY,
      value: DataTypes.DOUBLE,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_sales_payment_coa',
    'OffshoreSalesPaymentCoa',
    sequelize
  )
);

OffshoreSalesPaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesPaymentRejectId', DataTypes.BIGINT),
      offshoreSalesPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_sales_payment_reject',
    'OffshoreSalesPaymentReject',
    sequelize
  )
);

OffshoreSalesPaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshoreSalesPaymentRequestId', DataTypes.BIGINT),
      offshoreSalesPaymentId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_sales_payment_request',
    'OffshoreSalesPaymentRequest',
    sequelize
  )
);

export {
  OffshoreSalesPayment,
  OffshoreSalesPaymentDt,
  OffshoreSalesPaymentCoa,
  OffshoreSalesPaymentReject,
  OffshoreSalesPaymentRequest
};
