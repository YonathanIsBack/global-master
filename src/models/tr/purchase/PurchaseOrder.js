import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseOrder extends StandardModel {}
class PurchaseOrderAdvance extends StandardModel {}
class PurchaseOrderDt extends StandardModel {}
class PurchaseOrderImg extends StandardModel {}
class PurchaseOrderItemDt extends StandardModel {}
class PurchaseOrderReject extends StandardModel {}
class PurchaseOrderRequest extends StandardModel {}

PurchaseOrder.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderId', DataTypes.BIGINT),
      purchaseOrderCode: DataTypes.STRING(50),
      purchaseOrderCodeTemp: DataTypes.STRING(50),
      purchaseOrderDate: DataTypes.DATE,
      purchaseQuoteId: DataTypes.STRING(500),
      purchaseQuoteCode: DataTypes.STRING(500),
      traceId: DataTypes.STRING(150),
      supplierId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      customerId: DataTypes.BIGINT,
      shippingName: DataTypes.STRING(100),
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
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      discPersen3: DataTypes.FLOAT,
      discAmount3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalInv: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER,
      excelUrl: DataTypes.STRING(250),
      isedit: DataTypes.TINYINT,
      noInQuote: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_order', 'PurchaseOrder', sequelize)
);

PurchaseOrderAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderAdvpayId', DataTypes.BIGINT),
      purchaseOrderId: DataTypes.BIGINT,
      purchaseAdvpayId: DataTypes.BIGINT,
      purchaseAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isquote: DataTypes.DOUBLE,
      isadv: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_order_advpay',
    'PurchaseOrderAdvance',
    sequelize
  )
);

PurchaseOrderDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderDtId', DataTypes.BIGINT),
      purchaseOrderId: DataTypes.BIGINT,
      purchaseQuoteId: DataTypes.BIGINT,
      purchaseQuoteDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      quoteCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(200),
      qty: DataTypes.FLOAT,
      qtyQ: DataTypes.FLOAT,
      qtyPr: DataTypes.FLOAT,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_order_dt', 'PurchaseOrderDt', sequelize)
);

PurchaseOrderImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderImgId', DataTypes.BIGINT),
      purchaseOrderId: DataTypes.BIGINT,
      imgName: DataTypes.STRING(150),
      urlImg: DataTypes.STRING(500)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_order_img',
    'PurchaseOrderImg',
    sequelize
  )
);

PurchaseOrderItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderItemDtId', DataTypes.BIGINT),
      purchaseOrderDtId: DataTypes.BIGINT,
      purchaseOrderId: DataTypes.BIGINT,
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
    'tr_purchase_order_item_dt',
    'PurchaseOrderItemDt',
    sequelize
  )
);

PurchaseOrderReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderRejectId', DataTypes.BIGINT),
      purchaseOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_order_reject',
    'PurchaseOrderReject',
    sequelize
  )
);

PurchaseOrderRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseOrderRequestId', DataTypes.BIGINT),
      purchaseOrderId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_order_request',
    'PurchaseOrderRequest',
    sequelize
  )
);

export { PurchaseOrder, PurchaseOrderDt, PurchaseOrderImg, PurchaseOrderItemDt };
