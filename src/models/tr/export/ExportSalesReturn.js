import { DataTypes } from 'sequelize';
import DatabaseConnectionSingleton from '../../../configs/DatabaseConnection.js';
import StandardModel from '../../StandardModel.js';
const sequelize = DatabaseConnectionSingleton.getConnection();

class ExportSalesReturn extends StandardModel { }
class ExportSalesReturnBc16 extends StandardModel { }
class ExportSalesReturnCoa extends StandardModel { }
class ExportSalesReturnDt extends StandardModel { }
class ExportSalesReturnItemDt extends StandardModel { }
class ExportSalesReturnReject extends StandardModel { }
class ExportSalesReturnRequest extends StandardModel { }

ExportSalesReturn.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnId', DataTypes.BIGINT),
      exportSalesReturnCode: DataTypes.STRING(50),
      exportSalesReturnCodeTemp: DataTypes.STRING(50),
      exportSalesReturnDate: DataTypes.DATE,
      exportSalesOrderId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.STRING(150),
      traceId: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      customerId: DataTypes.INTEGER,
      currencyId: DataTypes.INTEGER,
      currencyRate: DataTypes.DOUBLE,
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesInvCode: DataTypes.STRING(50),
      exportSalesInvDate: DataTypes.DATE,
      exportSalesInvStatus: DataTypes.TINYINT,
      paymentMethod: DataTypes.TINYINT,
      notaDate: DataTypes.DATE,
      nota: DataTypes.STRING(50),
      notes: DataTypes.TEXT,
      coaId: DataTypes.INTEGER,
      isvat: DataTypes.INTEGER,
      totalQty: DataTypes.DOUBLE,
      subtotal: DataTypes.DOUBLE,
      // discPersen: DataTypes.FLOAT,
      // discAmount: DataTypes.DOUBLE,
      // discPersen2: DataTypes.FLOAT,
      // discAmount2: DataTypes.DOUBLE,
      // discPersen3: DataTypes.FLOAT,
      // discAmount3: DataTypes.DOUBLE,
      vatPersen: DataTypes.FLOAT,
      vatAmount: DataTypes.DOUBLE,
      // taxPersen: DataTypes.FLOAT,
      // taxAmount: DataTypes.DOUBLE,
      total: DataTypes.DOUBLE,
      arReturn: DataTypes.DOUBLE,
      status: DataTypes.TINYINT,
      statusNext: DataTypes.TINYINT,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.INTEGER,
      isedit: DataTypes.INTEGER,
      confirmtimeF: DataTypes.DATE,
      confirmbyF: DataTypes.INTEGER
    },
    { withCreate: true, withModify: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return',
    'ExportSalesReturn',
    sequelize
  )
);

ExportSalesReturnBc16.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnBc16Id', DataTypes.BIGINT),
      exportSalesReturnId: DataTypes.BIGINT,
      exportSalesReturnDtId: DataTypes.BIGINT,
      exportSalesInvBc16Id: DataTypes.BIGINT,
      bc16Id: { type: DataTypes.BIGINT, field: 'bc_16_id' },
      bc16: { type: DataTypes.STRING(150), field: 'bc16' },
      currencyId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      qty: DataTypes.DOUBLE,
      qtyUsed: DataTypes.DOUBLE,
      priceAvg: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return_bc16',
    'ExportSalesReturnBc16',
    sequelize
  )
);

ExportSalesReturnCoa.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnCoaId', DataTypes.BIGINT),
      exportSalesReturnId: DataTypes.BIGINT,
      coaId: DataTypes.BIGINT,
      coaCode: DataTypes.STRING(100),
      coaName: DataTypes.STRING(100),
      coaSubleadgerId: DataTypes.BIGINT,
      coaSubleadgerName: DataTypes.STRING(100),
      coaSubleadgerCode: DataTypes.STRING(100),
      payment: DataTypes.TINYINT,
      paymentNumber: DataTypes.STRING(50),
      paymentDate: DataTypes.DATE,
      confirmtime: DataTypes.DATE,
      confirmby: DataTypes.BIGINT
    },
    { withCreate: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return_coa',
    'ExportSalesReturnCoa',
    sequelize
  )
);

ExportSalesReturnDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnDtId', DataTypes.BIGINT),
      exportSalesReturnId: DataTypes.BIGINT,
      exportSalesOrderDtId: DataTypes.BIGINT,
      exportSalesOrderCode: DataTypes.STRING(150),
      exportSalesInvDtId: DataTypes.BIGINT,
      exportSalesInvId: DataTypes.BIGINT,
      exportSalesInvCode: DataTypes.STRING(25),
      itemId: DataTypes.INTEGER,
      itemCode: DataTypes.STRING(50),
      itemName: DataTypes.STRING(150),
      warehouseId: DataTypes.INTEGER,
      qty: DataTypes.FLOAT,
      unit: DataTypes.STRING(150),
      qtyInv: DataTypes.FLOAT,
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
      total: DataTypes.DOUBLE,
      isreturn: DataTypes.TINYINT
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return_dt',
    'ExportSalesReturnDt',
    sequelize
  )
);

ExportSalesReturnItemDt.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnItemDtId', DataTypes.BIGINT),
      exportSalesReturnDtId: DataTypes.BIGINT,
      exportSalesReturnId: DataTypes.BIGINT,
      exportSalesReturnBc16Id: DataTypes.BIGINT,
      itemStockDtId: DataTypes.BIGINT,
      exportSalesInvItemDtId: DataTypes.BIGINT,
      itemId: DataTypes.BIGINT,
      expDay: DataTypes.STRING(11),
      expMonth: DataTypes.STRING(11),
      expYear: DataTypes.STRING(11),
      qty: DataTypes.DOUBLE
    },
    {}
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return_item_dt',
    'ExportSalesReturnItemDt',
    sequelize
  )
);

ExportSalesReturnReject.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnRejectId', DataTypes.BIGINT),
      exportSalesReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return_reject',
    'ExportSalesReturnReject',
    sequelize
  )
);

ExportSalesReturnRequest.init(
  StandardModel.buildPropertyWithOptions(
    {
      ...StandardModel.buildPrimaryKey('exportSalesReturnRequestId', DataTypes.BIGINT),
      exportSalesReturnId: DataTypes.BIGINT,
      note: DataTypes.TEXT,
      statusRequest: DataTypes.INTEGER,
      userId: DataTypes.BIGINT
    },
    { withCreateString: true }
  ),
  StandardModel.buildStandardModelInformation(
    'tr_export_sales_return_request',
    'ExportSalesReturnRequest',
    sequelize
  )
);

export {
  ExportSalesReturn,
  ExportSalesReturnBc16,
  ExportSalesReturnCoa,
  ExportSalesReturnDt,
  ExportSalesReturnItemDt,
  ExportSalesReturnReject,
  ExportSalesReturnRequest
};
