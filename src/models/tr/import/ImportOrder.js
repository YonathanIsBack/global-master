import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ImportOrder extends StandardModel {}
class ImportOrderAdvance extends StandardModel {}
class ImportOrderCreditNote extends StandardModel {}
class ImportOrderDt extends StandardModel {}
class ImportOrderItemDt extends StandardModel {}
class ImportOrderReject extends StandardModel {}
class ImportOrderRequest extends StandardModel {}

ImportOrder.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderId', DataTypes.BIGINT),
      importOrderCode: DataTypes.STRING(50),
      importOrderCodeTemp: DataTypes.STRING(50),
      importOrderDate: DataTypes.DATE,
      importQuoteId: DataTypes.STRING(500),
      importQuoteCode: DataTypes.STRING(500),
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      customerId: DataTypes.BIGINT,
      shippingName: DataTypes.STRING(150),
      shipping: DataTypes.TEXT,
      shippingDate: DataTypes.DATEONLY,
      shipToName: DataTypes.STRING(100),
      shipToAddress: DataTypes.STRING(150),
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      paymentTermId: DataTypes.INTEGER,
      duedate: DataTypes.DATE,
      isvat: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
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
      total: DataTypes.DOUBLE,
      totalInv: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      advAmount: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      noInQuote: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_import_order', 'ImportOrder', sequelize)
);

ImportOrderAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderAdvpayId', DataTypes.BIGINT),
      importOrderId: DataTypes.BIGINT,
      importAdvpayId: DataTypes.BIGINT,
      importAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isquote: DataTypes.TINYINT,
      isadv: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_order_advpay',
    'ImportOrderAdvance',
    sequelize
  )
);

ImportOrderCreditNote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderCreditNoteId', DataTypes.BIGINT),
      importOrderId: DataTypes.BIGINT,
      importCreditNoteId: DataTypes.BIGINT,
      importCreditNoteName: DataTypes.STRING(150),
      importCreditNoteCode: DataTypes.STRING(50),
      traceId: DataTypes.STRING(150),
      isquote: DataTypes.TINYINT,
      nominal: DataTypes.DOUBLE,
      used: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_order_credit_note',
    'ImportOrderCreditNote',
    sequelize
  )
);

ImportOrderDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderDtId', DataTypes.BIGINT),
      importOrderId: DataTypes.BIGINT,
      importQuoteId: DataTypes.BIGINT,
      importQuoteDtId: DataTypes.BIGINT,
      quoteCode: DataTypes.STRING(50),
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(200),
      itemPack: DataTypes.DOUBLE,
      qty: DataTypes.FLOAT,
      qtyQ: DataTypes.FLOAT,
      qtyIr: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
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
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_import_order_dt', 'ImportOrderDt', sequelize)
);

ImportOrderItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderItemDtId', DataTypes.BIGINT),
      importOrderDtId: DataTypes.BIGINT,
      importOrderId: DataTypes.BIGINT,
      importQuoteItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyR: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_order_item_dt',
    'ImportOrderItemDt',
    sequelize
  )
);

ImportOrderReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderRejectId', DataTypes.BIGINT),
      importOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_order_reject',
    'ImportOrderReject',
    sequelize
  )
);

ImportOrderRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('importOrderRequestId', DataTypes.BIGINT),
      importOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_import_order_request',
    'ImportOrderRequest',
    sequelize
  )
);
export {
  ImportOrder,
  ImportOrderAdvance,
  ImportOrderCreditNote,
  ImportOrderDt,
  ImportOrderItemDt,
  ImportOrderReject,
  ImportOrderRequest
};
