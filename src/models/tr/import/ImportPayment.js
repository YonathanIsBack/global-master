import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportPayment extends StandardModel {}
class ImportPaymentAdvancePay extends StandardModel {}
class ImportPaymentCoa extends StandardModel {}
class ImportPaymentCoaTotal extends StandardModel {}
class ImportPaymentCreditNote extends StandardModel {}
class ImportPaymentDt extends StandardModel {}
class ImportPaymentInvoice extends StandardModel {}
class ImportPaymentReject extends StandardModel {}
class ImportPaymentRequest extends StandardModel {}

ImportPayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentId', DataTypes.BIGINT),
      importPaymentCode: DataTypes.STRING(50),
      importPaymentCodeTemp: DataTypes.STRING(50),
      importPaymentDate: DataTypes.DATE,
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      importInvoiceId: DataTypes.STRING(500),
      importInvoiceCode: DataTypes.STRING(500),
      type: DataTypes.TINYINT,
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
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_payment', 'ImportPayment', sequelize)
);

ImportPaymentAdvancePay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentAdvpayId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importAdvpayId: DataTypes.BIGINT,
      importAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT
      // type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_payment_advpay',
    'ImportPaymentAdvancePay',
    sequelize
  )
);

ImportPaymentCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentCoaId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
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
    'tr_import_payment_coa',
    'ImportPaymentCoa',
    sequelize
  )
);

ImportPaymentCoaTotal.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentCoaTotalId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
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
    'tr_import_payment_coa_total',
    'ImportPaymentCoaTotal',
    sequelize
  )
);

ImportPaymentCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentCreditNoteId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importCreditNoteId: DataTypes.BIGINT,
      importCreditNoteName: DataTypes.STRING(150),
      importCreditNoteCode: DataTypes.STRING(50),
      isinv: DataTypes.TINYINT,
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_payment_credit_note',
    'ImportPaymentCreditNote',
    sequelize
  )
);

ImportPaymentDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentDtId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importInvDtId: DataTypes.BIGINT,
      importInvCode: DataTypes.STRING(25),
      importCreditNoteId: DataTypes.STRING(800),
      importCreditNoteCode: DataTypes.STRING(800),
      importCreditNoteHeader: DataTypes.STRING(800),
      creditNoteTotal: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_payment_dt', 'ImportPaymentDt', sequelize)
);

ImportPaymentInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentInvId', DataTypes.BIGINT),
      importPaymentId: DataTypes.INTEGER,
      importInvId: DataTypes.INTEGER,
      importInvCode: DataTypes.STRING(12),
      importInvDate: DataTypes.DATE,
      totalInv: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_payment_inv',
    'ImportPaymentInvoice',
    sequelize
  )
);

ImportPaymentReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPaymentRejectId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_payment_reject',
    'ImportPaymentReject',
    sequelize
  )
);

ImportPaymentRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importPayemntRequestId', DataTypes.BIGINT),
      importPaymentId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_payment_request',
    'ImportPaymentRequest',
    sequelize
  )
);
export {
  ImportPayment,
  ImportPaymentAdvancePay,
  ImportPaymentCoa,
  ImportPaymentCoaTotal,
  ImportPaymentCreditNote,
  ImportPaymentDt,
  ImportPaymentInvoice,
  ImportPaymentRequest
};
