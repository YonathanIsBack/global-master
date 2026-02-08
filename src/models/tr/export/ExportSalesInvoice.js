import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesInvoice extends StandardModel { }
class ExportSalesInvoiceAdvancePay extends StandardModel { }
class ExportSalesInvoiceBc16 extends StandardModel { }
class ExportSalesInvoiceDt extends StandardModel { }
class ExportSalesInvoiceItemDt extends StandardModel { }
class ExportSalesInvoiceReject extends StandardModel { }
class ExportSalesInvoiceRequest extends StandardModel { }

ExportSalesInvoice.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvId', DataTypes.BIGINT),
      exportSalesInvCode: DataTypes.STRING(50),
      exportSalesInvCodeTemp: DataTypes.STRING(50),
      exportSalesInvDate: DataTypes.DATE,
      exportSalesDepositId: DataTypes.BIGINT,
      exportSalesDepositCode: DataTypes.STRING(150),
      exportSalesAdvpayId: DataTypes.BIGINT,
      exportSalesAdvpayCode: DataTypes.STRING(150),
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.STRING(50),
      exportSalesPackingListId: DataTypes.STRING(500),
      exportSalesPackingListCode: DataTypes.STRING(500),
      companyBankId: DataTypes.BIGINT,
      bankAccountNumber: DataTypes.STRING(150),
      bankAccountName: DataTypes.STRING(150),
      currencyRateCompany: DataTypes.DOUBLE,
      currencyIdCompany: DataTypes.BIGINT,
      traceId: DataTypes.STRING(150),
      containerNo: DataTypes.STRING(150),
      sealNo: DataTypes.STRING(150),
      betNo: DataTypes.STRING(150),
      taxNumber: DataTypes.STRING(150),
      taxDate: DataTypes.DATE,
      warehouseId: DataTypes.INTEGER,
      dueDate: DataTypes.DATEONLY,
      customerId: DataTypes.INTEGER,
      customerDeliveryId: DataTypes.BIGINT,
      customerDeliveryAddr: DataTypes.TEXT,
      customerDelivery: DataTypes.TEXT,
      countryId: DataTypes.BIGINT,
      provinceId: DataTypes.BIGINT,
      cityId: DataTypes.BIGINT,
      districtId: DataTypes.BIGINT,
      subdistrictId: DataTypes.BIGINT,
      sendDate: DataTypes.DATE,
      creditLimit: DataTypes.DOUBLE,
      paymentTermId: DataTypes.BIGINT,
      salesmanId: DataTypes.BIGINT,
      salesDeposit: DataTypes.DOUBLE,
      customerInvNo: DataTypes.STRING(25),
      customerInvDate: DataTypes.DATEONLY,
      isvat: DataTypes.INTEGER,
      vatNo: DataTypes.STRING(25),
      vatDate: DataTypes.DATEONLY,
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
      shipping: DataTypes.STRING(150),
      shippingPrice: DataTypes.DOUBLE,
      handlingPrice: DataTypes.DOUBLE,
      paymentCode: DataTypes.STRING(50),
      dpAmount: DataTypes.DOUBLE,
      advAmount: DataTypes.DOUBLE,
      advAmountPayment: DataTypes.DOUBLE,
      sisaPay: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      totalCreditNote: DataTypes.DOUBLE,
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
  StandardModel.buildStandardModelInformation('tr_export_sales_inv', 'ExportSalesInvoice', sequelize)
);

ExportSalesInvoiceAdvancePay.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvAdvpayId', DataTypes.BIGINT),
      exportSalesOrderAdvpayId: DataTypes.BIGINT,
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesAdvpayId: DataTypes.BIGINT,
      exportSalesAdvpayCode: DataTypes.STRING(50),
      totalDp: DataTypes.DOUBLE,
      totalUsed: DataTypes.DOUBLE,
      remaining: DataTypes.DOUBLE,
      isorder: DataTypes.TINYINT,
      type: DataTypes.STRING(20)
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_inv_advpay', 'ExportSalesInvoiceAdvancePay', sequelize)
);
ExportSalesInvoiceBc16.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvBc16Id', DataTypes.BIGINT),
      exportSalesInvBc16Id: {
        type: DataTypes.BIGINT,
        field: 'export_sales_inv_bc16_id',
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          isInt: { msg: 'Primary Key must be Integer' },
          notNull: { msg: 'Primary Key cannot be null' }
        }
      },
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesInvDtId: DataTypes.BIGINT,
      exportSalesPackingListBc16Id: { type: DataTypes.BIGINT, field: 'export_sales_packing_list_bc16_id' },
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      currencyId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      bc16: { type: DataTypes.STRING(150), field: 'bc16' },
      qty: DataTypes.DOUBLE,
      qtyUsed: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_inv_bc16', 'ExportSalesInvoiceBc16', sequelize)
);

ExportSalesInvoiceDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvDtId', DataTypes.BIGINT),
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesOrderDtId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.STRING(150),
      exportSalesPackingListId: DataTypes.BIGINT,
      exportSalesPackingListDtId: DataTypes.BIGINT,
      exportSalesPackingListCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      bc16: { type: DataTypes.STRING(50), field: 'bc_16' },
      // currencyId: DataTypes.BIGINT,
      qty: DataTypes.DOUBLE,
      unit: DataTypes.STRING(150),
      qtyOrder: DataTypes.DOUBLE,
      qtyDeliveryFixed: DataTypes.DOUBLE,
      qtySp: DataTypes.INTEGER,
      qtySr: DataTypes.INTEGER,
      price: DataTypes.DOUBLE,
      unitPrice: DataTypes.DOUBLE,
      price2: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // disc3: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      adjInv: DataTypes.DOUBLE,
      adjInvType: DataTypes.TINYINT,
      total: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_inv_dt', 'ExportSalesInvoiceDt', sequelize)
);

ExportSalesInvoiceItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvItemDtId', DataTypes.BIGINT),
      exportSalesInvDtId: DataTypes.BIGINT,
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesInvBc16Id: DataTypes.BIGINT,
      bc16: { type: DataTypes.STRING(150), field: 'bc16' },
      itemStockDtId: DataTypes.BIGINT,
      exportSalesPackingListItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE,
      qtyR: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_inv_item_dt', 'ExportSalesInvoiceItemDt', sequelize)
);

ExportSalesInvoiceReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvRejectId', DataTypes.BIGINT),
      exportSalesInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_inv_reject', 'ExportSalesInvoiceReject', sequelize)
);

ExportSalesInvoiceRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesInvRequestId', DataTypes.BIGINT),
      exportSalesInvId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation('tr_export_sales_inv_request', 'ExportSalesInvoiceRequest', sequelize)
);
export {
  ExportSalesInvoice,
  ExportSalesInvoiceAdvancePay,
  ExportSalesInvoiceBc16,
  ExportSalesInvoiceDt,
  ExportSalesInvoiceItemDt,
  ExportSalesInvoiceReject,
  ExportSalesInvoiceRequest
};
