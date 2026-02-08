import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class SalesOrder extends StandardModel {}
class SalesOrderAdvance extends StandardModel {}
class SalesOrderDeposit extends StandardModel {}
class SalesOrderDt extends StandardModel {}
class SalesOrderItemDt extends StandardModel {}
class SalesOrderReject extends StandardModel {}
class SalesOrderRequest extends StandardModel {}

SalesOrder.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderId', DataTypes.BIGINT),
      salesOrderCode: DataTypes.STRING(50),
      salesOrderCodeTemp: DataTypes.STRING(50),
      salesOrderDate: DataTypes.INTEGER,
      salesQuoteId: DataTypes.STRING(500),
      salesQuoteCode: DataTypes.STRING(500),
      salesDepositId: DataTypes.STRING(500),
      salesDepositTotal: DataTypes.STRING(500),
      salesDepositCode: DataTypes.STRING(500),
      salesAdvpayId: DataTypes.STRING(500),
      salesAdvpayTotal: DataTypes.STRING(250),
      salesAdvpayCode: DataTypes.STRING(250),
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
      warehouseId: DataTypes.INTEGER,
      salesmanId: DataTypes.BIGINT,
      shippingId: DataTypes.INTEGER,
      shipping: DataTypes.TEXT,
      shippingDate: DataTypes.DATEONLY,
      duedate: DataTypes.DATEONLY,
      customerBillingId: DataTypes.INTEGER,
      accNumber: DataTypes.STRING(150),
      accName: DataTypes.STRING(150),
      isvat: DataTypes.INTEGER,
      note: DataTypes.TEXT('medium'),
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      isFinish: DataTypes.TINYINT,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      totalCashback: DataTypes.DOUBLE,
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
      dpAmount: DataTypes.DOUBLE,
      advAmount: DataTypes.DOUBLE,
      totalPayFinish: DataTypes.DOUBLE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.TINYINT,
      noInQuote: DataTypes.TINYINT,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order', 'SalesOrder', sequelize)
);

SalesOrderAdvance.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderAdvpayId', DataTypes.BIGINT),
      salesOrderId: DataTypes.BIGINT,
      salesAdvpayId: DataTypes.BIGINT,
      salesAdvpayCode: DataTypes.BIGINT,
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isadv: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order_advpay', 'SalesOrderAdvance', sequelize)
);

SalesOrderDeposit.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderDepositId', DataTypes.BIGINT),
      salesOrderId: DataTypes.BIGINT,
      salesDepositId: DataTypes.BIGINT,
      salesDepositCode: DataTypes.BIGINT,
      deposit: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order_deposit', 'SalesOrderDeposit', sequelize)
);

SalesOrderDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderDtId', DataTypes.BIGINT),
      salesOrderId: DataTypes.BIGINT,
      salesQuoteId: DataTypes.BIGINT,
      salesQuoteDtId: DataTypes.BIGINT,
      quoteCode: DataTypes.STRING(40),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      qty: DataTypes.DOUBLE,
      qtyApprove: DataTypes.DOUBLE,
      qtyInput: DataTypes.DOUBLE,
      qtyFoc: DataTypes.DOUBLE,
      qtyReturn: DataTypes.DOUBLE,
      unit: DataTypes.DOUBLE,
      qtySq: DataTypes.INTEGER,
      qtySdn: DataTypes.INTEGER,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      price: DataTypes.DOUBLE,
      priceSuggest: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      unitPrice: DataTypes.DOUBLE,
      discPersen: DataTypes.FLOAT,
      discAmount: DataTypes.DOUBLE,
      discPersen2: DataTypes.FLOAT,
      discAmount2: DataTypes.DOUBLE,
      changeDisc2: DataTypes.TINYINT,
      disc3: DataTypes.DOUBLE,
      taxPersen: DataTypes.FLOAT,
      taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      cashback: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      approveby: DataTypes.DOUBLE,
      approvetime: DataTypes.DATE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order_dt', 'SalesOrderDt', sequelize)
);

SalesOrderItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderItemDtId', DataTypes.BIGINT),
      salesOrderDtId: DataTypes.BIGINT,
      salesOrderId: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      salesQuoteItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyInput: DataTypes.DOUBLE,
      qtyFoc: DataTypes.DOUBLE,
      qtyDn: DataTypes.DOUBLE,
      qtyReturn: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order_item_dt', 'SalesOrderItemDt', sequelize)
);

SalesOrderReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderRejectId', DataTypes.BIGINT),
      salesOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order_reject', 'SalesOrderReject', sequelize)
);

SalesOrderRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('salesOrderRequestId', DataTypes.BIGINT),
      salesOrderId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_sales_order_request', 'SalesOrderRequest', sequelize)
);

export { SalesOrder, SalesOrderAdvance, SalesOrderDeposit, SalesOrderDt, SalesOrderItemDt, SalesOrderReject, SalesOrderRequest };
