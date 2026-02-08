import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesQuote extends StandardModel {}
class SalesQuoteDt extends StandardModel {}
class SalesQuoteItemDt extends StandardModel {}
class SalesQuoteReject extends StandardModel {}
class SalesQuoteRequest extends StandardModel {}

SalesQuote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesQuoteId', DataTypes.BIGINT),
      warehouseId: DataTypes.INTEGER,
      salesQuoteCode: DataTypes.STRING(50),
      salesQuoteCodeTemp: DataTypes.STRING(50),
      salesQuoteDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      customerDeliveryId: DataTypes.BIGINT,
      customerDeliveryAddr: DataTypes.TEXT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictId: DataTypes.BIGINT,
      postalCode: DataTypes.STRING(50),
      sendDate: DataTypes.DATE,
      salesmanId: DataTypes.BIGINT,
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
      isvat: DataTypes.INTEGER,
      total: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_quote', 'SalesQuote', sequelize)
);

SalesQuoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesQuoteDtId', DataTypes.BIGINT),
      salesQuoteId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      qtyApprove: DataTypes.DOUBLE,
      qtyInput: DataTypes.DOUBLE,
      qtyFoc: DataTypes.DOUBLE,
      qtySo: DataTypes.DOUBLE,
      qtyFocSo: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      cashback: DataTypes.DOUBLE,
      note: DataTypes.TEXT,
      total: DataTypes.DOUBLE,
      approveby: DataTypes.DOUBLE,
      approvetime: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_quote_dt', 'SalesQuoteDt', sequelize)
);

SalesQuoteItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesQuoteItemDtId', DataTypes.BIGINT),
      salesQuoteDtId: DataTypes.BIGINT,
      salesQuoteId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyInput: DataTypes.DOUBLE,
      qtyFoc: DataTypes.DOUBLE,
      qtyO: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_quote_item_dt',
    'SalesQuoteDtItemDt',
    sequelize
  )
);

SalesQuoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesQuoteRejectId', DataTypes.BIGINT),
      salesQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_quote_reject',
    'SalesQuoteDtReject',
    sequelize
  )
);

SalesQuoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesQuoteRequestId', DataTypes.BIGINT),
      salesQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_sales_quote_request',
    'SalesQuoteDtRequest',
    sequelize
  )
);

export { SalesQuote, SalesQuoteDt, SalesQuoteItemDt, SalesQuoteReject, SalesQuoteRequest };
