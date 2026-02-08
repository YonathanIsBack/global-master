import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class OffshorePurchaseInvoice extends StandardModel { }
class OffshorePurchaseInvoiceAdvance extends StandardModel { }
class OffshorePurchaseInvoiceCreditNote extends StandardModel { }
class OffshorePurchaseInvoiceDt extends StandardModel { }
class OffshorePurchaseInvoiceItemDt extends StandardModel { }
class OffshorePurchaseInvoiceReject extends StandardModel { }
class OffshorePurchaseInvoiceRequest extends StandardModel { }

OffshorePurchaseInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvId', DataTypes.BIGINT),
      offshorePurchaseInvCode: DataTypes.STRING(150),
      offshorePurchaseInvCodeTemp: DataTypes.STRING(150),
      offshorePurchaseInvDate: DataTypes.DATEONLY,
      offshorePurchaseOrderId: DataTypes.BIGINT,
      offshorePurchaseOrderCode: DataTypes.STRING(150),
      offshorePurchaseReceiveId: DataTypes.BIGINT,
      offshorePurchaseReceiveCode: DataTypes.STRING(150),
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      supplierInvoiceNumber: DataTypes.STRING(150),
      supplierInvoiceDate: DataTypes.DATEONLY,
      supplierInvoiceTotal: DataTypes.DOUBLE,
      vatNo: DataTypes.STRING(25),
      vatDate: DataTypes.DATE,
      warehouseId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      topDays: DataTypes.INTEGER,
      dueDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalShipping: DataTypes.DOUBLE,
      totalAdvPay: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      totalAdvpayPayment: DataTypes.DOUBLE,
      totalCreditNotePayment: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      isedit: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_inv', 'OffshorePurchaseInvoice', sequelize)
);

OffshorePurchaseInvoiceAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvAdvpayId', DataTypes.BIGINT),
      offshorePurchaseAdvpayId: DataTypes.BIGINT,
      offshorePurchaseOrderAdvpayId: DataTypes.BIGINT,
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseAdvpayCode: DataTypes.STRING(150),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isorder: DataTypes.DOUBLE,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_inv_advpay',
    'OffshorePurchaseInvoiceAdvance',
    sequelize
  )
);

OffshorePurchaseInvoiceCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvCreditNoteId', DataTypes.BIGINT),
      offshorePurchaseCreditNoteId: DataTypes.BIGINT,
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseCreditNoteName: DataTypes.STRING(150),
      offshorePurchaseCreditNoteCode: DataTypes.STRING(150),
      nominal: DataTypes.DOUBLE,
      isorder: DataTypes.TINYINT,
      used: DataTypes.DOUBLE,
      isinv: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_inv_advpay',
    'OffshorePurchaseInvoiceAdvance',
    sequelize
  )
);

OffshorePurchaseInvoiceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvDtId', DataTypes.BIGINT),
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseOrderDtId: DataTypes.BIGINT,
      offshorePurchaseOrderCode: DataTypes.STRING(150),
      offshorePurchaseReceiveId: DataTypes.BIGINT,
      offshorePurchaseReceiveDtId: DataTypes.BIGINT,
      offshorePurchaseReceiveCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      itemPack: DataTypes.STRING(50),
      qty: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      qtyReceive: DataTypes.DOUBLE,
      qtyIp: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      grandTotal: DataTypes.DOUBLE,
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_offshore_purchase_inv_dt', 'OffshorePurchaseInvoiceDt', sequelize)
);

OffshorePurchaseInvoiceItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvItemDtId', DataTypes.BIGINT),
      offshorePurchaseInvDtId: DataTypes.BIGINT,
      offshorePurchaseInvId: DataTypes.BIGINT,
      offshorePurchaseReceiveItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemPack: DataTypes.STRING(50),
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyR: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_inv_item_dt',
    'OffshorePurchaseInvoiceItemDt',
    sequelize
  )
);

OffshorePurchaseInvoiceReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvRejectId', DataTypes.BIGINT),
      offshorePurchaseInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_inv_reject',
    'OffshorePurchaseInvoiceReject',
    sequelize
  )
);

OffshorePurchaseInvoiceRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('offshorePurchaseInvRequestId', DataTypes.BIGINT),
      offshorePurchaseInvId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_offshore_purchase_inv_request',
    'OffshorePurchaseInvoiceRequest',
    sequelize
  )
);

export {
  OffshorePurchaseInvoice,
  OffshorePurchaseInvoiceAdvance,
  OffshorePurchaseInvoiceCreditNote,
  OffshorePurchaseInvoiceDt,
  OffshorePurchaseInvoiceItemDt,
  OffshorePurchaseInvoiceReject,
  OffshorePurchaseInvoiceRequest
};
