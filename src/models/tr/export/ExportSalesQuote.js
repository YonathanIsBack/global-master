import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesQuote extends StandardModel {}
class ExportSalesQuoteBc16 extends StandardModel {}
class ExportSalesQuoteDt extends StandardModel {}
class ExportSalesQuoteItemDt extends StandardModel {}
class ExportSalesQuoteReject extends StandardModel {}
class ExportSalesQuoteRequest extends StandardModel {}

ExportSalesQuote.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesQuoteId', DataTypes.BIGINT),
      warehouseId: DataTypes.INTEGER,
      exportSalesQuoteCode: DataTypes.STRING(50),
      exportSalesQuoteCodeTemp: DataTypes.STRING(50),
      exportSalesQuoteDate: DataTypes.DATE,
      traceId: DataTypes.STRING(150),
      customerId: DataTypes.INTEGER,
      creditLimit: DataTypes.DOUBLE,
      paymentTermId: DataTypes.DOUBLE,
      customerDeliveryId: DataTypes.BIGINT,
      customerDeliveryAddr: DataTypes.STRING(500),
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictId: DataTypes.BIGINT,
      sendDate: DataTypes.DATEONLY,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      salesmanId: DataTypes.BIGINT,
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
      // discAmount3: DataTypes.FLOAT,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      isvat: DataTypes.TINYINT,
      total: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_quote', 'ExportSalesQuote', sequelize)
);

ExportSalesQuoteBc16.init(
  StandardModel.buildPropertyWithOptions(
    {
      exportSalesQuoteBc16Id: {
        type: DataTypes.BIGINT,
        field: 'export_sales_quote_bc16_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      exportSalesQuoteId: DataTypes.BIGINT,
      exportSalesQuoteDtId: DataTypes.BIGINT,
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      bc16: { type: DataTypes.STRING(150), field: 'bc16' },
      currencyId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      qty: DataTypes.DOUBLE,
      qtyUsed: DataTypes.DOUBLE,
      qtyUsedApprove: DataTypes.DOUBLE
    },
    {}
  ),

  StandardModel.buildStandardModelInformation('tr_export_sales_quote_bc16', 'ExportSalesQuoteBc16', sequelize)
);

ExportSalesQuoteDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesQuoteDtId', DataTypes.BIGINT),
      exportSalesQuoteId: DataTypes.BIGINT,
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      bc16: { type: DataTypes.STRING(100), field: 'bc_16' },
      unit: DataTypes.STRING(250),
      qty: DataTypes.FLOAT,
      qtySo: DataTypes.FLOAT,
      qtySoApprove: DataTypes.DOUBLE,
      unitPrice: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      cashback: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_quote_dt', 'ExportSalesQuoteDt', sequelize)
);

ExportSalesQuoteItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesQuoteItemDtId', DataTypes.BIGINT),
      exportSalesQuoteDtId: DataTypes.BIGINT,
      exportSalesQuoteId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      exportSalesQuoteBc16Id: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyO: DataTypes.DOUBLE,
      qtyOApprove: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_quote_item_dt', 'ExportSalesQuoteItemDt', sequelize)
);

ExportSalesQuoteReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesQuoteRejectId', DataTypes.BIGINT),
      exportSalesQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_quote_reject', 'ExportSalesQuoteReject', sequelize)
);

ExportSalesQuoteRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesQuoteRequestId', DataTypes.BIGINT),
      exportSalesQuoteId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_quote_request', 'ExportSalesQuoteRequest', sequelize)
);

export { ExportSalesQuote, ExportSalesQuoteBc16, ExportSalesQuoteDt, ExportSalesQuoteItemDt, ExportSalesQuoteReject, ExportSalesQuoteRequest };
