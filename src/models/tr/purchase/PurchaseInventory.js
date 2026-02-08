import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseInvoice extends StandardModel {}
class PurchaseInvoiceAdvance extends StandardModel {}
class PurchaseInvoiceDt extends StandardModel {}
class PurchaseInvoiceImg extends StandardModel {}
class PurchaseInvoiceItemDt extends StandardModel {}
class PurchaseInvoicePayment extends StandardModel {}
class PurchaseInvoiceReject extends StandardModel {}
class PurchaseInvoiceRequest extends StandardModel {}

PurchaseInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvId', DataTypes.BIGINT),
      purchaseInvCode: DataTypes.STRING(50),
      purchaseInvCodeTemp: DataTypes.STRING(50),
      purchaseInvDate: DataTypes.DATE,
      purchaseOrderId: DataTypes.BIGINT,
      purchaseOrderCode: DataTypes.STRING(50),
      purchaseReceiveId: DataTypes.STRING(500),
      purchaseReceiveCode: DataTypes.STRING(500),
      traceId: DataTypes.STRING(150),
      importAdvpayId: DataTypes.BIGINT,
      purchaseAdvpayCode: DataTypes.STRING(50),
      warehouseId: DataTypes.INTEGER,
      paymentTermId: DataTypes.INTEGER,
      dueDate: DataTypes.DATE,
      supplierId: DataTypes.INTEGER,
      suppInvNo: DataTypes.STRING(25),
      suppInvDate: DataTypes.DATE,
      suppInvTotal: DataTypes.DOUBLE,
      isvat: DataTypes.INTEGER,
      vatNo: DataTypes.STRING(25),
      vatDate: DataTypes.DATE,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      shipping: DataTypes.STRING(150),
      shippingDate: DataTypes.DATE,
      shippingPrice: DataTypes.DOUBLE,
      handlingPrice: DataTypes.DOUBLE,
      purchaseAdvpayId: DataTypes.BIGINT,
      paymentCode: DataTypes.STRING(50),
      dpAmount: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
      totalAdvpay: DataTypes.DOUBLE,
      totalPay: DataTypes.DOUBLE,
      totalReturn: DataTypes.DOUBLE,
      pphPersen: DataTypes.FLOAT,
      pphAmount: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      type: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_inv', 'PurchaseInvoice', sequelize)
);

PurchaseInvoiceAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvAdvpayId', DataTypes.BIGINT),
      purchaseInvId: DataTypes.BIGINT,
      purchaseAdvpayId: DataTypes.BIGINT,
      purchaseAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isorder: DataTypes.DOUBLE,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_inv_advpay',
    'PurchaseInvoiceAdvance',
    sequelize
  )
);

PurchaseInvoiceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvDtId', DataTypes.BIGINT),
      purchaseInvId: DataTypes.BIGINT,
      purchaseReceiveId: DataTypes.BIGINT,
      purchaseReceiveDtId: DataTypes.BIGINT,
      purchaseReceiveCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      qtyOrder: DataTypes.DOUBLE,
      qtyReceive: DataTypes.DOUBLE,
      qtyIp: DataTypes.INTEGER,
      qtyPp: DataTypes.INTEGER,
      qtyPr: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_inv_dt', 'PurchaseInvoiceDt', sequelize)
);

PurchaseInvoiceImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvImgId', DataTypes.BIGINT),
      purchaseInvId: DataTypes.BIGINT,
      imgName: DataTypes.STRING(150),
      urlImg: DataTypes.STRING(500)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_inv_img',
    'PurchaseInvoiceImg',
    sequelize
  )
);

PurchaseInvoiceItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvItemDtId', DataTypes.BIGINT),
      purchaseInvDtId: DataTypes.BIGINT,
      purchaseInvId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      purchaseReceiveItemDtId: DataTypes.BIGINT,
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
    'tr_purchase_inv_item_dt',
    'PurchaseInvoiceItemDt',
    sequelize
  )
);

PurchaseInvoicePayment.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvPaymentId', DataTypes.BIGINT),
      purchaseInvId: DataTypes.BIGINT,
      purchaseAdvpayId: DataTypes.BIGINT,
      paymentCode: DataTypes.STRING(50),
      dpAmount: DataTypes.DOUBLE,
      dpUsed: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_inv_payment',
    'PurchaseInvoicePayment',
    sequelize
  )
);

PurchaseInvoiceReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvRejectId', DataTypes.BIGINT),
      purchaseInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_inv_reject',
    'PurchaseInvoiceReject',
    sequelize
  )
);

PurchaseInvoiceRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseInvRequestId', DataTypes.BIGINT),
      purchaseInvId: DataTypes.BIGINT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_inv_request',
    'PurchaseInvoiceRequest',
    sequelize
  )
);

export {
  PurchaseInvoice,
  PurchaseInvoiceAdvance,
  PurchaseInvoiceDt,
  PurchaseInvoiceImg,
  PurchaseInvoiceItemDt,
  PurchaseInvoicePayment,
  PurchaseInvoiceReject,
  PurchaseInvoiceRequest
};
