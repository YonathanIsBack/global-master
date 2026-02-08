import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshorePurchasePayment extends StandardModel { }
class OffshorePurchasePaymentDt extends StandardModel { }
class OffshorePurchasePaymentAdvpay extends StandardModel { }
class OffshorePurchasePaymentCoa extends StandardModel { }
class OffshorePurchasePaymentCoaTotal extends StandardModel { }
class OffshorePurchasePaymentCreditNote extends StandardModel { }
class OffshorePurchasePaymentReject extends StandardModel { }
class OffshorePurchasePaymentRequest extends StandardModel { }

OffshorePurchasePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentId', DataTypes.BIGINT),
      offshorePurchasePaymentCode: DataTypes.STRING(150),
      offshorePurchasePaymentCodeTemp: DataTypes.STRING(150),
      offshorePurchasePaymentDate: DataTypes.DATE,
      offshorePurchaseInvoiceId: DataTypes.BIGINT,
      offshorePurchaseInvoiceCode: DataTypes.STRING(150),
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.BIGINT,
      supplierBankId: DataTypes.BIGINT,
      supplierPaymentId: DataTypes.BIGINT,
      supplierBankAccountNo: DataTypes.STRING(100),
      supplierBankAccountName: DataTypes.STRING(150),
      swiftCode: DataTypes.STRING(100),
      bankId: DataTypes.BIGINT,
      bankCompanyId: DataTypes.BIGINT,
      bankAccountNo: DataTypes.STRING(100),
      bankAccountName: DataTypes.STRING(150),
      branch: DataTypes.STRING(150),
      currencyId: DataTypes.BIGINT,
      currencyRate: DataTypes.DOUBLE,
      notes: DataTypes.TEXT,
      totalCoa: DataTypes.DOUBLE,
      totalInvoice: DataTypes.DOUBLE,
      totalPayment: DataTypes.DOUBLE,
      sisaInvoice: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      totalAdvPay: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
      isedit: DataTypes.TINYINT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.BIGINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.BIGINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_payment', 'OffshorePurchasePayment', sequelize)
);

OffshorePurchasePaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentDtId', DataTypes.BIGINT),
      offshorePurchasePaymentId: DataTypes.BIGINT,
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseInvDtId: DataTypes.BIGINT,
      offshorePurchaseInvCode: DataTypes.STRING(150),
      offshorePurchaseCreditNoteId: DataTypes.BIGINT,
      offshorePurchaseCreditNoteCode: DataTypes.STRING(150),
      offshorePurchaseCreditNoteHeader: DataTypes.STRING(150),
      creditNoteTotal: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_dt',
    'OffshorePurchasePaymentDt',
    sequelize
  )
);

OffshorePurchasePaymentAdvpay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentAdvpayId', DataTypes.BIGINT),
      offshorePurchasePaymentId: DataTypes.BIGINT,
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseAdvpayId: DataTypes.BIGINT,
      offshorePurchaseAdvpayCode: DataTypes.STRING(150),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isnv: DataTypes.TINYINT,
      type: DataTypes.STRING(50),
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_advpay',
    'OffshorePurchasePaymentAdvpay',
    sequelize
  )
);

OffshorePurchasePaymentCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentCoaId', DataTypes.BIGINT),
      offshorePurchasePaymentId: DataTypes.BIGINT,
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
      value: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_coa',
    'OffshorePurchasePaymentCoa',
    sequelize
  )
);

OffshorePurchasePaymentCoaTotal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentCoaTotal', DataTypes.BIGINT),
      offshorePurchasePaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      note: DataTypes.TEXT,
      total: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_coa_total',
    'OffshorePurchasePaymentCoaTotal',
    sequelize
  )
);

OffshorePurchasePaymentCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentCreditNoteId', DataTypes.BIGINT),
      offshorePurchasePaymentId: DataTypes.BIGINT,
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseCreditNoteId: DataTypes.BIGINT,
      offshorePurchaseCreditNoteCode: DataTypes.STRING(150),
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT,
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_credit_note',
    'OffshorePurchasePaymentCreditNote',
    sequelize
  )
);

OffshorePurchasePaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentRejectId', DataTypes.BIGINT),
      offshorePurchasePaymentReject: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_reject',
    'OffshorePurchasePaymentReject',
    sequelize
  )
);

OffshorePurchasePaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchasePaymentRequestId', DataTypes.BIGINT),
      offshorePurchasePaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_payment_request',
    'OffshorePurchasePaymentRequest',
    sequelize
  )
);

export {
  OffshorePurchasePayment, OffshorePurchasePaymentAdvpay,
  OffshorePurchasePaymentCoa,
  OffshorePurchasePaymentCoaTotal,
  OffshorePurchasePaymentCreditNote, OffshorePurchasePaymentDt, OffshorePurchasePaymentReject,
  OffshorePurchasePaymentRequest
};

