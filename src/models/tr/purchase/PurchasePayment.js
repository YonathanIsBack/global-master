import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchasePayment extends StandardModel {}
class PurchasePaymentAdvance extends StandardModel {}
class PurchasePaymentCoa extends StandardModel {}
class PurchasePaymentCoaTotal extends StandardModel {}
class PurchasePaymentCreditNote extends StandardModel {}
class PurchasePaymentDt extends StandardModel {}
class PurchasePaymentImg extends StandardModel {}
class PurchasePaymentInvoice extends StandardModel {}
class PurchasePaymentReject extends StandardModel {}
class PurchasePaymentRequest extends StandardModel {}

PurchasePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentId', DataTypes.BIGINT),
      purchasePaymentCode: DataTypes.STRING(50),
      purchasePaymentCodeTemp: DataTypes.STRING(50),
      purchasePaymentDate: DataTypes.DATE,
      purchaseOrderId: DataTypes.BIGINT,
      purchaseOrderCode: DataTypes.STRING(50),
      purchaseInvoiceId: DataTypes.STRING(500),
      purchaseInvoiceCode: DataTypes.STRING(500),
      typeColumn: { type: DataTypes.TINYINT, field: 'type' },
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      supplierId: DataTypes.INTEGER,
      supplierBankId: DataTypes.INTEGER,
      swiftCode: DataTypes.STRING(50),
      supplierPaymentId: DataTypes.BIGINT,
      supplierBankAccountNo: DataTypes.STRING(25),
      supplierBankAccountName: DataTypes.STRING(150),
      bankId: DataTypes.INTEGER,
      bankCompanyId: DataTypes.INTEGER,
      bankAccountId: DataTypes.INTEGER,
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
      isvat: DataTypes.TINYINT,
      totalCoa: DataTypes.DOUBLE,
      totalInvoice: DataTypes.DOUBLE,
      totalPayment: DataTypes.DOUBLE,
      sisaInvoice: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      gain: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_payment', 'PurchasePayment', sequelize)
);

PurchasePaymentAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentAdvpayId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      purchaseInvId: DataTypes.BIGINT,
      purchaseAdvpayId: DataTypes.BIGINT,
      purchaseAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isinvoice: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_advpay',
    'PurchasePaymentAdvance',
    sequelize
  )
);

PurchasePaymentCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentCoaId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(50),
      coaName: DataTypes.STRING(50),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerName: DataTypes.STRING(50),
      coaSubleadgerCode: DataTypes.STRING(50),
      payment: DataTypes.BIGINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATEONLY,
      clearDate: DataTypes.DATEONLY,
      value: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_coa',
    'PurchasePaymentCoa',
    sequelize
  )
);

PurchasePaymentCoaTotal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentCoaTotalId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
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
    'tr_purchase_payment_coa_total',
    'PurchasePaymentCoaTotal',
    sequelize
  )
);

PurchasePaymentCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentCreditNoteId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      purchaseCreditNoteId: DataTypes.BIGINT,
      purchaseCreditNoteName: DataTypes.STRING(150),
      purchaseCreditNoteCode: DataTypes.STRING(50),
      nominal: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_credit_note',
    'PurchasePaymentCreditNote',
    sequelize
  )
);

PurchasePaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentDtId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      purchaseInvId: DataTypes.BIGINT,
      purchaseInvDtId: DataTypes.BIGINT,
      purchaseInvCode: DataTypes.STRING(50),
      total: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_dt',
    'PurchasePaymentDt',
    sequelize
  )
);

PurchasePaymentImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentImgId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      imgName: DataTypes.STRING(150),
      urlImg: DataTypes.STRING(500)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_img',
    'PurchasePaymentImg',
    sequelize
  )
);

PurchasePaymentInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentInvoiceId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.INTEGER,
      invoiceId: DataTypes.INTEGER,
      invoiceCode: DataTypes.STRING(12),
      invoiceDate: DataTypes.DATE,
      totalInvoice: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_invoice',
    'PurchasePaymentInvoice',
    sequelize
  )
);

PurchasePaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentRejectId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_reject',
    'PurchasePaymentReject',
    sequelize
  )
);

PurchasePaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchasePaymentRequestId', DataTypes.BIGINT),
      purchasePaymentId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_payment_request',
    'PurchasePaymentRequest',
    sequelize
  )
);

export {
  PurchasePayment,
  PurchasePaymentAdvance,
  PurchasePaymentCoa,
  PurchasePaymentCoaTotal,
  PurchasePaymentCreditNote,
  PurchasePaymentDt,
  PurchasePaymentReject,
  PurchasePaymentRequest,
  PurchasePaymentImg,
  PurchasePaymentInvoice
};
