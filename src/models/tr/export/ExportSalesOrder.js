import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesOrder extends StandardModel {}
class ExportSalesOrderAdvancePay extends StandardModel {}
class ExportSalesOrderBc16 extends StandardModel {}
class ExportSalesOrderDt extends StandardModel {}
class ExportSalesOrderItemDt extends StandardModel {}
class ExportSalesOrderReject extends StandardModel {}
class ExportSalesOrderRequest extends StandardModel {}

ExportSalesOrder.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesOrderId', DataTypes.BIGINT),
      exportSalesOrderCode: DataTypes.STRING(50),
      exportSalesOrderCodeTemp: DataTypes.STRING(50),
      exportSalesOrderDate: DataTypes.DATE,
      exportSalesQuoteId: DataTypes.STRING(500),
      exportSalesQuoteCode: DataTypes.STRING(500),
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
      sendDate: DataTypes.DATEONLY,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      warehouseId: DataTypes.INTEGER,
      salesmanId: DataTypes.BIGINT,
      shippingId: DataTypes.INTEGER,
      shipping: DataTypes.TEXT,
      shippingDate: DataTypes.DATE,
      duedate: DataTypes.DATEONLY,
      customerBillingId: DataTypes.INTEGER,
      accNumber: DataTypes.STRING(150),
      accName: DataTypes.STRING(150),
      isvat: DataTypes.TINYINT,
      note: DataTypes.TEXT,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      subtotal: DataTypes.DOUBLE,
      totalCashback: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // discPersen3: DataTypes.FLOAT,
      // discAmount3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      totalQty: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalInv: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      advAmount: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      noInQuote: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_order', 'ExportSalesOrder', sequelize)
);

ExportSalesOrderAdvancePay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesOrderAdvpayId', DataTypes.BIGINT),
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesAdvpayId: DataTypes.BIGINT,
      exportSalesAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isadv: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_order_advpay', 'ExportSalesOrderAdvancePay', sequelize)
);
ExportSalesOrderBc16.init(
  StandardModel.buildPropertyWithOptions(
    {
      exportSalesOrderBc16Id: {
        type: DataTypes.BIGINT,
        field: 'export_sales_order_bc16_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderDtId: DataTypes.BIGINT,
      exportSalesQuoteBc16Id: DataTypes.BIGINT,
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
  StandardModel.buildStandardModelInformation('tr_export_sales_order_bc16', 'ExportSalesOrderBc16', sequelize)
);

ExportSalesOrderDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesOrderDtId', DataTypes.BIGINT),
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesQuoteId: DataTypes.BIGINT,
      exportSalesQuoteDtId: DataTypes.BIGINT,
      quoteCode: DataTypes.STRING(150),
      itemId: DataTypes.BIGINT,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(200),
      qty: DataTypes.FLOAT,
      unit: DataTypes.STRING(150),
      qtySq: DataTypes.FLOAT,
      qtyPl: DataTypes.FLOAT,
      qtyPlApprove: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      unitPrice: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvType: DataTypes.DOUBLE,
      cashback: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_order_dt', 'ExportSalesOrderDt', sequelize)
);

ExportSalesOrderItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesOrderItemDtId', DataTypes.BIGINT),
      exportSalesOrderDtId: DataTypes.BIGINT,
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderBc16Id: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      exportSalesQuoteItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyPl: DataTypes.DOUBLE,
      qtyPlApprove: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_order_item_dt', 'ExportSalesOrderItemDt', sequelize)
);

ExportSalesOrderReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesOrderRejectId', DataTypes.BIGINT),
      exportSalesOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_order_reject', 'ExportSalesOrderReject', sequelize)
);

ExportSalesOrderRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesOrderRequestId', DataTypes.BIGINT),
      exportSalesOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_order_request', 'ExportSalesOrderRequest', sequelize)
);
export {
  ExportSalesOrder,
  ExportSalesOrderAdvancePay,
  ExportSalesOrderBc16,
  ExportSalesOrderDt,
  ExportSalesOrderItemDt,
  ExportSalesOrderReject,
  ExportSalesOrderRequest
};
