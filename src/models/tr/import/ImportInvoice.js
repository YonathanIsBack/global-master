import { DataTypes } from 'sequelize';
import StandardModel from '../../StandardModel.js';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportInvoice extends StandardModel { }
class ImportInvoiceAdvancePay extends StandardModel { }
class ImportInvoiceCreditNote extends StandardModel { }
class ImportInvoiceDt extends StandardModel { }
class ImportInvoiceItemDt extends StandardModel { }
class ImportInvoicePayment extends StandardModel { }
class ImportInvoiceReject extends StandardModel { }
class ImportInvoiceRequest extends StandardModel { }

ImportInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvId', DataTypes.BIGINT),
      importInvCode: DataTypes.STRING(50),
      importInvCodeTemp: DataTypes.STRING(50),
      importInvDate: DataTypes.DATE,
      importOrderId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(50),
      importReceiveId: DataTypes.STRING(500),
      importReceiveCode: DataTypes.STRING(500),
      importAdvpayId: DataTypes.BIGINT,
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      dueDate: DataTypes.DATE,
      supplierId: DataTypes.INTEGER,
      suppInvNo: DataTypes.STRING(25),
      suppInvDate: DataTypes.DATE,
      suppInvTotal: DataTypes.DOUBLE,
      bc16: { type: DataTypes.STRING(150), field: 'bc_16' },
      bcStatus: { type: DataTypes.STRING(50), field: 'bc_status' },
      ajuNumber: DataTypes.STRING(150),
      ajuDate: DataTypes.DATE,
      customesOffice: DataTypes.STRING(150),
      regisDate: DataTypes.DATE,
      isvat: DataTypes.INTEGER,
      vatNo: DataTypes.STRING(25),
      vatDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // discPersen3: DataTypes.FLOAT,
      // discAmount3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      shippingPrice: DataTypes.DOUBLE,
      handlingPrice: DataTypes.DOUBLE,
      paymentCode: DataTypes.STRING(50),
      total: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalAdvpayPayment: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      totalCreditNotePayment: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      totalReturn: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE,
      pphPersen: DataTypes.FLOAT,
      pphAmount: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      type: DataTypes.STRING(20),
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_inv', 'ImportInvoice', sequelize)
);

ImportInvoiceAdvancePay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvAdvpayId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importOrderAdvpayId: DataTypes.STRING(20),
      importAdvpayId: DataTypes.STRING(20),
      importAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isorder: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_advpay',
    'ImportInvoiceAdvancePay',
    sequelize
  )
);

ImportInvoiceCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvCreditNoteId', DataTypes.BIGINT),
      importCreditNoteAdvpayId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importCreditNoteId: DataTypes.BIGINT,
      importCreditNoteName: DataTypes.STRING(150),
      importCreditNoteCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      isorder: DataTypes.TINYINT,
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_credit_note',
    'ImportInvoiceCreditNote',
    sequelize
  )
);

ImportInvoiceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvDtId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importOrderDtId: DataTypes.BIGINT,
      importOrderCode: DataTypes.STRING(150),
      importReceiveId: DataTypes.BIGINT,
      importReceiveDtId: DataTypes.BIGINT,
      importReceiveCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.DOUBLE,
      qty: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      qtyReceive: DataTypes.DOUBLE,
      qtyIp: DataTypes.DOUBLE,
      qtyIr: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      pricePack: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      adjInvType: DataTypes.INTEGER,
      adjInv: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      grandTotal: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_inv_dt', 'ImportInvoiceDt', sequelize)
);

ImportInvoiceItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvItemDtId', DataTypes.BIGINT),
      importInvDtId: DataTypes.BIGINT,
      importInvId: DataTypes.BIGINT,
      importReceiveItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.DOUBLE,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyR: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_item_dt',
    'ImportInvoiceItemDt',
    sequelize
  )
);

ImportInvoicePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvPaymentId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      importAdvpayId: DataTypes.BIGINT,
      traceId: DataTypes.BIGINT,
      paymentCode: DataTypes.STRING(50),
      dpAmount: DataTypes.DOUBLE,
      dpUsed: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_payment',
    'ImportInvoicePayment',
    sequelize
  )
);

ImportInvoiceReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvRejectId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_reject',
    'ImportInvoiceReject',
    sequelize
  )
);

ImportInvoiceRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importInvRequestId', DataTypes.BIGINT),
      importInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_inv_request',
    'ImportInvoiceRequest',
    sequelize
  )
);
export {
  ImportInvoice,
  ImportInvoiceAdvancePay,
  ImportInvoiceCreditNote,
  ImportInvoiceDt,
  ImportInvoiceItemDt,
  ImportInvoicePayment,
  ImportInvoiceReject,
  ImportInvoiceRequest
};
