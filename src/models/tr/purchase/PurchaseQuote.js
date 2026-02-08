import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class PurchaseQuote extends StandardModel {}
class PurchaseQuoteAdvance extends StandardModel {}
class PurchaseQuoteDt extends StandardModel {}
class PurchaseQuoteImg extends StandardModel {}
class PurchaseQuoteItemDt extends StandardModel {}
class PurchaseQuoteReject extends StandardModel {}
class PurchaseQuoteRequest extends StandardModel {}

PurchaseQuote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteId', DataTypes.BIGINT),
      traceId: DataTypes.STRING(150),
      companyId: DataTypes.INTEGER,
      warehouseId: DataTypes.INTEGER,
      purchaseQuoteCode: DataTypes.STRING(50),
      purchaseQuoteCodeTemp: DataTypes.STRING(50),
      purchaseQuoteDate: DataTypes.DATEONLY,
      supplierId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      paymentTermId: DataTypes.INTEGER,
      shipping: DataTypes.STRING(500),
      shippingDate: DataTypes.DATEONLY,
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
      totalAdvpay: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      isvat: DataTypes.INTEGER,
      total: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER,
      excelUrl: DataTypes.STRING(250),
      isedit: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_quote', 'PurchaseQuote', sequelize)
);

PurchaseQuoteAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteAdvpayId', DataTypes.BIGINT),
      purchaseQuoteId: DataTypes.BIGINT,
      purchaseAdvpayId: DataTypes.BIGINT,
      purchaseAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isadv: DataTypes.TINYINT
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_quote_advpay',
    'PurchaseQuoteAdvance',
    sequelize
  )
);

PurchaseQuoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteDtId', DataTypes.BIGINT),
      purchaseQuoteId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      qtyApprove: DataTypes.DOUBLE,
      qtyPo: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
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
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_purchase_quote_dt', 'PurchaseQuoteDt', sequelize)
);

PurchaseQuoteImg.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteImgId', DataTypes.BIGINT),
      purchaseQuoteId: DataTypes.BIGINT,
      imgName: DataTypes.STRING(150),
      urlImg: DataTypes.STRING(500)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_quote_img',
    'PurchaseQuoteImg',
    sequelize
  )
);

PurchaseQuoteItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteItemDtId', DataTypes.BIGINT),
      purchaseQuoteDtId: DataTypes.BIGINT,
      purchaseQuoteId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyO: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_quote_item_dt',
    'PurchaseQuoteItemDt',
    sequelize
  )
);

PurchaseQuoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteRejectId', DataTypes.BIGINT),
      purchaseQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_quote_reject',
    'PurchaseQuoteReject',
    sequelize
  )
);

PurchaseQuoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('purchaseQuoteRequestId', DataTypes.BIGINT),
      purchaseQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_purchase_quote_request',
    'PurchaseQuoteRequest',
    sequelize
  )
);

export {
  PurchaseQuote,
  PurchaseQuoteDt,
  PurchaseQuoteImg,
  PurchaseQuoteItemDt,
  PurchaseQuoteReject,
  PurchaseQuoteRequest
};
